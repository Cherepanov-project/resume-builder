import { IconPngTimer } from "@components/atoms/Icons/LetterCardIcons";

const TimerComponent = () => {
  return (
    <div className="text-[#515659]">
      <div className="flex items-center justify-center">
        <IconPngTimer scale={1.9} />
      </div>
      <br />
      Edit timer
    </div>
  );
};

export default TimerComponent;
