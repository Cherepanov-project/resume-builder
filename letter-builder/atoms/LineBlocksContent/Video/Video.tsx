import { IconPngVideo } from "@components/atoms/Icons/LetterCardIcons";

const VideoComponent = () => {
  const iconStyle = { color: "#515659", scale: 1.3 };

  return (
    <div style={{ color: "#515659", textAlign: "center" }}>
      <div className="flex justify-center" style={{ marginBottom: "0.5rem" }}>
        <IconPngVideo {...iconStyle} />
      </div>
      Видео
    </div>
  );
};

export default VideoComponent;
