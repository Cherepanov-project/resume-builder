import { useState } from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Divider } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { useAppDispatch } from "@/hooks/cvTemplateHooks";
import { setDraggableItem } from "@/store/landingBuilder/layoutSlice";
import { NestedListProps } from "@/types/landingBuilder";

import classes from "./NestedList.module.scss";

const NestedList: React.FC<NestedListProps> = ({
  name,
  items,
  parentKey,
  handleDeleteSection,
  handleEditSection,
}) => {
  const dispatch = useAppDispatch();
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <List className={classes["list"]} component="nav" saria-labelledby="nested-list-subheader">
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <CircleIcon fontSize="small" className={classes["icon__circle"]} />
          </ListItemIcon>
          <ListItemText primary={name} />
          {isOpen ? (
            <ExpandLess className={classes["icon__expand"]} />
          ) : (
            <ExpandMore className={classes["icon__expand"]} />
          )}
        </ListItemButton>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List className={classes["list"]} component="div" disablePadding>
            {items?.map((item) => {
              return (
                <ListItemButton
                  key={item.title ? item.title : item.name}
                  sx={{ pl: 4 }}
                  draggable={true}
                  unselectable="on"
                  onDragStart={() => {
                    if (item) {
                      dispatch(setDraggableItem({ item }));
                    }
                  }}
                >
                  <ListItemIcon>
                    <RadioButtonCheckedIcon
                      fontSize="small"
                      className={classes["icon__dotcircle"]}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item.title || item.name} />
                  {parentKey === "Sections" && (
                    <>
                      <EditIcon
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item) handleEditSection(item);
                        }}
                        sx={{ fontSize: 18 }}
                        className={classes["icon__edit"]}
                      />
                      <ClearIcon
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item) handleDeleteSection(item);
                        }}
                        sx={{ fontSize: 20 }}
                        className={classes["icon__delete"]}
                      />
                    </>
                  )}
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      </List>
      <Divider />
    </>
  );
};

export default NestedList;
