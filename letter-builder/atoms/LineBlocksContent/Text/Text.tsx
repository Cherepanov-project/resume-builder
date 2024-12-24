import { useStyleElement } from "../../../hooks/useStyleElement";

const TextComponent = ({ id }: { id: string }) => {
  const { handleOpen, handleTextChange, parameters } = useStyleElement(id, {
    color: "#000",
    fontSize: "14px",
    lineHeight: "20px",
    fontFamily: "Roboto, sans-serif",
  });

  return (
    <p
      style={{
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        outline: "none",
        ...parameters?.styles,
      }}
      contentEditable
      suppressContentEditableWarning
      onClick={handleOpen}
      onBlur={(e) => handleTextChange(e.target.textContent || "Я новый текстовый блок")}
    >
      {parameters?.text || "Я новый текстовый блок"}
    </p>
  );
};

export default TextComponent;
