import { IconPngTimer } from "@components/atoms/Icons/LetterCardIcons";

const TimerComponent = () => {
  return (
    <div style={{ color: "#515659", marginTop: "0.5rem" }}>
      <div className='flex justify-center' style={{ marginBottom: "1rem" }}>
        <IconPngTimer scale={1.9} />
      </div>
      Edit timer
    </div>
  );
};

export default TimerComponent;
