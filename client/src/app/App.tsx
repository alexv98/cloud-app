import React, { type FC, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router/AppRouter'

export const App: FC = () => {
  const { theme } = useTheme()

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
