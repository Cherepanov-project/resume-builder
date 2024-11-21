import { IconTimer } from "@components/atoms/Icons/LetterCardIcons";

const TimerComponent = () => {
  return (
    <div className="text-base text-[#515659]">
      <div>
        <IconTimer color="#515659" scale={0.6} />
      </div>
      <br />
      Edit timer
    </div>
  );
};

export default TimerComponent;
