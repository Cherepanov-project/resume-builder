export type Style = {
  [property: string]: string;
};

export type Href = string;

export type ElementState = {
  id: string;
  styles: Style;
  type: "button";
  href?: Href;
};

export type HistoryState = {
  id: string;
  styles?: Style;
  href?: Href;
};

export type SettingsPanelState = {
  shown: boolean;
  selectedElement?: string;
  elements: Record<string, ElementState>;
  history: HistoryState[];
  currentHistoryIndex: number;
};

function isHref(payload: unknown): payload is Href {
  return typeof payload === "string";
}

function isStyle(payload: unknown): payload is Style {
  return typeof payload === "object" && payload !== null;
}

export { isHref, isStyle };
