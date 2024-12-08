import React from "react";
import FormAsignatura from "./FormAsignatura";

const MainContent = ({ formData, profesores, handleChange, handleSubmit }) => {
  return (
    <main className="main-content">
      <h1>Agregar nueva asignatura</h1>
      <FormAsignatura
        formData={formData}
        profesores={profesores}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default MainContent;
