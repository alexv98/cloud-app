import {
  getRegEmail,
  getRegLastname,
  getRegName,
  getRegPassword,
  registration
} from 'features/Authorization'
import {
  regActions,
  regReducer
} from 'features/Authorization/model/slice/regSlice'
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

interface AuthRegProps {
  className?: string
  regModeHandler: (isRegMode: boolean) => void
}

const initialRegReducers: ReducersList = {
  regForm: regReducer
}

const AuthReg: FC<AuthRegProps> = props => {
  const { className, regModeHandler } = props

  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const email = useSelector(getRegEmail)
  const password = useSelector(getRegPassword)
  const name = useSelector(getRegName)
  const lastname = useSelector(getRegLastname)

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(regActions.setEmail(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(regActions.setPassword(value))
    },
    [dispatch]
  )

  const onChangeName = useCallback(
    (value: string) => {
      dispatch(regActions.setName(value))
    },
    [dispatch]
  )

  const onChangeLastname = useCallback(
    (value: string) => {
      dispatch(regActions.setLastname(value))
    },
    [dispatch]
  )

  const onRegClick = useCallback(async () => {
    await dispatch(registration({ email, password, name, lastname }))
    navigate('/')
  }, [dispatch, email, password, name, lastname])

  return (
    <DynamicModuleLoader reducers={initialRegReducers} removeAfterUnmount>
      <div className={classNames(cls.Auth, {}, [className])}>
        <div className={cls.Auth__content}>
          <h2 className={cls.Auth__title}>Регистрация</h2>
          <Input
            placeholder={'Введите имя'}
            value={name}
            onChange={onChangeName}
            required={true}
          />
          <Input
            placeholder={'Введите фамилию'}
            value={lastname}
            onChange={onChangeLastname}
            required={true}
          />
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
              Уже есть аккаунт?
            </Button>
            <Button
              className={cls.Auth__btn}
              theme={ButtonTheme.SOLID}
              onClick={onRegClick}
            >
              Создать аккаунт
            </Button>
          </div>
        </div>
      </div>
    </DynamicModuleLoader>
  )
}

export default AuthReg
