import { IGridContainers } from "@store/landingBuilder/layoutSlice";
import { useTypedSelector } from "@hooks/cvTemplateHooks";
import { CustomScroll } from "react-custom-scroll";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import classes from "./LetterConstructorWorkspace.module.scss";
import { LetterGridContainer } from "../LetterGridContainer/LetterGridContainer";
// import { GridContainer } from '@organisms/GridContainer';
import { Box } from "@mui/material";
import "../molecules/FullWidthTabs/ScrollBar.scss";

const LetterConstructorWorkspace: React.FC = () => {
  const gridContainers = useTypedSelector((state) => state.letterLayout.gridContainers);
  return (
    <Box sx={{ boxSizing: "border-box", width: "100%", height: "calc(100vh - 52px)" }}>
      <CustomScroll heightRelativeToParent="calc(100%)">
        <div className={classes["workspace"]}>
          <div className={classes["wrapper"]}>
            {gridContainers.map((container: IGridContainers) => (
              <LetterGridContainer key={container.id} {...container} />
            ))}
          </div>
        </div>
      </CustomScroll>
    </Box>
  );
};

export default LetterConstructorWorkspace;
