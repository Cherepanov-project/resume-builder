import Box from "@mui/material/Box";
import { useAppSelector } from "@/store/store";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "@/hooks/cvTemplateHooks";
import { closePanel } from "@/store/landingBuilder/settingsPanelSlice";
import {
  ArrowBack,
  ArrowForward,
  Close,
  ExpandMore,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatStrikethrough,
} from "@mui/icons-material";
import { redo, undo, updateElement } from "@/store/LetterBuilderStore/styleModule";
import { useState } from "react";
import css from "./letter-builder-setting.module.scss";

export function LetterBuilderSetting() {
  const show = useAppSelector((state) => state.settingsPanel.shown);
  const selectedEl = useAppSelector((state) => state.styleModule.selectedElement);
  const element = useAppSelector((state) => state.styleModule.elements?.[selectedEl || ""]);
  const history = useAppSelector((state) => state.styleModule.history);
  const currentHistoryIndex = useAppSelector((state) => state.styleModule.currentHistoryIndex);

  const dispatch = useAppDispatch();

  const [href, setHref] = useState(element?.href || "");
  const [bold, setBold] = useState(element?.styles?.fontWeight === "bold");
  const [italic, setItalic] = useState(element?.styles?.fontStyle === "italic");
  const [underline, setUnderline] = useState(element?.styles?.textDecoration === "underline");
  const [strikethrough, setStrikethrough] = useState(
    element?.styles?.textDecoration === "line-through",
  );

  const handleClose = () => {
    dispatch(closePanel());
  };

  const handleBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateElement({ backgroundColor: event.target.value }));
  };

  const handleHrefChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHref(event.target.value);
  };

  const handleHrefBlur = () => {
    dispatch(updateElement(href));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(updateElement(href));
    }
  };

  const handleBoldChange = () => {
    setBold(!bold);
    dispatch(updateElement({ fontWeight: bold ? "normal" : "bold" }));
  };

  const handleItalicChange = () => {
    setItalic(!italic);
    dispatch(updateElement({ fontStyle: italic ? "normal" : "italic" }));
  };

  const handleUnderlineChange = () => {
    setUnderline(!underline);
    dispatch(updateElement({ textDecoration: underline ? "none" : "underline" }));
  };

  const handleStrikethroughChange = () => {
    setStrikethrough(!strikethrough);
    dispatch(updateElement({ textDecoration: strikethrough ? "none" : "line-through" }));
  };

  const handleTextColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateElement({ color: event.target.value }));
  };

  const handleTextSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateElement({ fontSize: event.target.value + "px" }));
  };

  const handleLineHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateElement({ lineHeight: event.target.value + "px" }));
  };

  const handleBorderRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateElement({ borderRadius: event.target.value + "px" }));
  };

  const handleBorderColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateElement({ borderColor: event.target.value }));
  };

  const handlePaddingBlockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateElement({ paddingBlock: event.target.value + "px" }));
  };

  const handlePaddingInlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateElement({ paddingInline: event.target.value + "px" }));
  };

  console.log(history);

  return (
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

      {element && element.type === "button" && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} id="color-settings-header">
            <Typography>Ссылка</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              label="Ссылка"
              type="text"
              value={href}
              onChange={handleHrefChange}
              onBlur={handleHrefBlur}
              onKeyDown={handleKeyDown}
              variant="outlined"
              fullWidth
            />
          </AccordionDetails>
        </Accordion>
      )}

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} id="color-settings-header">
          <Typography>Фон</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", gap: 1, width: "100%" }}>
          <TextField
            sx={{ width: "48%" }}
            label="Цвет фона"
            type="color"
            value={element?.styles.backgroundColor || ""}
            onChange={handleBackgroundColorChange}
            variant="outlined"
          />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} id="font-weight-settings-header">
          <Typography>Текст</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            gap: 1.5,
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              width: "48%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              aria-label="bold"
              onClick={handleBoldChange}
              sx={{
                backgroundColor: bold ? "#1976d2" : "white",
                padding: "4px",
                color: bold ? "white" : "#1976d2",
                borderRadius: "10px",
                border: "1px solid #1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "white",
                },
              }}
            >
              <FormatBold />
            </IconButton>

            <IconButton
              aria-label="italic"
              onClick={handleItalicChange}
              sx={{
                backgroundColor: italic ? "#1976d2" : "white",
                padding: "4px",
                color: italic ? "white" : "#1976d2",
                borderRadius: "10px",
                border: "1px solid #1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "white",
                },
              }}
            >
              <FormatItalic />
            </IconButton>

            <IconButton
              aria-label="strikethrough"
              onClick={handleStrikethroughChange}
              sx={{
                backgroundColor: strikethrough ? "#1976d2" : "white",
                padding: "4px",
                color: strikethrough ? "white" : "#1976d2",
                borderRadius: "10px",
                border: "1px solid #1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "white",
                },
              }}
            >
              <FormatStrikethrough />
            </IconButton>

            <IconButton
              aria-label="underline"
              onClick={handleUnderlineChange}
              sx={{
                backgroundColor: underline ? "#1976d2" : "white",
                padding: "4px",
                color: underline ? "white" : "#1976d2",
                borderRadius: "10px",
                border: "1px solid #1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "white",
                },
              }}
            >
              <FormatUnderlined />
            </IconButton>
          </Box>

          <TextField
            sx={{ width: "48%" }}
            label="Цвет текста"
            type="color"
            value={element?.styles.color || ""}
            onChange={handleTextColorChange}
            variant="outlined"
          />

          <TextField
            sx={{ width: "48%" }}
            label="Раземер текста"
            type="number"
            value={parseInt(element?.styles.fontSize || "")}
            onChange={handleTextSizeChange}
            variant="outlined"
          />

          <TextField
            sx={{ width: "48%" }}
            label="Высота текста"
            type="number"
            value={parseInt(element?.styles.lineHeight || "")}
            onChange={handleLineHeightChange}
            variant="outlined"
          />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} id="color-settings-header">
          <Typography>Внутренний отступ</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", gap: 1, width: "100%" }}>
          <TextField
            sx={{ width: "48%" }}
            label="Сверху и снизу"
            type="number"
            value={parseInt(element?.styles.paddingBlock || "")}
            onChange={handlePaddingBlockChange}
            variant="outlined"
          />

          <TextField
            sx={{ width: "48%" }}
            label="Слева и справа"
            type="number"
            value={parseInt(element?.styles.paddingInline || "")}
            onChange={handlePaddingInlineChange}
            variant="outlined"
          />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} id="color-settings-header">
          <Typography>Рамка</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", gap: 1, width: "100%" }}>
          <TextField
            sx={{ width: "48%" }}
            label="Цвет рамки"
            type="color"
            value={element?.styles.borderColor || ""}
            onChange={handleBorderColorChange}
            variant="outlined"
          />

          <TextField
            sx={{ width: "48%" }}
            label="Скругление"
            type="number"
            value={parseInt(element?.styles.borderRadius || "")}
            onChange={handleBorderRadiusChange}
            variant="outlined"
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
