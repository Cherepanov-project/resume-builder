import { RouterType } from "../../router";
import { GetTemplatesApi } from "./api/getTemplates";
import { CreateTemplateApi } from "./api/createTemplates";
import { DeleteTemplateApi } from "./api/deleteTemplate";
import { UpdateTemplateApi } from "./api/updateTemplates";

export default function registerTemplateRoutes(router: RouterType) {
  router.get("/api/template/", GetTemplatesApi);
  router.post("/api/template/", CreateTemplateApi);
  router.delete("/api/template/:id", DeleteTemplateApi);
  router.put("/api/template/:id", UpdateTemplateApi);
}
