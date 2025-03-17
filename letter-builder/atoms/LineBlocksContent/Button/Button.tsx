import React from "react";
import { useStyleElement } from "../../../hooks/useStyleElement";
import Button from "@mui/material/Button";

interface ButtonComponentProps {
  id: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ id }) => {
  const { handleOpen, handleTextChange, parameters } = useStyleElement(
    id,
    {
      backgroundColor: "#2563eb",
      color: "#ffffff",
      borderRadius: "10px",
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: "Roboto, sans-serif",
    },
    "button",
  );

  if (!parameters) {
    return <div>Loading...</div>;
  }

  return (
    <Button
      variant="contained"
      href={parameters?.href || ""}
      style={{
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        borderStyle: "solid",
        borderWidth: "1px",
        outline: "none",
        ...(parameters?.styles || {}),
      }}
      contentEditable
      suppressContentEditableWarning
      onClick={handleOpen}
      onBlur={(e) => handleTextChange(e.target.textContent || "Кнопка")}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          e.currentTarget.blur();
        }
      }}
    >
      {parameters?.text || "Кнопка"}
    </Button>
  );
};

export default ButtonComponent;
