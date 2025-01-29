import { useStyleElement } from "../../../hooks/useStyleElement";
import { useState } from "react";

const TableComponent = ({ id }: { id: string }) => {
  const { handleOpen, handleTextChange, parameters } = useStyleElement(
    id,
    {
      backgroundColor: "#ffffff",
      color: "#333333",
      fontSize: "14px",
      lineHeight: "20px",
      fontFamily: "Roboto, sans-serif",
    },
    "table",
  );

  const [tableData, setTableData] = useState(
    parameters?.text
      ? JSON.parse(parameters.text)
      : [
          ["Заголовок", "Заголовок", "Заголовок"],
          ["Ячейка", "Ячейка", "Ячейка"],
        ],
  );

  const defaultStyles = {
    minWidth: "100%",
    borderCollapse: "collapse" as const,
    textAlign: "center" as const,
    border: "1px solid #e2e8f0",
    transition: "all 0.2s ease-in-out",
  };

  const { backgroundColor, color, ...otherStyles } = parameters?.styles || {};

  const headerStyles = {
    backgroundColor: backgroundColor || "#E5E7EB",
    color: color || "#333333",
  };

  const handleDataChange = (rowIndex: number, columnIndex: number, value: string) => {
    const newData = [...tableData];
    newData[rowIndex][columnIndex] = value;
    setTableData(newData);

    handleTextChange(JSON.stringify(newData));
  };

  const [tableHeader, ...tableBody] = tableData;

  return (
    <table
      style={{
        ...defaultStyles,
        ...otherStyles,
      }}
      onClick={handleOpen}
    >
      <thead>
        <tr>
          {tableHeader.map((item: string, index: number) => (
            <th
              key={index}
              style={headerStyles}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleDataChange(0, index, e.target.textContent || "Заголовок")}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((row: string[], rowIndex: number) => (
          <tr key={rowIndex}>
            {row.map((item, columnIndex) => (
              <td
                key={columnIndex}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  handleDataChange(rowIndex + 1, columnIndex, e.target.textContent || "Ячейка")
                }
              >
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
