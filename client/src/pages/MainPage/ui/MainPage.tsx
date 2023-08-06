import { getCurrentId, getFiles } from 'entities/FIle'
import { fileFetching } from 'features/Files'
import { useEffect, type FC } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import FileList from './FileList/FileList'
import cls from './MainPage.module.scss'
import MainPageHeader from './MainPageHeader/MainPageHeader'
import { Modal } from 'widgets/Modal/Modal'
import { getShowModal } from 'entities/FIle/model/selectors/getShowModal/getShowModal'

interface MainPageProps {
  className?: string
}

const MainPage: FC = ({ className }: MainPageProps) => {
  const dispatch = useAppDispatch()
  const currentDir = useSelector(getCurrentId)
  const isShowModal = useSelector(getShowModal)

  useEffect(() => {
    dispatch(fileFetching(currentDir))
  }, [currentDir])

  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <MainPageHeader name={currentDir} />
      <FileList />
      {isShowModal && <Modal />}
    </div>
  )
}

export default MainPage
