import {
  TProcessFiles,
  T_BlockElement,
  T_ComponentProps,
  T_SidebarMenuItem,
  T_SwiperPresetList,
} from '@/types/landingBuilder.ts';


import { Navigation, Pagination } from 'swiper/modules';

export const insertChild = (
  obj: unknown,
  target: string,
  element: T_BlockElement,
): T_BlockElement | T_BlockElement[] => {
  // Когда блок помещается в рабочую область.
  if (!target) {
    return [...(obj as T_BlockElement[]), element];
  }

  if (Array.isArray(obj)) {
    return obj.flatMap((item) => insertChild(item, target, element));

    // Когда блок помещается в другой блок.
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
    const raw = localStorage.getItem('sections');
    if (raw) {
      lsSections = JSON.parse(raw);
    }
  } catch (err) {
    console.error('Ошибка при разборе JSON из localStorage:', err);
  }

  const elements = await processFiles(import.meta.glob('@atoms/**/index.ts'));
  const sections = await processFiles(import.meta.glob('@molecules/**/index.ts'));
  const templates = await processFiles(import.meta.glob('@organisms/**/index.ts'));

  // Объединение базовый и пользовательских секций
  const allSections: T_SidebarMenuItem[] = []; 

  lsSections.forEach((elem)=>{
    let added = false;
    for(let i = 0; i < sections.length; i++){
      if(elem.name === sections[i]['name']){
        allSections.push({
          name: elem.name,
          list: [...sections[i]['list'], ...elem.list]
        });
        added = true;
        sections.splice(i,1);
      }
    }
    if(!added){
      allSections.push(elem);
    }
  })

  allSections.push(...sections);

  return {
    Sections: allSections,
    Elements: elements,
    Templates: templates,
    Manage: [],
  };
};

export const stylesImport = (content: string): string => {
  let importString: string = ``;
  if (content.includes('swiper')) {
    importString += `<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    />`;
  }
  return importString;
};

const paramsFixer = (innerParams: { 
  modules?: object; 
  pagination?: { 
    el?: string;
    clickable?: boolean;
  }; 
  navigation?: {
    nextEl?: string;
    prevEl?: string;
    enabled?: boolean;
  };
}): object => {
  if (JSON.stringify(innerParams).includes('modules')) {
    innerParams.modules = [];
  }
  if (JSON.stringify(innerParams).includes('pagination')) {
    if (innerParams.pagination) {
      innerParams.pagination.el = '.swiper-pagination';
    }
  }
  if (JSON.stringify(innerParams).includes('navigation')) {
    if (innerParams.navigation) {
      innerParams.navigation.nextEl = '.swiper-button-next';
    }
    if (innerParams.navigation) {
      innerParams.navigation.prevEl = '.swiper-button-prev';
    }
  }
  return innerParams;
};

export const logicImport = (content: string, swiperPreset: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    let importString: string = ``;

  const innerParams = paramsFixer({ ...(swiperPresets[swiperPreset as keyof T_SwiperPresetList]?.params || {}) });
  if (content.includes('swiper')) {
    importString += `
    <script type="module">
      import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'         
      const preset = ${JSON.stringify(innerParams)}
      const swiper = new Swiper('.swiper', preset)
    </script>       
    `;
    return importString;
  }
  } catch (error) {
    throw(error)
  }
};


export const swiperPresets: T_SwiperPresetList = {
  default: {
    name: 'default',
    params: {
      spaceBetween: 10,
    },
  },
  navigation: {
    name: 'navigation',
    params: {
      modules: [Navigation],
      spaceBetween: 10,
      navigation: {
        enabled: true,
      },
    },
  },
  pagination: {
    name: 'pagination',
    params: {
      modules: [Pagination],
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
    },
  },
  vertical: {
    name: 'vertical',
    params: {
      modules: [Pagination],
      loop: false,
      spaceBetween: 10,
      direction: 'vertical',
      pagination: {
        clickable: true,
      },
    },
  },
  multiple: {
    name: 'multiple',
    params: {
      slidesPerView: 3,
      spaceBetween: 0,
      pagination: {
        clickable: true,
      },
      modules: [Pagination],
    },
  },
};
