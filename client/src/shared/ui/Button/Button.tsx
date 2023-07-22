import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { type ButtonHTMLAttributes, memo } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
  DEFAULT = 'default',
  OUTLINED = 'outlined',
  SOLID = 'solid'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  hovered?: boolean
  disabled?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.DEFAULT,
    disabled = false,
    hovered = false,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.hovered]: hovered
  }

  const additional = [
    className,
    cls[theme]
  ]

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, additional)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
})
