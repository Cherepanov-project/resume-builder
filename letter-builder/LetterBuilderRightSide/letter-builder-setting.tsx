import Box from "@mui/material/Box";
import { useState } from "react";
import { addImage } from "@/store/LetterBuilderStore/carouselSlice";
import { useAppSelector } from "@/store/store";
import { IconButton, TextField, Button, Typography } from "@mui/material";
import { useAppDispatch } from "@/hooks/cvTemplateHooks";
import { closePanel } from "@/store/landingBuilder/settingsPanelSlice";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";
import { redo, undo } from "@/store/LetterBuilderStore/styleModule";
import { StyleAccordion } from "../atoms/StyleAccordion";
import css from "./letter-builder-setting.module.scss";

export function LetterBuilderSetting() {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.settingsPanel.shown);
  const selectedEl = useAppSelector((state) => state.styleModule.selectedElement);
  const element = useAppSelector((state) => state.styleModule.elements?.[selectedEl || ""]);
  const history = useAppSelector((state) => state.styleModule.history);
  const currentHistoryIndex = useAppSelector((state) => state.styleModule.currentHistoryIndex);
  const [value, setValue] = useState(""); // состояние для хранения значения url
  const carouselId = element?.id;

  const handleClose = () => {
    dispatch(closePanel());
  };

  const isValidUrl = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
    } catch (e) {
      return false;
    }
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

        {element.type === "carousel" ? (
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Управление каруселью
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <TextField
                type="text"
                label="Введите URL изображения"
                value={value}
                style={{ marginBottom: "8px" }}
                onChange={(e) => setValue(e.target.value)}
                helperText={
                  value && !isValidUrl(value)
                    ? "Введите корректный URL (начинается с http:// или https://)"
                    : ""
                }
                fullWidth
              />
            </Box>

            <Button
              variant="outlined"
              sx={{ mt: 1 }}
              onClick={() => {
                if (isValidUrl(value)) {
                  dispatch(addImage({ carouselId, url: value }));
                  setValue("");
                }
              }}
              disabled={!isValidUrl(value)}
            >
              Добавить изображение
            </Button>
          </Box>
        ) : (
          <StyleAccordion element={element} />
        )}
      </Box>
    )
  );
}

