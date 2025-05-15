import type { ElementState } from "@/types/letterBuilder";
import Box from "@mui/material/Box";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  IconButton,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import {
  ExpandMore,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatStrikethrough,
} from "@mui/icons-material";
import { fonts, useSidebarLetter } from "../../hooks/useSidebarLetter";

type Props = {
  element: ElementState;
};

const elementConfig = {
  button: ["link", "text", "padding", "background", "border"],
  text: ["text"],
  table: ["text", "background"],
  carousel: ["link"],
};

export const StyleAccordion = ({ element }: Props) => {
  const applicableAccordions = elementConfig[element?.type] || [];

  const {
    handleBackgroundColorChange,
    handleHrefChange,
    handleHrefBlur,
    handleKeyDown,
    handleBoldChange,
    handleItalicChange,
    handleUnderlineChange,
    handleStrikethroughChange,
    handleTextColorChange,
    handleTextSizeChange,
    handleLineHeightChange,
    handleFontFamilyChange,
    handleBorderRadiusChange,
    handleBorderColorChange,
    handlePaddingBlockChange,
    handlePaddingInlineChange,
    href,
    bold,
    italic,
    underline,
    strikethrough,
  } = useSidebarLetter(element);

  const accordionConfig: Record<string, { header: string; content: JSX.Element }> = {
    link: {
      header: "Ссылка",
      content: (
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
      ),
    },
    background: {
      header: "Фон",
      content: (
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
      ),
    },
    padding: {
      header: "Внутренние отступы",
      content: (
        <AccordionDetails sx={{ display: "flex", gap: 1, width: "100%" }}>
          <TextField
            sx={{ width: "48%" }}
            label="Сверху и снизу"
            type="number"
            value={parseInt(element?.styles.paddingTop || "0") || 0}
            onChange={handlePaddingBlockChange}
            variant="outlined"
          />

          <TextField
            sx={{ width: "48%" }}
            label="Слева и справа"
            type="number"
            value={parseInt(element?.styles.paddingRight || "0") || 0}
            onChange={handlePaddingInlineChange}
            variant="outlined"
          />
        </AccordionDetails>
      ),
    },
    text: {
      header: "Текст",
      content: (
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
            value={parseInt(element?.styles.fontSize || "14") || 14}
            onChange={handleTextSizeChange}
            variant="outlined"
          />

          <TextField
            sx={{ width: "48%" }}
            label="Высота текста"
            type="number"
            value={parseInt(element?.styles.lineHeight || "20") || 20}
            onChange={handleLineHeightChange}
            variant="outlined"
          />

          <Select
            sx={{ width: "100%" }}
            value={element?.styles.fontFamily || ""}
            onChange={handleFontFamilyChange}
            displayEmpty
          >
            {fonts.map((font) => (
              <MenuItem key={font.name} value={font.family}>
                <span style={{ fontFamily: font.family }}>{font.name}</span>
              </MenuItem>
            ))}
          </Select>
        </AccordionDetails>
      ),
    },
    border: {
      header: "Рамка",
      content: (
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
            value={parseInt(element?.styles.borderRadius || "0") || 0}
            onChange={handleBorderRadiusChange}
            variant="outlined"
          />
        </AccordionDetails>
      ),
    },
  };

  return (
    <>
      {applicableAccordions.map((accordionKey: string) => {
        const config = accordionConfig[accordionKey];
        if (!config) return null;

        return (
          <Accordion key={accordionKey}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>{config.header}</Typography>
            </AccordionSummary>
            {config.content}
          </Accordion>
        );
      })}
    </>
  );
};
