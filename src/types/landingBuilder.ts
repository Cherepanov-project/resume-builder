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
  type?: string;
  source: string;
  columns?: number;
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
  props?: { [key: string]: string | number | { [key: string]: string | number } };
  columns?: number;
  source: string;
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
  key: string;
  text: string;
  wrapperStyle: { [key: string]: string };
  textStyle: { [key: string]: string };
  inputStyle?: { [key: string]: string };
  url?: string;
  style: { [key: string]: string };
};

export interface ILayoutBlock {
  props: T_SectionElementProps;
}
