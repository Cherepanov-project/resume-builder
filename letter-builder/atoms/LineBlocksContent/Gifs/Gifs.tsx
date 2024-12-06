import { IconPngGIFS } from "@components/atoms/Icons/LetterCardIcons";

const GifsComponent = () => {
  return (
    <div style={{ color: "#ffffff" }}>
      <div className="flex justify-center" style={{ marginBottom: "1rem" }}>
        <IconPngGIFS scale={1.3} />
      </div>
      <button
        style={{
          border: "none",
          color: "#ffffff",
          backgroundColor: "#3B82F6",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          transition: "background-color 0.3s",
        }}
      >
        Search for gifs with Giphy
      </button>
    </div>
  );
};

export default GifsComponent;
