import Box from "@mui/material/Box";
import { useAppSelector } from "@/store/store";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "@/hooks/cvTemplateHooks";
import { closePanel } from "@/store/landingBuilder/settingsPanelSlice";
import css from "./letter-builder-setting.module.scss";

export function LetterBuilderSetting() {
  const show = useAppSelector((state) => state.settingsPanel.shown);
  const selectedEl = useAppSelector((state) => state.styleModule.selectedElement);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closePanel());
  };

  return (
    <Box sx={{ width: "410px" }} className={`${css.setting} ${show ? css.open : ""}`}>
      <IconButton className={css.close_button} aria-label="close" onClick={handleClose}>
        <CloseIcon />
      </IconButton>

      <main className={css.content}>{selectedEl}</main>
    </Box>
  );
}
