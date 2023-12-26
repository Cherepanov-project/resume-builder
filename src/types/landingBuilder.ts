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
  type: string;
  source: string;
  columns?: number;
  props?: { [key: string]: string | number | { [key: string]: string | number } };
  children?: T_BlockElement[];
  layout: Layout;
};
