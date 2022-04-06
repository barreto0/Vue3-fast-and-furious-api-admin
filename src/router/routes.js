import SignIn from "../components/user/SignIn.vue";
import NotFound from "../components/errors/NotFound.vue";
import DashboardHome from "../components/dashboard/DashboardHome.vue";
import ChooseInteractionType from "../components/user/ChooseInteractionType.vue";
import RegisterQuoteSuggestion from "../components/quotes/RegisterQuoteSuggestion.vue";

export const routes = [
  {
    path: "/",
    component: ChooseInteractionType,
    title: "ChooseInteractionType",
    meta: { guest: true },
  },
  {
    path: "/register-quote",
    component: RegisterQuoteSuggestion,
    title: "RegisterQuoteSuggestion",
    meta: { guest: true },
  },
  {
    path: "/signin",
    component: SignIn,
    title: "Sign In",
    meta: { guest: true },
  },
  {
    path: "/dashboard",
    component: DashboardHome,
    title: "Dashboard",
    meta: { guest: true },
  },
  // {
  //   path: "/dashboard",
  //   component: DashboardHome,
  //   title: "Dashboard",
  //   meta: { requiresAuth: true },
  // },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    title: "Not Found",
    meta: { guest: true },
  },
];
