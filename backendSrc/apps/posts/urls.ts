import { RouterType } from "../../router";
import { GetTemplatesApi } from "./api/getTemplates";
import { CreateTemplateApi } from "./api/createTemplates";

export default function registerTemplateRoutes(router: RouterType) {
  router.get("/api/template/", GetTemplatesApi);
  router.post("/api/template/", CreateTemplateApi);
}
