import { useCallback, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useTypedSelector } from "@/hooks/cvTemplateHooks";
import { getLabel } from "@/utils/labelUtils";
import { shallowEqual, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { ISettingsInputItem } from "@/types/landingBuilder";

import { editRowDate } from "@store/landingBuilder/sectionsManagerSlice";
type AccordionData = Array<[string, string]>;

export const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const [valueText, setValueText] = useState(initialValue);

  const layoutDate = useTypedSelector((state) => state.sectionsManager.layoutDate, shallowEqual);
  const id: string = useTypedSelector((state) => state.sectionsManager.curId);
  let [r, w] = String(id).split("");
  let row: number = Number(r);
  let col: number = Number(w);
  let layoutRow = layoutDate[row];
  if (!layoutRow) {
    layoutRow = layoutDate[1];
    r = "1";
    row = 1;
  }
  let layoutElement = layoutRow[col - 1];
  if (!layoutElement) {
    layoutElement = layoutRow[0];
    w = "1";
    col = 1;
  }
  const settingsOptionsValues = [
    "Accordion",
    "Avatars",
    "CardItem",
    "CheckboxGroup",
    "LayoutBlockModal",
    "Logo",
    "SocialMediaIcon",
    "Gallery",
    "RatingSystem",
    "Tooltip",
    "Checkboxes",
    "RadioButtons",
    "MultiToggle",
    "Title",
    "Paragraph",
    "Image",
    "ButtonBlock",
    "Anchor",
    "Slider",
    "VideoPlayer",
    "ModalWindow",
    "DropdownList",
    "HeaderTitle",
  ];
  const simpleForme = [
    "Avatars",
    "CardItem",
    "LayoutBlockModal",
    "Logo",
    "SocialMediaIcon",
    "Gallery",
    "RatingSystem",
    "Tooltip",
    "Checkboxes",
    "RadioButtons",
    "MultiToggle",
    "Title",
    "Paragraph",
    "Image",
    "ButtonBlock",
    "Anchor",
    "VideoPlayer",
    "ModalWindow",
    "HeaderTitle",
  ];

  const complixForme = [
    "Anchor",
    "Avatars",
    "Image",
    "Gallery",
    "VideoPlayer",
    "SocialMediaIcon",
    "CardItem",
  ];

  const moreUrl = ["Logo", "SocialMediaIcon", "CardItem"];

  const sliderForme = ["DropdownList", "Slider", "CheckboxGroup"];

  const accord =
    typeof layoutElement.props.accordion === "string"
      ? [...layoutElement.props.accordion]
      : layoutElement.props.accordion;
  const [accordion, setAccordion] = useState<AccordionData>(accord || []);
  const [selectList, setSelectList] = useState<ISettingsInputItem[]>([{ id: nanoid(), value: "" }]);

  const type: string = layoutElement.name || "";
  const title: string = layoutElement.props.title || "";
  const description: string = layoutElement.props.description || "";
  const text: string = layoutElement.props.text || "";
  const url: string = layoutElement.props.url || "";
  const imgUrl: string = layoutElement.props.imgUrl || "";
  const buttonText: string = layoutElement.props.buttonText || "";

  const onChangeSelect = useCallback((e: SelectChangeEvent) => {
    const newVal = e.target.value;
    setValue(newVal);
  }, []);
  const dispatch = useDispatch();

  const reset = useCallback(() => {
    setValue("");
  }, []);
  const hendlerType = useCallback(
    (e: SelectChangeEvent) => {
      const newValue2 = JSON.parse(JSON.stringify(layoutRow));

      const value = e.target.value;
      setValue(value);

      const label =
        typeof value === "string"
          ? getLabel(value, url, title, description, text, imgUrl, buttonText, accordion)
          : Array.isArray(value) && typeof value[0] === "string"
            ? getLabel(value[0], url, title, description, text, imgUrl, buttonText, accordion)
            : getLabel("", url, title, description, text, imgUrl, buttonText, accordion);

      newValue2[col - 1].children = value;
      newValue2[col - 1].name = value;
      newValue2[col - 1].type = label.label;
      newValue2[col - 1].props.key = label.key;
      newValue2[col - 1].layout = label.layout;

      if (label.value) {
        newValue2[col - 1].props.value = label.title.value;
      }

      if (label.url) newValue2[col - 1].url = label.url;

      dispatch(editRowDate({ row, date: newValue2 }));
    },
    [title, description, url, layoutRow, text, imgUrl, buttonText, accordion, row, dispatch, col],
  );

  const onChangeaccordion = useCallback(
    (updatedAccordion: AccordionData) => {
      const newValue = JSON.parse(JSON.stringify(layoutRow));

      newValue[col - 1].props.accordion = updatedAccordion;
      newValue[col - 1].layout = {
        ...newValue[col - 1].layout,
        h: accordion.length === 0 ? 2 : 1.85 * accordion.length,
      };

      dispatch(editRowDate({ row, date: newValue }));
    },
    [accordion, col, dispatch, row, layoutRow],
  );
  const onChangeStyle = useCallback(
    (value: Record<string, string | undefined>) => {
      const newValue = JSON.parse(JSON.stringify(layoutRow));

      newValue[col - 1].props.style = { ...newValue[col - 1].props.style, ...value };

      dispatch(editRowDate({ row, date: newValue }));
    },
    [layoutRow, col, dispatch, row],
  );

  const onChangeAreaText = useCallback(
    (text: string, e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue1 = JSON.parse(JSON.stringify(layoutRow));

      const newVal = e.target.value;

      setValueText(newVal);
      newValue1[col - 1].props[text] = newVal;

      dispatch(editRowDate({ row, date: newValue1 }));
    },
    [col, dispatch, row, layoutRow],
  );
  const onChangeSelectList = useCallback(
    (type: string, updatedList: ISettingsInputItem[]) => {
      const newValue = JSON.parse(JSON.stringify(layoutRow));

      const value = updatedList;

      if (type === "DropdownList") {
        newValue[col - 1].props.SelectList = value;
        newValue[col - 1].props.key = "DropdownList";
        newValue[col - 1].layout = { ...newValue[col - 1].layout };
      }
      if (type === "Slider") {
        newValue[col - 1].props.Slider = value;
        newValue[col - 1].props.key = "Slider";
        newValue[col - 1].layout = { ...newValue[col - 1].layout };
      }
      if (type === "CheckboxGroup") {
        newValue[col - 1].props.CheckboxGroup = value;
        newValue[col - 1].props.key = "CheckboxGroup";
        newValue[col - 1].layout = {
          ...newValue[col - 1].layout,
          h: selectList.length === 0 ? 2 : 1.85 * (selectList.length + 1),
        };
      }

      dispatch(editRowDate({ row, date: newValue }));
    },
    [selectList, col, dispatch, row, layoutRow],
  );
  return {
    value,
    valueText,
    onChangeSelect,
    onChangeAreaText,
    reset,
    setValue,
    hendlerType,
    onChangeaccordion,
    accordion,
    onChangeSelectList,
    type,
    selectList,
    title,
    description,
    text,
    url,
    imgUrl,
    buttonText,
    setAccordion,
    setSelectList,
    onChangeStyle,
    simpleForme,
    complixForme,
    moreUrl,
    settingsOptionsValues,
    sliderForme,
    r,
    w,
  };
};
