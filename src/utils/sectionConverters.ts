import {
  ILayout,
  T_SectionElements,
  T_SectionElementProps,
  T_BlockElement,
} from "./../../letter-builder/types/landingBuilder";
import { nanoid } from "nanoid";
import { IGridContainers } from "@store/landingBuilder/layoutSlice";
import type { Draft } from "@reduxjs/toolkit";

const createDefaultProps = (): T_SectionElementProps => ({
  text: "",
  style: {},
  wrapperStyle: {},
  textStyle: {},
  inputStyle: {},
  componentProps: {},
});

export const convertSectionToGridContainer = (
  section: T_SectionElements,
): Draft<IGridContainers> => {
  if (!section?.name) {
    throw new Error("Section name is required");
  }

  const baseLayout: ILayout = {
    i: nanoid(),
    w: section.layout?.w || 6,
    h: section.layout?.h || 2,
    x: section.layout?.x || 0,
    y: section.layout?.y || 0,
    minW: section.layout?.minW || 1,
    maxW: section.layout?.maxW || 12,
    minH: section.layout?.minH || 1,
    maxH: section.layout?.maxH || 20,
  };

  const activeElements: Draft<T_BlockElement>[] = (section.children || []).map((child) => {
    const { componentProps = {}, ...restProps } = child.props || {};

    return {
      ...child,
      props: {
        ...createDefaultProps(),
        ...restProps,
        componentProps,
      },
      layout: {
        ...baseLayout,
        ...child.layout,
        i: child.layout?.i || nanoid(),
      },
    };
  });

  return {
    id: section.name,
    height: 30,
    elements: {
      activeElements,
    },
    layout: {
      i: null,
      w: 6,
      h: 2,
      x: 0,
      y: 0,
    },
  };
};
