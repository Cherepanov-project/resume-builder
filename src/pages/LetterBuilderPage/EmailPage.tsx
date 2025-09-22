/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import emailjs from "emailjs-com";
import ReactDOMServer from "react-dom/server";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import CellRenderer from "@/components/molecules/CellRenderer/CellRenderer";
// import * as componentMap from "../../../letter-builder/atoms/LineBlocksContent";
// import GifsComponent from "../../../letter-builder/atoms/LineBlocksContent/Gifs/Gifs";
// import StickersComponent from "../../../letter-builder/atoms/LineBlocksContent/Stickers";
// import TimerComponent from "../../../letter-builder/atoms/LineBlocksContent/Timer";
// import VideoComponent from "../../../letter-builder/atoms/LineBlocksContent/Video";
// import { ImageEmailView } from "../../../letter-builder/atoms/LineBlocksContent/Images/Image";
// import { useAppDispatch, useTypedSelector } from "@/hooks/cvTemplateHooks";
import { useLocation } from "react-router-dom";
// import { setSelectedGif } from "@/store/LetterBuilderStore/gifSelectionSlice";
// import { setSelectedSticker } from "@/store/LetterBuilderStore/stickerSelectionSlice";
// import { setSelectedVideo } from "@/store/LetterBuilderStore/videoSelectionSlice";

interface ElementProps {
  blockWidth?: string[];
}

interface ElementChild {
  name?: string;
  id?: string;
}

interface Element {
  props?: ElementProps;
  children?: Array<{ children?: ElementChild[] }>;
}

interface EmailParams extends Record<string, unknown> {
  message: string;
  to_email: string; // поле для email получателя
}
interface ParseTreeTableComponentProps {
  elements: any[];
  numberOfColumns: number;
  isEmail?: boolean;
}

// Функция для вычисления colspan из блоков
const extractPercent = (calcValue: string, numberOfColumns: number): number => {
  const match = calcValue.match(/calc\(([\d.]+)%\s*-\s*\d+px\)/);
  if (calcValue === "100%") {
    return 100;
  }
  if (match) {
    return parseFloat(match[1]);
  }
  return 100 / numberOfColumns;
};

// Генерация структуры таблицы
export const ParseTreeToTable: React.FC<ParseTreeTableComponentProps> = ({
  elements,
  numberOfColumns,
  isEmail,
}) => {
  if (!elements || elements.length === 0) {
    return (
      <tr key="no-elements">
        <td colSpan={numberOfColumns} style={{ textAlign: "center" }}>
          No elements to display
        </td>
      </tr>
    );
  }

  return (
    <>
      {elements.map((element: Element, index: number) => {
        const blockWidths: string[] =
          element.props?.blockWidth || Array(numberOfColumns).fill("auto");
        return (
          <tr key={index}>
            {blockWidths.map((blockWidth: string, i: number) => {
              const colspan = extractPercent(blockWidth, numberOfColumns);
              const elementInCell = element.children?.[i]?.children?.[0]?.name || "No Content";
              const id = element.children?.[i]?.children?.[0]?.id || "";

              return (
                <CellRenderer
                  elementName={elementInCell}
                  id={id}
                  colspan={colspan}
                  isEmail={isEmail}
                />
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

const EmailPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>(""); // для хранения email получателя
  const [emailError, setEmailError] = useState<string>(""); // для ошибки валидации email
  const numberOfColumns = 6;
  const location = useLocation();
  const navigatedElements = (location.state?.elements as Element[]) || [];
  const elements = navigatedElements;

  const generatedHTMLForEmail = (): string => {
    return ReactDOMServer.renderToString(
      <Provider store={store}>
        <table
          style={{
            borderSpacing: "10px",
            backgroundColor: "#ffffff",
            color: "#000000",
            fontFamily: "Arial, sans-serif",
            fontSize: "16px",
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            <ParseTreeToTable elements={elements} numberOfColumns={numberOfColumns} isEmail />
          </tbody>
        </table>
      </Provider>,
    );
  };

  // Валидация email
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Отправка email
  const sendEmail = (): void => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    const htmlContent = generatedHTMLForEmail();
    const params: EmailParams = {
      message: htmlContent,
      to_email: email, // добавляем email получателя в параметры
    };

    // Отправка email с помощью emailjs
    //service_gaoh9qn - ID сервиса
    //template_perpqbc - ID шаблона
    //xwjuZPWB5H7zlXnr5 - публичный ключ
    emailjs.send("service_gaoh9qn", "template_perpqbc", params, "xwjuZPWB5H7zlXnr5").then(
      () => {
        alert("Email sent successfully!");
        setEmail("");
      },
      (error) => alert(`Failed to send email: ${error.message}`),
    );
  };

  return (
    <div style={{ width: "40%", margin: "0 auto", padding: "20px" }}>
      <h1 className="font-bold mb-5">Email Content</h1>
      <table
        style={{
          width: "100%",
          border: "1px solid black",
          marginBottom: "20px",
          borderCollapse: "collapse",
        }}
      >
        <tbody>
          <ParseTreeToTable elements={elements} numberOfColumns={numberOfColumns} />
        </tbody>
      </table>

      <TextField
        label="Enter your email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!emailError}
        helperText={emailError}
        style={{ marginBottom: "20px" }}
      />

      <Button
        variant="contained"
        onClick={() => setIsModalVisible(true)}
        style={{ marginBottom: "20px", height: "40px" }}
      >
        Preview Table
      </Button>
      <Modal
        open={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: "800px",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Generated Table Preview
          </Typography>
          <table
            style={{
              borderSpacing: "10px",
              backgroundColor: "#ffffff",
              color: "#000000",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <ParseTreeToTable elements={elements} numberOfColumns={numberOfColumns} />
            </tbody>
          </table>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              variant="contained"
              onClick={() => {
                sendEmail();
                setIsModalVisible(false);
              }}
              sx={{ mr: 2 }}
            >
              Send Email
            </Button>
            <Button variant="outlined" onClick={() => setIsModalVisible(false)}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default EmailPage;
