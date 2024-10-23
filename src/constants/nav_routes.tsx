import { homeIcon, historyIcon, newIcon, insightsIcon, profileIcon } from '@/assets/icons'

type NavRoute = {
  path: string;
  label: string;
  route: string;
  icon: string;
  noEffect?: boolean;
};

const NAV_ROUTES: Record<string, NavRoute> = {
  HOME: {
    path: '/home',
    label: 'Home',
    route: 'home',
    icon: homeIcon
  },
  HISTORY: {
    path: '/history',
    label: 'History',
    route: 'history',
    icon: historyIcon
  },
  NEW: {
    path: '/new',
    label: 'New',
    route: 'new',
    icon: newIcon,
    noEffect: true
  },
  INSIGHTS: {
    path: '/insights',
    label: 'Insights',
    route: 'insights',
    icon: insightsIcon
  },
  PROFILE: {
    path: '/profile',
    label: 'Profile',
    route: 'profile',
    icon: profileIcon
  }
}

export default NAV_ROUTES;