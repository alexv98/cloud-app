import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { useLocation, Navigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export function RequireAuth ({ children }: { children: JSX.Element }) {
  const isAuth = useSelector((getUserAuthData))
  const location = useLocation()

  if (!isAuth) {
    return <Navigate to={RoutePath.login} state={{ from: location }} replace />
  }

  return children
}
