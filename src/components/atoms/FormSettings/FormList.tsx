import { useState, useEffect, useMemo } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Divider } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { useAppDispatch, useAppSellector } from '@/hooks/cvTemplateHooks';
import { setDraggableItem } from '@/store/landingBuilder/layoutSlice';
import { NestedListProps } from '@/types/landingBuilder';
import { importFiles, insertChild } from '@/utils';
import { addElement } from '@/store/landingBuilder/layoutSlice';
import { nanoid } from 'nanoid';


// import classes from './NestedList.module.scss';
import classes from "../../molecules/NestedList/NestedList.module.scss"

// const FormList = ({ name, items, element, elements, elementId }) => {
const FormList = ({ name, items, element, elementId }) => { 
  const dispatch = useAppDispatch();

//   const elements = useAppSellector(state => state.layout.gridContainers[0].elements.activeElements)

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

//   console.log(elements)
//   console.log(element)

  useEffect(() => {
    // const ele = insertChild(elements, element, elements[1])
    // console.log(ele)
}, [])

// const filterItems = useMemo(items.filter((el) => el.name !== "Form"), [])
const filterItems = items.filter((el) => el.name !== "Form")
// console.log(filterItems)
// console.log(items)

  return (
    <>
      <List className={classes['list']} component="nav" aria-labelledby="nested-list-subheader">
        <ListItemButton onClick={handleClick}>
          {/* <ListItemIcon>
            <CircleIcon fontSize="small" className={classes['icon__circle']} />
          </ListItemIcon> */}
          <ListItemText primary={name} />
          {isOpen ? (
            <ExpandLess className={classes['icon__expand']} />
          ) : (
            <ExpandMore className={classes['icon__expand']} />
          )}
        </ListItemButton>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List className={classes['list']} component="div" disablePadding>
            {filterItems?.map((item) => {
              // console.log(item)
              return (
                <ListItemButton
                  key={item.title ? item.title : item.name}
                  sx={{ pl: 4 }}
                  // draggable={true}
                  onClick={() => {
                    // const ele = insertChild(elements, element, elements[1])
                    const id = elementId
                    const layoutItem = { i: nanoid(), x: 0, y: 0, w: 2, h: 2, isDraggable: true }
                    // const parentElement = element
                    const parentElement = element.layout.i
                    // console.log(element)
                    const draggableItem = item
                    // const ele = dispatch(addElement(
                    //     {id, layoutItem, parentElement, draggableItem}
                    dispatch(addElement(
                      {id, layoutItem, parentElement, draggableItem}
                      // {id, layoutItem, draggableItem}
                    ))
                    // console.log(ele)
                  }}
                //   draggable={true}
                //   unselectable="on"
                //   onDragStart={() => dispatch(setDraggableItem({ item }))}
                >

                  {/* <ListItemIcon>
                    <RadioButtonCheckedIcon
                      fontSize="small"
                      className={classes['icon__dotcircle']}
                    />
                  </ListItemIcon> */}

                  <ListItemText primary={item.title || item.name} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      </List>
      {/* <Divider /> */}
    </>
  );
};

export default FormList;
