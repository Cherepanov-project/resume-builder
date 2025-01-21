import { useStyleElement } from "../../../hooks/useStyleElement";

const ButtonComponent = ({ id }: { id: string }) => {
  const { handleOpen, handleTextChange, parameters } = useStyleElement(
    id,
    {
      backgroundColor: "#2563eb",
      color: "#ffffff",
      borderRadius: "6px",
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: "Roboto, sans-serif",
    },
    "button",
  );

  return (
    <a
      href={parameters?.href || ""}
      style={{
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        borderStyle: "solid",
        borderWidth: "1px",
        outline: "none",
        ...parameters?.styles,
      }}
      contentEditable
      suppressContentEditableWarning
      onClick={handleOpen}
      onBlur={(e) => handleTextChange(e.target.textContent || "Кнопка")}
    >
      {parameters?.text || "Кнопка"}
    </a>
  );
};

export default ButtonComponent;
