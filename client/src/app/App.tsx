import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router/AppRouter'
import { auth } from 'features/Authorization/model/services/auth'
import { Suspense, useEffect, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Navbar } from 'widgets/Navbar'

export const App: FC = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
