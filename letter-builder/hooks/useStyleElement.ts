import { useAppDispatch, useAppSelector } from "@store/store";
import { addElement, initPanel, updateText } from "@/store/LetterBuilderStore/styleModule";
import { useEffect } from "react";
import type { Style, TypeElement } from "@/types/letterBuilder";

export const useStyleElement = (id: string, defaultStyle: Style, type?: TypeElement) => {
  const dispatch = useAppDispatch();
  const parameters = useAppSelector((state) => state.styleModule.elements?.[id]);

  useEffect(() => {
    if (!parameters) {
      dispatch(
        addElement({
          id,
          styles: {
            ...defaultStyle,
          },
          type: type || "text",
        }),
      );
    }
  }, [parameters, dispatch, defaultStyle, type, id]);

  const handleOpen = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(initPanel(id));
  };

  const handleTextChange = (text: string) => {
    dispatch(updateText({ id, text }));
  };

  return {
    handleOpen,
    handleTextChange,
    parameters,
  };
};
