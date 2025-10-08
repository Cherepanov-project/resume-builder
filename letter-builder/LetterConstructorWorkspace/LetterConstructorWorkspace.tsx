import { IGridContainers } from "@store/landingBuilder/layoutSlice";
import { useTypedSelector, useAppDispatch } from "@hooks/cvTemplateHooks";
import { CustomScroll } from "react-custom-scroll";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import classes from "./LetterConstructorWorkspace.module.scss";
import { LetterGridContainer } from "../LetterGridContainer/LetterGridContainer";
// import { GridContainer } from '@organisms/GridContainer';
import { Box } from "@mui/material";
import "../molecules/FullWidthTabs/ScrollBar.scss";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setGridContainer } from "@/store/LetterBuilderStore/letterLayoutSlice";

const LetterConstructorWorkspace: React.FC = () => {
  const gridContainers = useTypedSelector((state) => state.letterLayout.gridContainers);
  const location = useLocation();
  const saveLetter = location.state?.saveContainer;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (saveLetter) {
      dispatch(setGridContainer([saveLetter]));
    }
  }, [saveLetter, dispatch]);

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
