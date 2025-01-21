import { useStyleElement } from "../../../hooks/useStyleElement";

const Paragraph = ({ id }: { id: string }) => {
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
      onBlur={(e) => handleTextChange(e.target.textContent || "Я новый параграф")}
    >
      {parameters?.text || "Я новый параграф"}
    </p>
  );
};

export default Paragraph;
