export interface FontOption {
  value: string;
  label: string;
}

export interface StyleObject {
  [key: string]: string | number | StyleObject;
}

interface ComponentStyleType {
  [key: string]: string | number | StyleObject;
}

export interface ComponentProps {
  style: ComponentStyleType;
  [key: string]: unknown;
}

export interface StyleEditorProps {
  componentProps: ComponentProps;
  updateParent: () => void;
  setNewStyleValue: (place: string, el: string, value: string | number) => void;
  place?: string;
  Component: React.ComponentType<ComponentProps>;
  isComplex?: boolean;
  propName: string;
}

export interface ContainerProps {
  children: React.ReactNode;
}

export interface FieldProps {
  place_: string;
  subKey?: string;
  value: string | number;
  label: string;
  onChange: (value: string | number) => void;
}
