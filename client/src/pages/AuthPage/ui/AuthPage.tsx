import React, { type FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AuthPage.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface LoginProps {
  className?: string
}

const AuthPage: FC = ({ className }: LoginProps) => {
  const [isRegistration, setIsRegistration] = useState(false)
  const [name, setName] = useState('')
  const [lastName, setLastname] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isRegistrationHandler = () => {
    setIsRegistration(!isRegistration)
  }

  console.log(isRegistration)

  if (isRegistration) {
    return (
      <div className={classNames(cls.Auth, {}, [className])}>
        <div className={cls.Auth__content}>
          <h2 className={cls.Auth__title}>Регистрация</h2>
          <Input
            placeholder={'Введите имя'}
            value={name}
            onChange={setName}
            required={true}
          />
          <Input
            placeholder={'Введите фамилию'}
            value={lastName}
            onChange={setLastname}
            required={true}
          />
          <Input
            placeholder={'Введите E-mail'}
            value={email}
            onChange={setEmail}
            autoFocus={true}
            required={true}
          />
          <Input
            placeholder={'Введите пароль'}
            onChange={setPassword}
            value={password}
            required={true}
          />
          <div className={cls.Auth__btns}>
            <Button
              className={cls.Auth__btn}
              theme={ButtonTheme.DEFAULT}
              hovered={true}
              onClick={isRegistrationHandler}
            >
              Уже есть аккаунт?
            </Button>
            <Button
              className={cls.Auth__btn}
              theme={ButtonTheme.SOLID}
            >
              Создать аккаунт
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(cls.Auth, {}, [className])}>
      <div className={cls.Auth__content}>
        <h2 className={cls.Auth__title}>Войти в аккаунт</h2>
        <Input
          placeholder={'Введите E-mail'}
          value={email}
          onChange={setEmail}
          autoFocus={true}
          required={true}
        />
        <Input
          placeholder={'Введите пароль'}
          onChange={setPassword}
          value={password}
          required={true}
        />
        <div className={cls.Auth__btns}>
          <Button
            className={cls.Auth__btn}
            theme={ButtonTheme.DEFAULT}
            hovered={true}
            onClick={isRegistrationHandler}
          >
            Нет аккаунта?
          </Button>
          <Button
            className={cls.Auth__btn}
            theme={ButtonTheme.SOLID}
          >
            Войти
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
