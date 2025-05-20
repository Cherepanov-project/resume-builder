import { useDispatch } from "react-redux";
import {
  Delete,
  ArrowCircleDown,
  ArrowCircleLeftSharp,
  ArrowCircleRightSharp,
  ArrowCircleUp,
} from "@mui/icons-material";

import { editRowDate, handleSettingsMenu } from "@/store/landingBuilder/sectionsManagerSlice";

import { memo, useEffect, useState } from "react";
import SectionsConstructorBlockElement from "@atoms/SectionsConstructorBlockElement";
import { useTypedSelector } from "@/hooks/cvTemplateHooks";
import { Box } from "@mui/material";
import { AddCircleSharp } from "@mui/icons-material";

type SectionsConstructorRowElType = {
  row: number;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setSeverity: React.Dispatch<React.SetStateAction<string>>;
};

const SectionsConstructorRowEl: React.FC<SectionsConstructorRowElType> = ({
  row,
  setError,
  setSeverity,
}) => {
  const dispatch = useDispatch();

  const layoutDate = useTypedSelector((state) => state.sectionsManager.layoutDate);
  const layoutRow = layoutDate[row];
  const columns = layoutRow.length;
  const [gridLayoutStyle, setGridLayoutStyle] = useState({
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
  });

  useEffect(() => {
    const v = layoutRow.map((v) => v.layout.w + "fr").join(" ");
    const style = { display: "grid", gridTemplateColumns: v, gridTemplateRows: "1fr" };
    setGridLayoutStyle(style);
  }, [layoutRow]);

  const addColumn = () => {
    if (columns < 6 && calcNewRowW(columns, 1) <= 6) {
      const id = String(row) + (columns + 1);
      const newValue = {
        name: "",
        type: "",
        source: "atoms",
        props: {
          key: "",
          wrapperStyle: { display: "block" },
          textStyle: { display: "block" },
        },
        layout: { i: id, x: columns, y: row - 1, w: 1, h: 1 },
      };
      dispatch(editRowDate({ row, date: [...layoutRow, newValue] }));
    }
  };

  const calcNewRowW: (col: number, value: number) => number = (col, value) => {
    let prevColsSum = 0;
    for (let i = 0; i < col; i++) {
      prevColsSum += layoutRow[i].layout.w;
    }
    const newValue = prevColsSum + value;
    return newValue;
  };

  const id = useTypedSelector((state) => state.sectionsManager.curId);

  const renderColumns = () => {
    const r: string = String(row);
    return layoutRow.map((el, idx) => {
      const i = idx + 1;

      const style = {
        backgroundColor: "#fff",
        textAlign: "center",
        height: `${el.layout.h * 30}px`,
        width: `${el.layout.w * 191}px`,
        cursor: "pointer",
        "&:hover": {
          border: "1px dotted dimgrey",
          height: `${el.layout.h * 30 - 2}px`,
          width: `${el.layout.w * 191 - 2}px`,
          borderRadius: "10px",
          opacity: "0.8",
        },
      };
      return (
        <Box
          key={i}
          sx={style}
          onClick={() => dispatch(handleSettingsMenu({ type: "UPDATE_ID", value: `${r}${i}` }))}
        >
          <ArrowCircleUp
            onClick={() => {
              handleSize("layoutY", "-1");
            }}
          />
          <ArrowCircleDown
            onClick={() => {
              handleSize("layoutY", "+1");
            }}
          />
          <ArrowCircleLeftSharp
            onClick={() => {
              handleSize("layoutX", "-1");
            }}
          />
          <ArrowCircleRightSharp
            onClick={() => {
              handleSize("layoutX", "+1");
            }}
          />
          <Delete onClick={() => deleteElement()} />
          <SectionsConstructorBlockElement params={el} />
        </Box>
      );
    });
  };

  const renderControlOfCols = () => {
    return (
      <AddCircleSharp
        color="primary"
        sx={{
          opacity: "0.2",
          width: 40,
          height: 40,
          "&:hover": {
            opacity: "1",
          },
        }}
        onClick={addColumn}
      />
    );
  };

  const handleSize = (type: string, value: string): void => {
    const newValue = JSON.parse(JSON.stringify(layoutRow));
    switch (type) {
      case "layoutX": {
        if (
          newValue[Number(id[1]) - 1]?.layout.w + Number(value) !== 0 &&
          newValue[Number(id[1]) - 1]?.layout.w + Number(value) <= 6
        ) {
          newValue[Number(id[1]) - 1].layout.w += Number(value);
          dispatch(editRowDate({ row, date: newValue }));
        } else {
          setSeverity("warning");
          setError("Width out of bounds");
        }
        break;
      }
      case "layoutY": {
        if (newValue[Number(id[1]) - 1].layout.h + Number(value) !== 0) {
          newValue[Number(id[1]) - 1].layout.h += Number(value);
          dispatch(editRowDate({ row, date: newValue }));
        } else {
          setSeverity("warning");
          setError("Height out of bounds");
        }
        break;
      }
      default: {
        console.log("No case found");
      }
    }
  };

  const deleteElement = () => {
    const newSectionValue = JSON.parse(JSON.stringify(layoutRow));
    newSectionValue.splice(Number(id.split("")[1]) - 1, 1);
    if (!newSectionValue.length) {
      setSeverity("warning");
      setError("Only element in the row, cannot be deleted");
    } else {
      dispatch(editRowDate({ row, date: newSectionValue }));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: " 100%",
        minHeight: "55px",
        alignItems: "center",
        borderBottom: "1px dotted dimgrey",
      }}
    >
      <Box sx={gridLayoutStyle}>{renderColumns()}</Box>
      {renderControlOfCols()}
    </Box>
  );
};

export const MemoizedSectionsConstructorRowEl = memo(SectionsConstructorRowEl);
