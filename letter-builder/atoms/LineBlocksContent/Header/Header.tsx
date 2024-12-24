import { useStyleElement } from "../../../hooks/useStyleElement";

const Header = ({ id }: { id: string }) => {
  const { handleOpen, handleTextChange, parameters } = useStyleElement(id, {
    color: "#000",
    fontSize: "20px",
    lineHeight: "24px",
    fontFamily: "Roboto, sans-serif",
  });

  return (
    <h2
      style={{
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        outline: "none",
        ...parameters?.styles,
      }}
      contentEditable
      suppressContentEditableWarning
      onClick={handleOpen}
      onBlur={(e) => handleTextChange(e.target.textContent || "Новый заголовок")}
    >
      {parameters?.text || "Новый заголовок"}
    </h2>
  );
};

export default Header;
