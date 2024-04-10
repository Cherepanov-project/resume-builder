import { Layout } from 'react-grid-layout';

// Непонятные интерфейсы
export interface IElement {
  element: string;
  content: string;
  id?: string;
  style: IStyleFormObj;
}

export interface IColumn {
  id: string;
  elements: IElement[];
}

export interface ISection {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  minW: number;
  maxW: number;
}

export interface IElementsButtons {
  [key: string]: IElement;
}

export interface IStyle {
  width?: number;
  height?: number;
  borderRadius?: number;
  borderWidth?: number;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  content?: string;
  borderRadiusMeasurement?: string;
  widthMeasurement?: string;
  heightMeasurement?: string;
  borderWidthMeasurement?: string;
}

export interface IStyleFormObj {
  [key: string]: string | number;
}

// Гигачадовая типизация от Кенси
export type T_BlockElement = {
  name: string;
  title?: string;
  url?: string;
  value?: number;
  type?: string;
  source: string;
  columns?: number;
  elementScript?: string;
  interactiveType?: 'button' | 'slider';
  props: T_SectionElementProps; //{[key: string]: string | {[key: string]: string}}
  children?: T_BlockElement[];
  layout: Layout;
};

export type T_SidebarMenuItem = {
  name: string | undefined;
  list: T_BlockElement[];
};

export type T_ComponentProps = {
  props: T_BlockElement;
};

// Типизация компонентов
export type DynamicComponentRendererProps = {
  Component?: string;
  props?: {
    [key: string]: string | number | { [key: string]: string | number } | ISettingsInputItem[];
  };
  columns?: number;
  source: string;
  elementScript?: string;
  interactiveType?: 'button' | 'slider';
  children?: T_BlockElement[];
  layout: Layout;
};

export type ContainerDIVProps = {
  children: T_BlockElement[];
  layout: Layout;
  columns?: number;
  props: {
    style: { [key: string]: string };
  };
};

export type NestedListProps = {
  name: string | undefined;
  items: T_BlockElement[];
};

export type DynamicBlockProps = {
  columns: number;
  props: {
    style: { [key: string]: string };
    text: string;
    wrapperStyle: { [key: string]: string | number };
    textStyle: { [key: string]: string | number };
    inputStyle: { [key: string]: string | number };
  };
  children: T_BlockElement[];
  layout: Layout;
};

export type TitleH1Props = {
  props: {
    text: string;
  };
};

export interface ISettingsInputItem {
  id: string;
  value?: string | number;
  img?: string | number;
  title?: string | number;
}

export type T_Id = string;
export type T_Value = string | number;

export interface IElementsProps {
  props: { [key: string]: ISettingsInputItem[] };
  layout: Layout;
}

export interface ISettingsInputUpdateProps {
  itemsList: ISettingsInputItem[];
  setItemsList: React.Dispatch<React.SetStateAction<ISettingsInputItem[]>>;
  name: string;
  elementsSize: number;
  setElementsSize: React.Dispatch<React.SetStateAction<number>>;
}

export interface IButtonsSettingsPanelProps {
  elementId: string;
  itemsList: ISettingsInputItem[];
  id: string;
  style: React.CSSProperties;
  СheckingLabel: (key: ISettingsInputItem[]) => boolean;
  onClose: () => void;
  elementsSize: number;
  setElementsSize: React.Dispatch<React.SetStateAction<number>>;
}

export interface IMasonryGalleryProps {
  props: {
    itemData: {
      img: string;
      title: string;
    }[];
  };
}

export interface IAvatars {
  props: {
    itemData: {
      img: string;
      title: string;
    }[];
  };
}

export interface IElementProps {
  RadioGroup?: ISettingsInputItem[];
  CheckboxGroup?: ISettingsInputItem[];
  SelectList?: ISettingsInputItem[];
  LayoutBlockSlider?: ISettingsInputItem[];
  MasonryGallery?: ISettingsInputItem[];
  Avatars?: ISettingsInputItem[];
}

export interface StateSelectList {
  value: string | number;
  array: ISettingsInputItem[];
}

// Типизация вспомогательных функций -> utils/index.ts
export type TProcessFiles = Record<string, () => Promise<unknown>>;

export type T_SectionElements = {
  name: string; // указание имени элмента-обертки (molecules)
  title: string; // имя секции из input
  type: string; // вид секции
  columns: number;
  source: string; // ресурс обертки
  children: T_BlockElement[]; // массив из объектов с параметрами basic LayoutBlock elements
  layout: Layout;
};

export type T_SectionElementProps = {
  key?: string;
  text: string;
  wrapperStyle?: { [key: string]: string };
  textStyle?: { [key: string]: string };
  inputStyle?: { [key: string]: string };
  url?: string;
  style: {
    backgroundColor: string;
    text: string;
    color: string;
    border: string;
  };
  props?: {
    [key: string]: string;
  };
  RadioGroup?: ISettingsInputItem[];
  CheckboxGroup?: ISettingsInputItem[];
  SelectList?: ISettingsInputItem[];
  LayoutBlockSlider?: ISettingsInputItem[];
  MasonryGallery?: ISettingsInputItem[];
  Avatars?: ISettingsInputItem[];
  size?: number;
};

export interface ILayoutBlock {
  props: T_SectionElementProps;
}

export type T_SwiperReduxPayload = {
  payload: {
    presetName: string;
  };
};

export type T_SwiperPreset = {
  name: string;
  params: object;
};

export type T_SwiperPresetList = {
  default: T_SwiperPreset;
  navigation: T_SwiperPreset;
  pagination: T_SwiperPreset;
  vertical: T_SwiperPreset;
  multiple: T_SwiperPreset;
};
