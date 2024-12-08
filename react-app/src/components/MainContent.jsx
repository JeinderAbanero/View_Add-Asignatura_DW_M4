// src/components/MainContent.jsx
import React from "react";
import SubjectForm from "./FormAsignatura";

const MainContent = ({ formData, profesores, handleChange, handleSubmit }) => {
  return (
    <main className="main-content">
      <SubjectForm
        formData={formData}
        profesores={profesores}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default MainContent;
