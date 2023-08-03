import { type FC } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import BackIcon from 'shared/assets/icons/back.svg'
import BigGridIcon from 'shared/assets/icons/bigGridIcon.svg'
import RowIcon from 'shared/assets/icons/rowIcon.svg'
import SmallGridIcon from 'shared/assets/icons/smallGridIcon.svg'
import SortIcon from 'shared/assets/icons/sort.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import cls from './MainPageHeader.module.scss'

interface MainPageHeaderProps {
	className?: string
	name: string
}

const MainPageHeader: FC<MainPageHeaderProps> = props => {
	const searchParams = useSearchParams()
	const navigate = useNavigate()

	const { className, name } = props
	return (
		<div className={classNames(cls.MainPageHeader, {}, [className])}>
			{/* <Text title={name} /> */}
			<Text title='TITLE' align={TextAlign.CENTER} className={cls.title} />
			<div className={cls.btns}>
				<div className={cls.btns__left}>
					{searchParams[0].size > 0 && (
						<Button
							theme={ButtonTheme.OUTLINED}
							onClick={() => navigate(-1)}
							rounded
						>
							<BackIcon />
						</Button>
					)}
					<Button theme={ButtonTheme.OUTLINED} rounded>
						Создать новую папку
					</Button>
				</div>

				<div className={cls.btns__right}>
					<div className={cls.btns__sort}>
						<SortIcon />
					</div>
					<div className={cls.btns__grid}>
						<BigGridIcon />
						<SmallGridIcon />
						<RowIcon />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainPageHeader
