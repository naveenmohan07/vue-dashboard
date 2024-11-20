export const ROUTES = {
  DASHBOARD: '/',
  USERS: '/profiles',
  SERVER: '/server',
  EYE: '/eye',
  CHAT: '/chat',
  TROPHY: '/trophy',
  SETTINGS: '/settings',
}

export const NAVIGATION_CONFIGURATION = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    path: ROUTES.DASHBOARD,
  },
  {
    title: 'Users',
    icon: 'profiles',
    path: ROUTES.USERS,
  },
  {
    title: 'Server',
    icon: 'lists',
    path: ROUTES.SERVER,
  },
  {
    title: 'Eye',
    icon: 'keywords',
    path: ROUTES.EYE,
  },

  {
    title: 'Chat',
    icon: 'monitors',
    path: ROUTES.CHAT,
  },

  {
    title: 'Trophy',
    icon: 'leaderboards',
    path: ROUTES.TROPHY,
  },

  {
    title: 'Settings',
    icon: 'settings',
    path: ROUTES.SETTINGS,
  },
]
