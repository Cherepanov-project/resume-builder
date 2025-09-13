import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IGridContainers } from "@/store/landingBuilder/layoutSlice";
import { Layout } from "react-grid-layout";
import { T_BlockElement } from "@/types/landingBuilder";
import { useAppSelector, useAppDispatch } from "@/store/store";
import classes from "./LetterBuilderHeader.module.scss";
import { useTypedSelector } from "@/hooks/cvTemplateHooks";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { setLetter } from "@/store/LetterBuilderStore/savedLettersSlice";
import { RootState } from "@/store/store";

const LetterBuilderHeader = () => {
  const theme = useTheme();
  const [visibleStructure, setVisibleStructure] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const containerEl: IGridContainers | null = useAppSelector(
    (state: RootState) => state.container.container || null,
  ) as IGridContainers | null;
  const visibleIcon = visibleStructure ? <Visibility /> : <VisibilityOff />;
  const buttonVisibleText = visibleStructure ? "Отобразить структуру" : "Скрыть структуру";
  const onClickHandler = () => {
    setVisibleStructure((prev) => !prev);
  };
  const navigate = useNavigate();
  const gridContainers = useTypedSelector((state) => state.layout.gridContainers);
  const width = useTypedSelector((state) => state.layout.windowWidth);
  const container = useAppSelector((state) => state.container.container);

  if (!container) return null;

  const isContainerValid = (obj: unknown): obj is IGridContainers => {
    return (
      typeof obj === "object" &&
      obj !== null &&
      "id" in obj &&
      "height" in obj &&
      "elements" in obj &&
      "layout" in obj
    );
  };

  const workspaceLayout = gridContainers[0]?.elements.activeElements.reduce(
    (acc: Layout[], el: T_BlockElement) => {
      return [...acc, el.layout];
    },
    [],
  );

  const handleClickBtnContinue: () => void = () => {
    if (!isContainerValid(container)) {
      console.error("Container is not valid");
      return;
    }

    // Сохранение данных о расположении блоков
    const layoutData = container.elements.activeElements.map((el) => ({
      id: el.id,
      layout: el.layout,
    }));
    const layoutString = JSON.stringify(layoutData);

    const htmlTemplate = `
        <div class="${classes["container"]}">
          <ResponsiveGridLayout
            class="${classes["grid"]}"
            layout="${JSON.stringify(workspaceLayout)}"
            cols="1"
            rowHeight="${container.height}"
            width="${String(width - 76 - (Number(width) - 120) * 0.3)}"
            margin="[8, 8]"
            isDraggable="false"
            isDroppable="false"
            isResizable="false"
          >
            ${container.elements.activeElements
              .map(
                (el) => `
              <div
                key="${el.layout.i}"
                class="${classes["item"]}"
              >
                <DynamicComponentRenderer
                  id="${el.id}"
                  Component="${el.name}"
                  source="${el.source || "atoms"}"
                  props="${JSON.stringify(el.props)}"
                  columns="${el.columns || 1}"
                  layout="${JSON.stringify(el.layout)}"
                  children="${JSON.stringify(el.children)}"
                  containerId="${container.id}"
                />
              </div>
            `,
              )
              .join("")}
          </ResponsiveGridLayout>
        </div>
      `;

    navigate("/email", {
      state: {
        layoutData: layoutString,
        htmlTemplate: htmlTemplate,
        elements: container.elements.activeElements,
      },
    });
  };

  return (
    <div className="flex justify-between items-center w-full text-xs text-white bg-gray-700 h-30">
      {/* Left Section */}
      <div className="flex items-center h-full divide-x divide-gray-500">
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
        <button
          onClick={() => dispatch(setLetter(containerEl!))}
          className={`${theme.custom.letterHeaderButton} bg-gray-500 hover:bg-gray-600`}
        >
          Сохранить
        </button>
        <button
          onClick={handleClickBtnContinue}
          className={`${theme.custom.letterHeaderButton} bg-teal-500 hover:bg-teal-500`}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default LetterBuilderHeader;
