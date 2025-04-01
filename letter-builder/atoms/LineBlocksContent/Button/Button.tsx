import React from "react";
import { useStyleElement } from "../../../hooks/useStyleElement";
import Button from "@mui/material/Button";
import { Modal } from "antd";
import elements from "@/components/atoms/ConstructorElements";

interface ButtonComponentProps {
  id: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [UrlText, setUrlText] = React.useState("");
  const [eee, setEee] = React.useState("");

  const { handleOpen, handleTextChange, parameters } = useStyleElement(
    id,
    {
      backgroundColor: "#2563eb",
      color: "#ffffff",
      borderRadius: "10px",
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: "Roboto, sans-serif",
    },
    "button",
  );

  if (!parameters) {
    return <div>Loading...</div>;
  }

  const onOk = () => {
    window.open(`${UrlText}`);
  };

  const onCancel = () => { };
  
  const modalka = () => {
    
  }
  return (
    <>
      <Button
        variant="contained"
        href={parameters?.href || ""}
        style={{
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
          borderStyle: "solid",
          borderWidth: "1px",
          outline: "none",
          ...(parameters?.styles || {}),
        }}
        contentEditable
        suppressContentEditableWarning
        onClick={async (e) => {
          setUrlText(e.target.href);
          if (e.target.href === undefined || e.target.href.trim() === "") handleOpen(e);
          else {
            setIsModalOpen(true);
          }
          handleOpen(e);
        }}
        onBlur={(e) => handleTextChange(e.target.textContent || "Кнопка")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            e.currentTarget.blur();
          }
        }}
      >
        {parameters?.text || "Кнопка"}
      </Button>
      <Modal
        okText={"Перехожу"}
        cancelText={"отменяю"}
        title={"Вы хотите перейти по указанной ссылке?"}
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
          onOk();
        }}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>
          {`B случае согласия вы будуте перенаправлены на новую страницу с указанным вами
          адресом ${UrlText}`}
        </p>
        <p>В случае отмены, откроется меню кнопки для обновления</p>
      </Modal>
    </>
  );
};

export default ButtonComponent;

// handleOpen
