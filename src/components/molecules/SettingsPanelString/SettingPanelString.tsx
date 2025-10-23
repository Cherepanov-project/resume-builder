import "./SettingPanelString.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useTypedSelector } from "@/hooks/cvTemplateHooks";
import { closePanel } from "@/store/landingBuilder/settingsPanelStringSlice";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ContainerDIVSettings from "@atoms/ContainerDIVSettings";
import InputUpdate from "../InputUpdate";
import ButtonsSettingsPanel from "@atoms/ButtonsSettingsPanel";
import { IElementProps, ISettingsInputItem, T_BlockElement } from "@/types/landingBuilder";
import SliderSettings from "../SliderSettings";
import { Alert, Box, Typography, Button } from "@mui/material";
import BasicRatingSettings from "@/components/atoms/BasicRatingSettings";
import BasicToolTipSettings from "@/components/atoms/BasicToolTipSettings";
import LayoutBlockButtonSettings from "@/components/atoms/LayoutBlockButtonSettings";
import LayoutBlockModalSettings from "@/components/atoms/LayoutBlockModalSettings";
import LayoutBlockTextSettings from "@/components/atoms/LayoutBlockTextSettings";

const SettingsPanelString: React.FC = () => {
  const dispatch = useAppDispatch();

  const isShown = useTypedSelector((state) => state.settingsPanelString.shown);
  const { type } = useTypedSelector((state) => state.settingsPanelString);
  const id = useTypedSelector((state) => state.settingsPanelString.sectionID);

  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  const handleClick = (e: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  const handleClose = () => {
    setItemsList(prevList);
    setElementsSize(prevElementsSize);
    dispatch(closePanel());
  };

  const { gridContainers } = useTypedSelector((state) => state.layout);
  const activeElements: T_BlockElement[] = [];
  for (let i = 0; i < gridContainers?.length; i++) {
    gridContainers[i].elements.activeElements.forEach((elem) => activeElements.push(elem));
  }
  const currentElement = activeElements.find((item) => item.layout.i === id);
  const props: IElementProps | undefined = currentElement?.props;
  const name = currentElement?.name;
  const size = currentElement?.props?.size;
  const index = currentElement?.layout.i;
  const textStyle = currentElement?.props?.textStyle;
  const backgroundColor = currentElement?.props?.style?.backgroundColor;

  function findPropsName(props: IElementProps | undefined): ISettingsInputItem[] | undefined {
    if (name === "RadioButtons") {
      return props?.RadioButtons;
    } else if (name === "Checkboxes") {
      return props?.Checkboxes;
    } else if (name === "DropdownList") {
      return props?.DropdownList;
    } else if (name === "Slider") {
      return props?.Slider;
    } else if (name === "PhotoGallery") {
      return props?.PhotoGallery;
    } else if (name === "Avatars") {
      return props?.Avatars;
    }
  }

  const propsName = findPropsName(props);
  const currentList = props && name ? propsName : [];

  const [itemsList, setItemsList] = useState(currentList || []);
  const [elementsSize, setElementsSize] = useState(size || 0);
  const [prevElementsSize, setPrevElementsSize] = useState(size || 1);
  const [style, setStyle] = useState({});
  const [prevList, setPrevList] = useState(currentList || []);
  const [colorCSS, setColorCSS] = useState({});
  const [elSize, setElSize] = useState({});
  const [activeTab, setActiveTab] = useState<"style" | "animation" | "advanced">("style");

  useEffect(() => {
    setPrevList(currentList || []);
    setItemsList(currentList || []);
    setPrevElementsSize(size || 1);
    setElementsSize(size || 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentElement, size]);

  function СheckingLabel(list: ISettingsInputItem[]) {
    if (name && name !== "PhotoGallery") {
      const labelsList = list.map((item) => item.value);
      return new Set(labelsList).size !== labelsList.length;
    }
    return false;
  }

  const accessNames = ["RadioButtons", "Checkboxes", "DropdownList", "PhotoGallery", "Avatars"];
  const accesTextBlock = ["Title", "HeaderTitle", "Paragraph", "Anchor"];

  const showTextPanelVisible = accesTextBlock.includes(name || "");
  const isButtonsPanelVisible = accessNames.includes(name || "");

  const showSliderSettings = name === "Slider";
  const showRatingSettings = name == "RatingSystem";
  const showBasicToolTipSettings = name === "Tooltip";
  const showLayoutBlockButtonSettings = name === "ButtonBlock";
  const showLayoutBlockModalSettings = name === "ModalWindow";

  return isShown ? (
    <Box ref={panelRef} className="string-list__wrap">
      <Box className="string-list__title">
        <Typography variant="h3" className="string-title">
          Settings string
        </Typography>
        <CloseIcon className="string-list__close-btn" onClick={handleClose} />
      </Box>
      <Box className="string-menu" sx={{ display: "flex", width: "100%" }}>
        {["style", "animation", "advanced"].map((tab, i) => (
          <Typography
            key={i}
            variant="body1"
            onClick={() => setActiveTab(tab as typeof activeTab)}
            sx={{
              cursor: "pointer",
              flex: 1,
              textAlign: "center",
              py: "8px",
              transition: "all 0.2s ease",
              color: activeTab === tab ? "#fff" : "#777",
              backgroundColor: activeTab === tab ? "#393939" : "transparent",
              borderBottom: activeTab === tab ? "3px solid #1274e7" : "3px solid transparent",
              "&:hover": {
                backgroundColor: activeTab === tab ? "#393939" : "transparent",
              },
            }}
          >
            {tab[0].toUpperCase() + tab.slice(1)}
          </Typography>
        ))}
      </Box>

      {showSliderSettings && (
        <SliderSettings
          itemsList={itemsList}
          setItemsList={setItemsList}
          name={name || ""}
          elementsSize={elementsSize}
          setElementsSize={setElementsSize}
        />
      )}
      {isButtonsPanelVisible && (
        <InputUpdate
          itemsList={itemsList}
          setItemsList={setItemsList}
          name={name || ""}
          elementsSize={elementsSize}
          setElementsSize={setElementsSize}
        />
      )}
      {showRatingSettings && <BasicRatingSettings colorCSS={colorCSS} setColorCSS={setColorCSS} />}
      {showBasicToolTipSettings && <BasicToolTipSettings elSize={elSize} setElSize={setElSize} />}
      {showLayoutBlockButtonSettings && <LayoutBlockButtonSettings setStyle={setStyle} />}
      {showTextPanelVisible && <LayoutBlockTextSettings index={index} textStyle={textStyle} />}
      {showLayoutBlockModalSettings && <LayoutBlockModalSettings />}
      <Box className="string-settings-panel">
        {type === "section" &&
          !showBasicToolTipSettings &&
          !showRatingSettings &&
          !showLayoutBlockButtonSettings &&
          !showLayoutBlockModalSettings && (
            <ContainerDIVSettings backgroundColor={backgroundColor} setStyle={setStyle} />
          )}
      </Box>
      <ButtonsSettingsPanel
        elementId={id}
        itemsList={itemsList}
        id={id}
        style={style}
        СheckingLabel={СheckingLabel}
        onClose={handleClose}
        elementsSize={elementsSize}
        setElementsSize={setElementsSize}
      />
    </Box>
  ) : null;
};

export default SettingsPanelString;
