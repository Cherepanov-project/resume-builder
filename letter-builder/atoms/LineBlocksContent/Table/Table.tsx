import { useStyleElement } from "../../../hooks/useStyleElement";
import { useState, MouseEvent } from "react";
import s from "./Table.module.scss";

type TableData = string[][];
type Position = {
  top: number;
  left: number;
  rowIndex?: number;
  colIndex?: number;
};

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

  const [tableData, setTableData] = useState<TableData>(
    parameters?.text
      ? JSON.parse(parameters.text)
      : [
          ["Заголовок", "Заголовок", "Заголовок"],
          ["Ячейка", "Ячейка", "Ячейка"],
        ],
  );

  const [showControls, setShowControls] = useState(false);
  const [controlsPosition, setControlsPosition] = useState<Position>({
    top: 0,
    left: 0,
  });

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

  const addRow = () => {
    const newRow = Array(tableData[0].length).fill("New");
    const newData = [...tableData, newRow];
    setTableData(newData);
    handleTextChange(JSON.stringify(newData));
  };

  const removeRow = (rowIndex: number) => {
    if (tableData.length <= 1) return;
    const newData = tableData.filter((_, index) => index !== rowIndex);
    setTableData(newData);
    handleTextChange(JSON.stringify(newData));
  };

  const addColumn = () => {
    const newData = tableData.map((row) => [...row, "New"]);
    setTableData(newData);
    handleTextChange(JSON.stringify(newData));
  };

  const removeColumn = (colIndex: number) => {
    if (tableData[0].length <= 1) return;
    const newData = tableData.map((row) => row.filter((_, index) => index !== colIndex));
    setTableData(newData);
    handleTextChange(JSON.stringify(newData));
  };

  const handleContextMenu = (
    e: MouseEvent<HTMLTableCellElement>,
    rowIndex?: number,
    colIndex?: number,
  ) => {
    e.preventDefault();
    setControlsPosition({
      top: e.clientY,
      left: e.clientX,
      rowIndex,
      colIndex,
    });
    setShowControls(true);
  };

  const handleRemoveRow = () => {
    if (controlsPosition.rowIndex !== undefined) {
      removeRow(controlsPosition.rowIndex);
    }
    setShowControls(false);
  };

  const handleRemoveColumn = () => {
    if (controlsPosition.colIndex !== undefined) {
      removeColumn(controlsPosition.colIndex);
    }
    setShowControls(false);
  };

  const [tableHeader, ...tableBody] = tableData;

  return (
    <div style={{ position: "relative" }}>
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
                onContextMenu={(e) => handleContextMenu(e, undefined, index)}
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
                  onContextMenu={(e) => handleContextMenu(e, rowIndex, columnIndex)}
                >
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {showControls && (
        <div
          className={s.contextMenu}
          style={{ top: controlsPosition.top, left: controlsPosition.left }}
          onMouseLeave={() => setShowControls(false)}
        >
          <div className={s.container}>
            <button
              onClick={() => {
                addRow();
                setShowControls(false);
              }}
            >
              Добавить строку
            </button>
            <button
              onClick={() => {
                addColumn();
                setShowControls(false);
              }}
            >
              Добавить столбец
            </button>
            <button onClick={handleRemoveRow}>Удалить строку</button>
            <button onClick={handleRemoveColumn}>Удалить столбец</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
