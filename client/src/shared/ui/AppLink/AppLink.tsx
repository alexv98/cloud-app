import { classNames } from 'shared/lib/classNames/classNames'
import { Link, type LinkProps } from 'react-router-dom'
import { FC, memo } from 'react'
import cls from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
  className?: string
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  )
})
