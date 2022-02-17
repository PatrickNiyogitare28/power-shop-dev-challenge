import Hello from '@components/Hello/index';
import World from '@components/World/index';
import Dashboard from '@views/dashboard';
import Onboard from '@views/onboard';

export const routes = [
  {
    component: Onboard,
    exact: true,
    path: '/',
  },
  {
    component: Dashboard,
    exact: false,
    path: '/dashboard',
  },
];
