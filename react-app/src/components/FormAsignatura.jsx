import React, { useState } from "react";
import Card from "./Card";

const FormAsignatura = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    creditos: "",
    profesor: "",
    descripcion: "",
    horario: "",
    aula: "",
    prerrequisitos: "",
    cupoMaximo: "",
  });

  const profesores = [
    "Anya Volkova",
    "Kai Chen",
    "Zara Elara",
    "Rowan Ashcroft",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateField = (field, value) => {
    switch (field) {
      case "nombre":
        return value.length >= 3 && value.length <= 50;
      case "creditos":
        return Number(value) > 0 && Number(value) <= 10;
      case "horario":
        return /^[a-zA-Z0-9 ,:-]+$/.test(value); // Valida letras, números, comas, guiones, etc.
      case "cupoMaximo":
        return Number(value) > 0 && Number(value) <= 100;
      default:
        return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    // Validación de campos (ya lo tienes bien implementado)

    if (isValid) {
      try {
        const response = await axios.post(
          "https://api-asignaturas-production.up.railway.app/api/asignaturas", // URL correcta
          formData
        );
        console.log(response.data); // Ver la respuesta
        alert("Asignatura creada con éxito");
      } catch (error) {
        console.error("Error al enviar los datos:", error);
        alert("Hubo un error al crear la asignatura");
      }
    }
  };

  return (
    <>
      <h1 className="title">Agregar nueva asignatura</h1>
      <Card>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej: Matemáticas II"
              required
            />
          </label>
          <label>
            Profesor
            <select
              name="profesor"
              value={formData.profesor}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un profesor</option>
              {profesores.map((profesor, index) => (
                <option key={index} value={profesor}>
                  {profesor}
                </option>
              ))}
            </select>
          </label>
          <label>
            Descripción
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Descripción de la asignatura"
            ></textarea>
          </label>
          <label>
            Horario
            <input
              type="text"
              name="horario"
              value={formData.horario}
              onChange={handleChange}
              placeholder="Ej: Lunes y Miércoles 10:00 - 12:00"
              required
            />
          </label>
          {/* Fila para los campos pequeños */}
          <div className="form-row">
            <label>
              Unidades de crédito
              <input
                type="number"
                name="creditos"
                value={formData.creditos}
                onChange={handleChange}
                className="small-input"
                required
              />
            </label>
            <label>
              Aula
              <input
                type="text"
                name="aula"
                value={formData.aula}
                onChange={handleChange}
                className="small-input"
                placeholder="Ej: 15"
                required
              />
            </label>
            <label>
              Cupo Máximo
              <input
                type="number"
                name="cupoMaximo"
                value={formData.cupoMaximo}
                onChange={handleChange}
                className="small-input"
                required
              />
            </label>
          </div>
          <label>
            Prerrequisitos
            <input
              type="text"
              name="prerrequisitos"
              value={formData.prerrequisitos}
              onChange={handleChange}
              placeholder="Ej: Matemáticas I, Cálculo I"
            />
          </label>
          <button type="submit">Agregar Asignatura</button>
        </form>
      </Card>
    </>
  );
};

export default FormAsignatura;
