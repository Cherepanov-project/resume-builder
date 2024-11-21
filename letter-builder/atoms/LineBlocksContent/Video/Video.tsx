  import { IconVideo } from "@components/atoms/Icons/LetterCardIcons";

const VideoComponent = () => {
  const iconStyle = { color: "#515659", scale: 1.3 };

  return (
    <div className="text-[#515659]">
      <div className="flex items-center justify-center">
        <IconVideo {...iconStyle} />
      </div>
      <br />
      Видео
    </div>
  );
};

export default VideoComponent;
