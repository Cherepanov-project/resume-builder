import { IconStickers } from "@components/atoms/Icons/LetterCardIcons";

const StickersComponent = () => {
  return (
    <div className="text-[#515659]">
      <div className="flex items-center justify-center">
        <IconStickers color="#515659" scale={1.3} />
      </div>
      <br />
      <button className="bg-transparent text-[#515659] border border-[#515659] py-2 px-4 rounded-md hover:bg-[#515659] hover:text-white transition duration-150">
        Search for stickers with Giphy
      </button>
    </div>
  );
};

export default StickersComponent;
