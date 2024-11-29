/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "../../store/store";
import emailjs from "emailjs-com";
import ReactDOMServer from "react-dom/server";
import { Modal, Button } from "antd";
import * as componentMap from "../../../letter-builder/atoms/LineBlocksContent";

const EmailPage = () => {
  const numberOfColumns = 6;
  const elements = useSelector(
    (state: RootState) => state.letterLayout.gridContainers[0].elements.activeElements,
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tableHTML, setTableHTML] = useState("");

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
  const parseTreeToTable = (elements: any[], numberOfColumns: number) => {
    if (!elements || elements.length === 0) {
      return (
        <tr>
          <td colSpan={numberOfColumns} style={{ textAlign: "center" }}>
            No elements to display
          </td>
        </tr>
      );
    }

    return elements.map((element: any, index: number) => {
      const blockWidths = element.props?.blockWidth || Array(numberOfColumns).fill("auto");
      return (
        <tr key={index}>
          {blockWidths.map((blockWidth: string, i: number) => {
            const colspan = extractPercent(blockWidth);
            const elementInCell = element.children[i]?.children[0]?.name || "No Content";
            const id = element.children[i]?.children[0]?.id || "";

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
                  <RenderedComponent key={`${elementInCell}-${index}`} id={id} />
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
    const tableContent = (
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
          <h1>Письмо</h1>
          <tbody>{parseTreeToTable(elements, numberOfColumns)}</tbody>
        </table>
      </Provider>
    );

    return ReactDOMServer.renderToString(tableContent);
  };

  // Показ модалки с таблицей
  const showTableModal = () => {
    const htmlContent = generateTableHTML();
    setTableHTML(htmlContent);
    setIsModalVisible(true);
  };

  // Отправка email
  const sendEmail = (htmlContent: string) => {
    const params = { message: htmlContent };
    emailjs.send("service_gxpmdyt", "template_7v9l30z", params, "oC8h9jJ9xBoUrMdh7").then(
      () => alert("Email sent successfully!"),
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
        <tbody>{parseTreeToTable(elements, numberOfColumns)}</tbody>
      </table>
      <Button
        type="primary"
        onClick={showTableModal}
        style={{ marginBottom: "20px", height: "40px" }}
      >
        Preview Table
      </Button>
      <Modal
        title="Generated Table Preview"
        visible={isModalVisible}
        onOk={() => {
          sendEmail(tableHTML);
          setIsModalVisible(false);
        }}
        onCancel={() => setIsModalVisible(false)}
        okText="Send Email"
        cancelText="Close"
      >
        <div
          style={{ maxHeight: "400px", overflow: "auto", width: "100%" }}
          dangerouslySetInnerHTML={{ __html: tableHTML }}
        />
      </Modal>
    </div>
  );
};

export default EmailPage;
