import React from "react";

const DataPortal = ({ data, rect }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: rect?.top,
        left: rect?.left,
        background: "white",
        padding: "0px 10px",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.5)",
        zIndex: 2,
      }}
    >
      <p>{data.category}</p>
      <p>{data.percentage}</p>
    </div>
  );
};

export default DataPortal;
