import React from "react";

const FormAsignatura = ({
  formData,
  profesores,
  handleChange,
  handleSubmit,
}) => (
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
      Unidades de crédito
      <input
        type="number"
        name="creditos"
        value={formData.creditos}
        onChange={handleChange}
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
    <label>
      Aula
      <input
        type="text"
        name="aula"
        value={formData.aula}
        onChange={handleChange}
        placeholder="Ej: 15"
        required
      />
    </label>
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
    <label>
      Cupo Máximo
      <input
        type="number"
        name="cupoMaximo"
        value={formData.cupoMaximo}
        onChange={handleChange}
        required
      />
    </label>
    <button type="submit">Agregar Asignatura</button>
  </form>
);

export default FormAsignatura;
