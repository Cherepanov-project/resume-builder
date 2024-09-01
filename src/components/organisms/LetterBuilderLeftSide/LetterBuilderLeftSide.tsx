import Box from '@mui/material/Box';
import LetterCard from '@/components/atoms/LetterCard';
import LineCard from '@/components/atoms/LineCard';
import FullWidthTabs from '@/components/molecules/FullWidthTabs';
import TabList from '@/utils/LetterTabList';
import LetterCardList from '@/utils/LetterCardList';
import LetterLinesList from '@/utils/LetterLinesList';
import { setDraggableItem, addElement } from '@/store/landingBuilder/layoutSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const LetterBuilderLeftSide = () => {
  const LetterCardElementArray = LetterCardList.map((item) => {
    
    return (
      <LetterCard 
        key={item.id}
        text={item.text} 
        icon={item.icon}
        id={item.id}
        name={item.name}
      />
    )
  });

  const dispatch = useDispatch();

  const LineCardElementArray = LetterLinesList.map((item) => {
    const handleDragStart = (e, item) => {
      console.log('STARTED DRAGGING', item);
      const serializableItem = {
        id: nanoid(),
        name: item.name,
        layout: {
          w: 4,
          h: 3,
        },
        props: {
          isChild: false,
          blockWidth: item.blockWidth,
          text: 'Пример текста',
        },
        children: [],
      };
      e.dataTransfer.setData("text/plain", JSON.stringify(serializableItem));
      dispatch(setDraggableItem({ item: serializableItem }));
      console.log({ item: serializableItem });
      
    };


    const handleDrop = (e) => {
      e.preventDefault();
      const data = e.dataTransfer.getData("text/plain");
      if (data) {
        const droppedItem = JSON.parse(data);
        console.log('DROPPED ITEM', droppedItem);
        dispatch(addElement(droppedItem)); 
      }
    };

    
    const handleDragOver = (e) => {
      // e.preventDefault();
      console.log('OUT OF LAYOUT')
    };
    return (
      <Box key={item.id} sx={{ margin: '0', maxWidth: '400px' }}>
        <LineCard 
          id={item.id.toString()}
          icon={item.icon}
          draggable
          onDragStart={(e) => handleDragStart(e, item)}
          onDrop={handleDrop}
          onDragOver={handleDragOver} 
        />
      </Box>
    )
  });

  return (
    <Box sx={{ width: '500px', height: '100%' }}>
      <FullWidthTabs 
        TabList={TabList}
        ViewChild={LetterCardElementArray}
        LineCard={LineCardElementArray}
      />
    </Box>
  )
}

export default LetterBuilderLeftSide;