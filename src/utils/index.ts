export const insertChild = (obj, target, element) => {
  // Когда блок помещается в рабочую область.
  if (!target) {
    return [...obj, element];
  }

  if (Array.isArray(obj)) {
    const newArr = obj.map((item) => insertChild(item, target, element));
    return newArr;

    // Когда блок помещается в другой блок.
  } else if (typeof obj === 'object' && obj !== null) {
    if (obj.layout?.i === target) {
      const newObj = { ...obj };
      newObj.children = newObj.children ? [...newObj.children, element] : [element];
      return newObj;
    }

    const newObj = { ...obj };
    for (const key in newObj) {
      newObj[key] = insertChild(newObj[key], target, element);
    }
    return newObj;
  }

  return obj;
};

const processFiles = async (moduleFiles) => {
  const elements = [];

  for await (const file of Object.values(moduleFiles)) {
    const module = await file();
    const { props } = module;

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
  let lsSections = [];

  try {
    const data = JSON.parse(localStorage.getItem('sections'));
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
