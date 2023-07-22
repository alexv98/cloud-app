import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { AppLink } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar: FC = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <h4>
        <AppLink to={'/'}>
          CLOUD DISK
        </AppLink>
      </h4>
      <div className={cls.Navbar__links}>
        <AppLink
          className={cls.Navbar__link}
          to={'/login'}
        >
          Войти
        </AppLink>
        <div className={cls.Navbar__theme}>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}
