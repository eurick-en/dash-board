import React from "react";

const AddRemoveButtons = ({ onAdd }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1,
      }}
    >
      <button
        onClick={onAdd}
        style={{
          padding: "10px 20px",
          backgroundColor: "#3498db",
          color: "white", 
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#2980b9"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#3498db"}
      >
        Adicionar Card
      </button>
    </div>
  );
};

export default AddRemoveButtons;
