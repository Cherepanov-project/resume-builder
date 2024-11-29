import { useAppDispatch } from "@store/store";
import { addElement } from "@/store/LetterBuilderStore/styleModule";
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
            padding: "8px 20px",
            border: "none",
            borderRadius: "6px",
          },
          type: "button",
        }),
      );
    }
  }, [parameters, dispatch, id]);

  return (
    <a
      href={parameters?.href}
      style={{
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        ...parameters?.styles,
      }}
    >
      Кнопка
    </a>
  );
};

export default ButtonComponent;
