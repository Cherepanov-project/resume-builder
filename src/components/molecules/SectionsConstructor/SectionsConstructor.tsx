import MemoizedConstructorRowEl from "../SectionsConstructorRowEl";
import { useTypedSelector } from "@/hooks/cvTemplateHooks";
import { memo } from "react";
import { Box } from "@mui/material";

type SectionsConstructorType = {
  setError: React.Dispatch<React.SetStateAction<string>>;
  setSeverity: React.Dispatch<React.SetStateAction<string>>;
  isPreviewMode?: boolean; // Добавляем prop для режима превью
};

const SectionsConstructor: React.FC<SectionsConstructorType> = ({
  setError,
  setSeverity,
  isPreviewMode = false,
}) => {
  const rowsArr = Object.keys(useTypedSelector((state) => state.sectionsManager.layoutDate));

  // отображение рядов секции
  const rowEls = () => {
    return rowsArr.map((row) => (
      <MemoizedConstructorRowEl
        key={row}
        row={Number(row)}
        setError={setError}
        setSeverity={setSeverity}
        isPreviewMode={isPreviewMode} // Передаем режим превью в каждый ряд
      />
    ));
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        flexDirection: "column",
        m: isPreviewMode ? "0" : "auto 0", // Убираем отступы в режиме превью
        width: "fill-available",
        boxShadow: isPreviewMode ? "none" : "1px 1px 5px 0px rgba(77,75,77,0.83)", // Убираем тень в превью
        borderRadius: isPreviewMode ? "0" : "5px", // Убираем скругление в превью
        minHeight: isPreviewMode ? "100vh" : "auto", // Во всю высоту в превью
      }}
    >
      {rowEls()}
    </Box>
  );
};

export const MemoizedSectionsConstructor = memo(SectionsConstructor);
