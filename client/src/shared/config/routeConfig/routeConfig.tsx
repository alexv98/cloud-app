import { type RouteProps } from 'react-router-dom'
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage'
import { MainPage } from 'pages/MainPage'
import { AuthPage } from 'pages/AuthPage'

export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',

  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',

  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <AuthPage/>
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}
