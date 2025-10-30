import registerSwaggerRoutes from "./apps/swagger/urls";
import registerTemplateRoutes from "./apps/posts/urls";
import { RouterType } from "./router";

export function registerAllRoutes(router: RouterType) {
  registerSwaggerRoutes(router);
  registerTemplateRoutes(router);
}
