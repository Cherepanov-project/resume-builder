import { RouterType } from "../../router";
import { GetPostsApi } from "./api/getPosts";

export default function registerPostsRoutes(router: RouterType) {
  router.get("/api/posts/", GetPostsApi);
  router.get("/api/posts/test", () => {
    return Response.json([
      { id: 1, title: "Test Post 1", content: "Test content 1" },
      { id: 2, title: "Test Post 2", content: "Test content 2" },
    ]);
  });
}
