import { getCurrentId } from 'entities/FIle'
import { fileFetching } from 'features/FileHandlers'
import { useEffect, type FC } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import FileList from './Files/FileList/FileList'
import cls from './MainPage.module.scss'
import MainPageHeader from './MainPageHeader/MainPageHeader'

interface MainPageProps {
	className?: string
}

const MainPage: FC = ({ className }: MainPageProps) => {
	const dispatch = useAppDispatch()
	const currentDir = useSelector(getCurrentId)

	useEffect(() => {
		dispatch(fileFetching(currentDir))
	}, [currentDir])

	return (
		<div className={classNames(cls.MainPage, {}, [className])}>
			<MainPageHeader name={currentDir} />
			<FileList />
		</div>
	)
}

export default MainPage
