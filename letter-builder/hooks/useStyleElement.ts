import { useAppDispatch } from "@store/store";
import { addElement, initPanel, updateText } from "@/store/LetterBuilderStore/styleModule";
import { useAppSelector } from "@/store/store";
import { useEffect } from "react";
import type { Style } from "@/types/letterBuilder";

export const useStyleElement = (id: string, defaultStyle: Style) => {
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
          type: "text",
        }),
      );
    }
  }, [parameters, dispatch, defaultStyle, id]);

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
