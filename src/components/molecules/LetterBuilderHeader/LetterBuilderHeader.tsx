import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CustomizedMenus from "../CustomizedMenus";

const LetterBuilderHeader = () => {
  const [visibleStructure, setVisibleStructure] = useState<boolean>(true);

  const visibleIcon = visibleStructure ? <Visibility /> : <VisibilityOff />;
  const buttonVisibleText = visibleStructure ? "Отобразить структуру" : "Скрыть структуру";
  const onClickHandler = () => {
    setVisibleStructure((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center w-full text-xs text-white bg-gray-700 h-30">
      {/* Left Section */}
      <div className="flex items-center h-full divide-x divide-gray-500">
        <CustomizedMenus />
        <button
          onClick={onClickHandler}
          className="items-center px-4 ml-5 text-white bg-gray-700 transition"
        >
          {visibleIcon}
          <span className="ml-2">{buttonVisibleText}</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center mr-4 space-x-4">
        <button className="px-4 py-2 bg-gray-500 rounded transition hover:bg-gray-600">
          Сохранить
        </button>
        <button className="px-4 py-2 bg-teal-500 rounded transition hover:bg-teal-500">
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default LetterBuilderHeader;
