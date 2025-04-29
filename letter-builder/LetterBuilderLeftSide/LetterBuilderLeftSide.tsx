import Box from "@mui/material/Box";
import LetterCard from "../atoms/LetterCard";
import LineCard from "../atoms/LineCard";
import FullWidthTabs from "../molecules/FullWidthTabs";
import TabList from "@/utils/LetterTabList";
import LetterCardList from "@/utils/LetterCardList";
import LetterLinesList from "@/utils/LetterLinesList";
import { setDraggableItem, addElement } from "@/store/landingBuilder/layoutSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { T_BlockElement } from "@/types/landingBuilder";

interface LetterCardItem {
  name: string;
  icon: JSX.Element;
  blockWidth: string[];
  id: number;
  text: string;
  children: T_BlockElement[];
}

const LetterBuilderLeftSide = () => {
  const LetterCardElementArray = LetterCardList.map((item) => {
    return (
      <LetterCard
        key={item.id}
        text={item.text}
        icon={item.icon}
        id={item.id}
        name={item.name}
        draggable
        onDragStart={(e) => handleDragStart(e, item)}
      />
    );
  });

  const dispatch = useDispatch();

  const handleDragStart = (e: React.DragEvent<Element>, item: LetterCardItem) => {
    console.log("DragStart:", item);
    const serializableItem = {
      id: nanoid(),
      name: item.name,
      layout: {
        w: 1,
        h: 1,
      },
      props: {
        isChild: false,
        blockWidth: item.blockWidth,
        text: "Пример текста",
      },
      children: item.children,
    };
    e.dataTransfer.setData("text/plain", JSON.stringify(serializableItem));
    dispatch(setDraggableItem({ item: serializableItem }));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    if (data) {
      const droppedItem = JSON.parse(data);
      console.log("DROPPED ITEM", droppedItem);
      dispatch(addElement(droppedItem));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    console.log("OUT OF LAYOUT");
  };

  const LineCardElementArray = LetterLinesList.map((item) => {
    return (
      <Box key={item.id} sx={{ margin: "0", maxWidth: "400px" }} data-testid="line">
        <LineCard
          id={item.id.toString()}
          icon={item.icon}
          draggable
          onDragStart={(e) => handleDragStart(e, item)}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        />
      </Box>
    );
  });

  return (
    <Box sx={{ width: "500px", height: "100%" }}>
      <FullWidthTabs
        TabList={TabList}
        ElementCard={LetterCardElementArray}
        LineCard={LineCardElementArray}
      />
    </Box>
  );
};

export default LetterBuilderLeftSide;
