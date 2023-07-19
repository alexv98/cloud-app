import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

interface NavbarProps {
  className?: string
}

export const Navbar: FC = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <h4>CLOUD DISK</h4>
      <div className={cls.Navbar__btns}>
        <ThemeSwitcher />
        <Button
          theme={ButtonTheme.DEFAULT}
          className={cls.Navbar__btn}
        >
          Войти
        </Button>
      </div>
    </div>
  )
}
