import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import {
  getLoginEmail,
  getLoginPassword,
  login,
  loginActions,
  loginReducer
} from 'features/Authorization'
import { useCallback, type FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import DynamicModuleLoader, {
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './AuthPage.module.scss'

interface AuthLoginProps {
  className?: string
  regModeHandler: (isRegMode: boolean) => void
}

const initialLoginReducers: ReducersList = {
  loginForm: loginReducer
}

const AuthLogin: FC<AuthLoginProps> = props => {
  const { className, regModeHandler } = props

  const dispatch = useAppDispatch()
  const email = useSelector(getLoginEmail)
  const password = useSelector(getLoginPassword)
  const authData = useSelector(getUserAuthData)

  const navigate = useNavigate()

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(loginActions.setEmail(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(async () => {
    await dispatch(login({ email, password }))
    navigate('/')
  }, [dispatch, email, password])

  return (
    <DynamicModuleLoader reducers={initialLoginReducers} removeAfterUnmount>
      <div className={classNames(cls.Auth, {}, [className])}>
        <div className={cls.Auth__content}>
          <h2 className={cls.Auth__title}>Войти в аккаунт</h2>
          <Input
            placeholder={'Введите E-mail'}
            value={email}
            onChange={onChangeEmail}
            autoFocus={true}
            required={true}
          />
          <Input
            placeholder={'Введите пароль'}
            onChange={onChangePassword}
            value={password}
            required={true}
          />
          <div className={cls.Auth__btns}>
            <Button
              className={cls.Auth__btn}
              theme={ButtonTheme.DEFAULT}
              hovered={true}
              onClick={() => { regModeHandler(true) }}
            >
              Нет аккаунта?
            </Button>
            <Button
              className={cls.Auth__btn}
              theme={ButtonTheme.SOLID}
              onClick={onLoginClick}
            >
              Войти
            </Button>
          </div>
        </div>
      </div>
    </DynamicModuleLoader>
  )
}

export default AuthLogin
