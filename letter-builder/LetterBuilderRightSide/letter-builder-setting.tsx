import Box from "@mui/material/Box";
import { useAppSelector } from "@/store/store";
import { IconButton } from "@mui/material";
import { useAppDispatch } from "@/hooks/cvTemplateHooks";
import { closePanel } from "@/store/landingBuilder/settingsPanelSlice";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";
import { redo, undo } from "@/store/LetterBuilderStore/styleModule";
import { StyleAccordion } from "../atoms/StyleAccordion";
import css from "./letter-builder-setting.module.scss";

export function LetterBuilderSetting() {
  const show = useAppSelector((state) => state.settingsPanel.shown);
  const selectedEl = useAppSelector((state) => state.styleModule.selectedElement);
  const element = useAppSelector((state) => state.styleModule.elements?.[selectedEl || ""]);
  const history = useAppSelector((state) => state.styleModule.history);
  const currentHistoryIndex = useAppSelector((state) => state.styleModule.currentHistoryIndex);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closePanel());
  };

  return (
    element && (
      <Box className={`${css.setting} ${show ? css.open : ""}`}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "50px",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              aria-label="undo"
              color="primary"
              onClick={() => dispatch(undo())}
              disabled={currentHistoryIndex === 0}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              aria-label="redo"
              color="primary"
              onClick={() => dispatch(redo())}
              disabled={currentHistoryIndex === history.length - 1}
            >
              <ArrowForward />
            </IconButton>
          </Box>

          <IconButton aria-label="close" onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>

        <StyleAccordion element={element} />
      </Box>
    )
  );
}
