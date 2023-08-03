import { getUserIsAuth } from 'entities/User/model/selectors/getUserIsAuth/getUserIsAuth'
import { Suspense, useMemo, type FC } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

export const AppRouter: FC = () => {
  const isAuth = useSelector(getUserIsAuth)

  const routes = useMemo(
    () =>
      Object.values(routeConfig).filter(route => {
        if (route.authOnly && !isAuth) {
          return false
        }
        return true
      }),
    [isAuth]
  )

  return (
    <Routes>
      {Object.values(routes).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className='page-wrapper'>{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  )
}
