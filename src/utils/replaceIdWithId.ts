import { nanoid } from "nanoid";

export const replaceIdWithNanoid = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => replaceIdWithNanoid(item));
  } else if (typeof obj === "object" && obj !== null) {
    const newObj: any = {};
    for (const key in obj) {
      if (key === "id") {
        newObj[key] = nanoid();
      } else {
        newObj[key] = replaceIdWithNanoid(obj[key]);
      }
    }
    return newObj;
  }
  return obj;
};
