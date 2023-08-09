import { fileFetching } from 'features/Files'
import { type FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import FileList from './FileList/FileList'
import cls from './MainPage.module.scss'
import MainPageHeader from './MainPageHeader/MainPageHeader'
import { Modal } from 'widgets/Modal/Modal'
import { getShowModal } from 'entities/FIle/model/selectors/getShowModal/getShowModal'
import { useGetCurrentDir } from 'entities/FIle/model/hooks/useGetCurrentDir'

interface MainPageProps {
  className?: string
}

const MainPage: FC<MainPageProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  const { dirStack, currentDir } = useGetCurrentDir()
  const isShowModal = useSelector(getShowModal)

  useEffect(() => {
    dispatch(fileFetching(currentDir))
  }, [dirStack])

  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <MainPageHeader/>
      <FileList />
      {isShowModal && <Modal />}
    </div>
  )
}

export default MainPage
