import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { type ButtonHTMLAttributes, memo } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
  DEFAULT = 'default',
  OUTLINED = 'outlined',
  DEFAULT_INVERTED = 'defaultInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  size?: ButtonSize
  disabled?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.DEFAULT,
    size = ButtonSize.M,
    disabled = false,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.disabled]: disabled
  }

  const additional = [
    className,
    cls[theme],
    cls[size]
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
