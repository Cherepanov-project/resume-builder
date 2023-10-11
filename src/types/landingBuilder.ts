export interface IStyleFormObj {
  [key: string]: string | number;
}

export interface IElement {
  element: string;
  content: string;
  style: IStyleFormObj;
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
