export interface FontOption {
  value: string;
  label: string;
}

export interface StyleObject {
  [key: string]: string | number | StyleObject;
}

export interface ComponentStyleType {
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
export type StyleComponentsType = {
  width: React.FC<FieldProps>;
  height: React.FC<FieldProps>;
  marginBottom: React.FC<FieldProps>;
  borderRadius: React.FC<FieldProps>;
  color: React.FC<FieldProps>;
  background: React.FC<FieldProps>;
  fontFamily: React.FC<FieldProps>;
  fontSize: React.FC<FieldProps>;
  [key: string]: React.FC<FieldProps> | undefined;
};
