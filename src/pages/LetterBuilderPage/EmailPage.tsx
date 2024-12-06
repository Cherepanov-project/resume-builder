import * as componentMap from "../../../letter-builder/atoms/LineBlocksContent";
import { useState } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import ReactDOMServer from "react-dom/server";
import { Modal, Button, Spin } from "antd";
import emailjs from "emailjs-com";

const EMAIL_JS_CONFIG = {
  serviceId: "service_y54kxzj",
  templateId: "template_4mjikrh",
  userId: "0awoCT5NCBuJvs--s",
};

const EmailPage = () => {
  const numberOfColumns = 6;
  const elements = useSelector(
    (state: RootState) => state.letterLayout.gridContainers[0].elements.activeElements,
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tableHTML, setTableHTML] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Функция для вычисления colspan из блоков
  const extractPercent = (calcValue: string): number => {
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
  const parseTreeToTable = (elements, numberOfColumns: number) => {
    if (!elements || elements.length === 0) {
      return (
        <tr>
          <td colSpan={numberOfColumns} style={{ textAlign: "center" }}>
            No elements to display
          </td>
        </tr>
      );
    }
    return elements.map((element, index: number) => {
      const blockWidths = element.props?.blockWidth || Array(numberOfColumns).fill("auto");
      return (
        <tr key={index} style={{ borderRadius: "10px" }}>
          {blockWidths.map((blockWidth: string, i: number) => {
            const colspan = extractPercent(blockWidth);
            const elementInCell = element.children[i]?.children[0]?.name || "No Content";
            // Рендер компонента из componentMap, если он существует
            const RenderedComponent = componentMap[elementInCell];
            return (
              <td
                key={i}
                colSpan={colspan}
                style={{
                  width: `${colspan}%`,
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                {RenderedComponent ? (
                  <RenderedComponent key={`${elementInCell}-${index}`} />
                ) : (
                  elementInCell
                )}
              </td>
            );
          })}
        </tr>
      );
    });
  };

  // Генерация HTML таблицы
  const generateTableHTML = () => {
    return ReactDOMServer.renderToString(
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
        <tbody>{parseTreeToTable(elements, numberOfColumns)}</tbody>
      </table>,
    );
  };

  // Показ модалки с таблицей
  const showTableModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      const htmlContent = generateTableHTML();
      setTableHTML(htmlContent);
      setIsLoading(false);
      setIsModalVisible(true);
    }, 800);
  };

  // Отправка email
  const sendEmail = async (htmlContent: string) => {
    setIsSending(true);
    try {
      await emailjs.send(
        EMAIL_JS_CONFIG.serviceId,
        EMAIL_JS_CONFIG.templateId,
        { message: htmlContent },
        EMAIL_JS_CONFIG.userId,
      );
      alert("Email sent successfully!");
    } catch (error) {
      if (error instanceof Error) {
        alert(`Failed to send email: ${error.message}`);
      } else {
        alert("Failed to send email: An unknown error occurred.");
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div style={{ width: "40%", margin: "0 auto", padding: "30px" }}>
      <h1 className="font-bold mb-5">Email Content</h1>
      <table
        style={{
          width: "100%",
          border: "1px solid gray",
          marginBottom: "20px",
          borderCollapse: "collapse",
        }}
      >
        <tbody>{parseTreeToTable(elements, numberOfColumns)}</tbody>
      </table>
      <Button
        type="primary"
        onClick={showTableModal}
        style={{ marginBottom: "40px", height: "40px" }}
        disabled={isLoading}
      >
        {isLoading ? <Spin /> : "Preview Table"}
      </Button>
      <Modal
        title="Generated Table Preview"
        open={isModalVisible}
        footer={[
          <Button
            key="cancel"
            onClick={() => setIsModalVisible(false)}
            style={{ color: "black", height: "40px", width: "100px" }}
          >
            Close
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => {
              sendEmail(tableHTML);
            }}
            disabled={isSending}
            style={{ color: "#fff", height: "40px", width: "150px" }}
          >
            {isSending ? <Spin /> : "Send Email"}
          </Button>,
        ]}
        onCancel={() => setIsModalVisible(false)}
      >
        <div
          style={{ maxHeight: "100%", overflowX: "hidden", width: "100%" }}
          dangerouslySetInnerHTML={{ __html: tableHTML }}
        />
      </Modal>
    </div>
  );
};

export default EmailPage;
