import { useState, FC, memo } from "react";
import { IGridContainers } from "../../src/store/LetterBuilderStore/letterLayoutSlice";
import { useNavigate } from "react-router-dom";
import { getHtmlTemplate } from "./utils/getHtmlTemplate";
import { Layout } from "react-grid-layout";

import classes from "./LetterGridContainer.module.scss";

export interface LetterGridContainerEmailButton {
  container: IGridContainers;
  workspaceLayout: Layout[];
  width: number;
}

export const LetterGridContainerEmailButton: FC<LetterGridContainerEmailButton> = memo(({
  container,
  workspaceLayout,
  width,
}) => {
  const [isHoverBtn, setIsHoverBtn] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleEmailButtonClick = () => {
    // Сохранение данных о расположении блоков
    const layoutData = container.elements.activeElements.map((el) => ({
      id: el.id,
      layout: el.layout,
    }));

    const layoutString = JSON.stringify(layoutData);
    const htmlTemplate = getHtmlTemplate(container, workspaceLayout, width);

    navigate("/email", {
      state: {
        layoutData: layoutString,
        htmlTemplate: htmlTemplate,
      },
    });
  };

  return (
    <button
      style={{
        color: isHoverBtn ? "white" : "gray",
        marginLeft: "10px",
        marginTop: "2px",
        marginBottom: "2px",
        transition: "background-color 0.6s ease 0.2s, color 0.4s ease 0.2s",
        backgroundColor: isHoverBtn ? "darkcyan" : "rgb(30 122 127 / .2)",
        borderColor: isHoverBtn ? "#fff" : "rgba(0, 0, 0, 0.1)",
        border: isHoverBtn ? "1px solid white" : "1px solid gray",
      }}
      className={classes["email-button"]}
      onClick={handleEmailButtonClick}
      onMouseEnter={() => setIsHoverBtn(true)}
      onMouseLeave={() => setIsHoverBtn(false)}
    >
      Email Us
    </button>
  );
});
