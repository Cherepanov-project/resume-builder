import type { ElementState } from "@/types/letterBuilder";
import { useState } from "react";
import { useAppDispatch } from "@/store/store";
import { updateElement } from "@/store/LetterBuilderStore/styleModule";

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
