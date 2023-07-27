import { userActions } from 'entities/User'
import { getUserIsAuth } from 'entities/User/model/selectors/getUserIsAuth/getUserIsAuth'
import { type FC } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC = ({ className }: NavbarProps) => {
	const isAuth = useSelector(getUserIsAuth)
	const dispatch = useAppDispatch()

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<h4>
				<AppLink to={'/'}>CLOUD DISK</AppLink>
			</h4>
			<div className={cls.Navbar__links}>
				{isAuth ? (
					<AppLink
						className={cls.Navbar__link}
						onClick={() => dispatch(userActions.logout())}
						to={'/login'}
					>
						Выйти
					</AppLink>
				) : (
					<AppLink className={cls.Navbar__link} to={'/login'}>
						Войти
					</AppLink>
				)}
				<div className={cls.Navbar__theme}>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	)
}
