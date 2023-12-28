import {
  TProcessFiles,
  T_BlockElement,
  T_ComponentProps,
  T_SidebarMenuItem,
} from '@/types/landingBuilder';

export const insertChild = (
  obj: unknown,
  target: string,
  element: T_BlockElement,
): T_BlockElement | T_BlockElement[] => {
  // Когда блок помещается в рабочую область
  if (!target) {
    return [...(obj as T_BlockElement[]), element];
  }

  if (Array.isArray(obj)) {
    return obj.flatMap((item) => insertChild(item, target, element));

    // Когда блок помещается в другой блок
  } else if (typeof obj === 'object' && obj !== null) {
    const objAsBlock = obj as T_BlockElement;
    const newObj = { ...objAsBlock };
    if (objAsBlock.layout && objAsBlock.layout.i === target) {
      newObj.children = newObj.children ? [...newObj.children, element] : [element];
      return newObj;
    }

    // Не хватает ума типизировать!
    // for (const key in newObj) {
    //   if (newObj.hasOwnProperty(key) && newObj[key as keyof T_BlockElement]) {
    //     newObj[key as keyof T_BlockElement] = insertChild(
    //       newObj[key as keyof T_BlockElement],
    //       target,
    //       element,
    //     );
    //   }
    // }
    // return newObj;
  }

  return obj as T_BlockElement[];
};

const processFiles = async (moduleFiles: TProcessFiles) => {
  const elements: T_SidebarMenuItem[] = [];

  for await (const file of Object.values(moduleFiles)) {
    const module = await file();
    const { props } = module as T_ComponentProps;

    if (props) {
      const isExist = elements.find((element) => element.name === props.type);
      if (isExist) {
        isExist.list.push(props);
      } else {
        elements.push({ name: props.type, list: [props] });
      }
    }
  }

  return elements;
};

export const importFiles = async () => {
  let lsSections: T_SidebarMenuItem[] = [];

  try {
    const data = JSON.parse(localStorage.getItem('sections') || '');
    if (data) {
      lsSections = data;
    }
  } catch (err) {
    console.log(err);
  }

  const elements = await processFiles(import.meta.glob('@atoms/**/index.ts'));
  const sections = await processFiles(import.meta.glob('@molecules/**/index.ts'));
  const templates = await processFiles(import.meta.glob('@organisms/**/index.ts'));

  return {
    Sections: [...sections, ...lsSections],
    Elements: elements,
    Templates: templates,
    Manage: [],
  };
};
