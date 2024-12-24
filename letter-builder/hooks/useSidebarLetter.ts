import type { ElementState } from "@/types/letterBuilder";
import { useState } from "react";
import { useAppDispatch } from "@/store/store";
import { updateElement } from "@/store/LetterBuilderStore/styleModule";
import { SelectChangeEvent } from "@mui/material";

export const fonts = [
  {
    name: "Roboto",
    family: "Roboto, sans-serif",
    cdn: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&subset=cyrillic",
  },
  {
    name: "Open Sans",
    family: "Open Sans, sans-serif",
    cdn: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&subset=cyrillic",
  },
  {
    name: "Montserrat",
    family: "Montserrat, sans-serif",
    cdn: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&subset=cyrillic",
  },

  // Декоративные
  {
    name: "Lobster",
    family: "Lobster, cursive",
    cdn: "https://fonts.googleapis.com/css2?family=Lobster&subset=cyrillic",
  },
  {
    name: "Playfair Display",
    family: "Playfair Display, serif",
    cdn: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&subset=cyrillic",
  },

  // Рукописные
  {
    name: "Pacifico",
    family: "Pacifico, cursive",
    cdn: "https://fonts.googleapis.com/css2?family=Pacifico&subset=cyrillic",
  },
  {
    name: "Comfortaa",
    family: "Comfortaa, sans-serif",
    cdn: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&subset=cyrillic",
  },

  // Минималистичные
  {
    name: "Exo 2",
    family: "Exo 2, sans-serif",
    cdn: "https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&subset=cyrillic",
  },
  {
    name: "PT Sans",
    family: "PT Sans, sans-serif",
    cdn: "https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&subset=cyrillic",
  },
  {
    name: "Marck Script",
    family: "Marck Script, cursive",
    cdn: "https://fonts.googleapis.com/css2?family=Marck+Script&subset=cyrillic",
  },
];

export const useSidebarLetter = (element: ElementState) => {
  const dispatch = useAppDispatch();

  const [href, setHref] = useState(element?.href || "");
  const [bold, setBold] = useState(element?.styles?.fontWeight === "bold");
  const [italic, setItalic] = useState(element?.styles?.fontStyle === "italic");
  const [underline, setUnderline] = useState(element?.styles?.textDecoration === "underline");
  const [strikethrough, setStrikethrough] = useState(
    element?.styles?.textDecoration === "line-through",
  );

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

  const handleFontFamilyChange = (event: SelectChangeEvent<string>) => {
    const selectedFont = event.target.value;

    const font = fonts.find((font) => font.family === selectedFont);

    if (font) {
      const link = document.createElement("link");
      link.href = font.cdn;
      link.rel = "stylesheet";
      document.head.appendChild(link);

      dispatch(updateElement({ fontFamily: selectedFont }));
    }
  };

  const handleBorderRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateElement({ borderRadius: event.target.value + "px" }));
  };

  const handleBorderColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateElement({ borderColor: event.target.value }));
  };

  const handlePaddingBlockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateElement({
        paddingTop: event.target.value + "px",
        paddingBottom: event.target.value + "px",
      }),
    );
  };

  const handlePaddingInlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateElement({
        paddingLeft: event.target.value + "px",
        paddingRight: event.target.value + "px",
      }),
    );
  };

  return {
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
  };
};
