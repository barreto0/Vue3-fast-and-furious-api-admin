import SignIn from "../components/user/SignIn.vue";
import NotFound from "../components/errors/NotFound.vue";

export const routes = [
  { path: "/", component: SignIn, title: "Sign In", meta: { guest: true } },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    title: "Not Found",
    meta: { guest: true },
  },
];
