import { IconPngGIFS } from "@components/atoms/Icons/LetterCardIcons";

const GifsComponent = () => {
  return (
    <div className="text-gray-600">
      <div className="flex items-center justify-center">
        <IconPngGIFS scale={1.3} />
      </div>
      <br />
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Search for gifs with Giphy
      </button>
    </div>
  );
};

export default GifsComponent;
