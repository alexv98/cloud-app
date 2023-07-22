import React, { type ChangeEvent, type InputHTMLAttributes, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    placeholder,
    value,
    onChange,
    autofocus = false,
    ...otherProps
  } = props

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }, [])

  return (
    <input
      className={classNames(cls.Input, {}, [className])}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
      autoFocus={autofocus}
    />
  )
})
