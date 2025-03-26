import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CustomizedMenus from "@components/molecules/CustomizedMenus";

const LetterBuilderHeader = () => {
  const [visibleStructure, setVisibleStructure] = useState<boolean>(true);

  const visibleIcon = visibleStructure ? <Visibility /> : <VisibilityOff />;
  const buttonVisibleText = visibleStructure ? "Отобразить структуру" : "Скрыть структуру";
  const onClickHandler = () => {
    setVisibleStructure((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between h-30 w-full bg-gray-700 text-xs text-white">
      {/* Left Section */}
      <div className="flex items-center h-full divide-x divide-gray-500 ">
        <CustomizedMenus />
        <button
          onClick={onClickHandler}
          className="ml-5 items-center px-4 text-white transition bg-gray-700 "
        >
          {visibleIcon}
          <span className={`ml-2`}>{buttonVisibleText}</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 mr-4">
        <button className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600 transition">
          Сохранить
        </button>
        <button className="px-4 py-2 bg-teal-500 rounded hover:bg-teal-500 transition">
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default LetterBuilderHeader;
