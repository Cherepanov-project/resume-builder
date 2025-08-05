import { LibraryAdd, ViewCarousel, ViewQuilt } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import classes from "./LandingBuilderStartPage.module.scss";
import { persistor } from "@/store/store";
import { useAppDispatch } from "@/hooks/cvTemplateHooks";
import { clearStore } from "@/store/landingBuilder/layoutSlice";
import { useTheme } from "@mui/material";


export const LandingBuilderStartPage: React.FC = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className={classes["start-page"]}>
      <button
        className={classes["button"]}
        onClick={() => {
          dispatch(clearStore());
          persistor.purge();
          navigate("/letter-builder-page");
        }}
      >
        <LibraryAdd style={theme.custom.fontSize60} />
        <span>Create</span>
      </button>
      <button
        className={classes["button"]}
        onClick={() => {
          dispatch(clearStore());
          persistor.purge();
          navigate("/landing-builder/templates");
        }}
      >
        <ViewCarousel style={theme.custom.fontSize60} />
        <span>Templates</span>
      </button>
      <button className={classes["button"]} onClick={() => navigate("/landing-builder")}>
        <ViewQuilt style={theme.custom.fontSize60} />
        <span>Restore</span>
      </button>
    </div>
  );
};
