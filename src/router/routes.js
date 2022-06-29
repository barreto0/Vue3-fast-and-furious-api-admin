import SignIn from '../components/user/SignIn/SignIn.vue';
import NotFound from '../components/errors/NotFound.vue';
import DashboardHome from '../components/dashboard/DashboardHome.vue';
import ChooseInteractionType from '../components/user/ChooseInteractionType.vue';
import RegisterQuoteSuggestion from '../components/quotes/RegisterQuoteSuggestion.vue';
import Analytics from '../components/analytics/Analytics.vue';
import Documentation from '../components/documentation/Documentation.vue';
import RegisterAuthor from '../components/authors/RegisterAuthor.vue';

export const routes = [
  {
    path: '/',
    component: ChooseInteractionType,
    title: 'ChooseInteractionType',
    meta: { guest: true },
  },
  {
    path: '/register-quote',
    component: RegisterQuoteSuggestion,
    title: 'RegisterQuoteSuggestion',
    meta: { requiresAuth: true },
  },
  {
    path: '/register-author',
    component: RegisterAuthor,
    title: 'RegisterAuthor',
    meta: { requiresAuth: true },
  },
  {
    path: '/documentation',
    component: Documentation,
    title: 'Documentation',
    meta: { guest: true },
  },
  {
    path: '/signin',
    component: SignIn,
    title: 'Sign In',
    meta: { guest: true },
  },
  {
    path: '/analytics',
    component: Analytics,
    title: 'Analytics',
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard',
    component: DashboardHome,
    title: 'Dashboard',
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    title: 'Not Found',
    meta: { guest: true },
  },
];
