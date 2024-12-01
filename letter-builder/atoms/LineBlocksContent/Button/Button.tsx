import { useAppDispatch } from "@store/store";
import { addElement, initPanel } from "@/store/LetterBuilderStore/styleModule";
import { useAppSelector } from "@/store/store";
import { useEffect } from "react";

const ButtonComponent = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const parameters = useAppSelector((state) => state.styleModule.elements?.[id]);

  useEffect(() => {
    if (!parameters) {
      dispatch(
        addElement({
          id,
          styles: {
            backgroundColor: "#2563eb",
            color: "#ffffff",
            borderRadius: "6px",
            fontSize: "14px",
            lineHeight: "20px",
          },
          type: "button",
        }),
      );
    }
  }, [parameters, dispatch, id]);

  const handleOpen = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(initPanel(id));
  };

  return (
    <a
      href={parameters?.href || ""}
      style={{
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        borderStyle: "solid",
        borderWidth: "1px",
        ...parameters?.styles,
      }}
      onClick={handleOpen}
    >
      Кнопка
    </a>
  );
};

export default ButtonComponent;
