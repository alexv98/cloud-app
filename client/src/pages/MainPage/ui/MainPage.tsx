import { fileFetching } from 'features/Files'
import { type FC, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import cls from './MainPage.module.scss'
import { FileList } from '../ui/FileList/FileList'
import MainPageHeader from './MainPageHeader/MainPageHeader'
import { Modal } from 'widgets/Modal/Modal'
import { getShowModal } from 'entities/FIle/model/selectors/getShowModal/getShowModal'
import { useGetCurrentDir } from 'entities/FIle/model/hooks/useGetCurrentDir'
import { DragDropFiles, dragDropFilesActions } from 'features/DragDropFiles'
import { getIsDragEnter } from 'features/DragDropFiles/model/selectors/getIsDragEnter'
import { type DragDropAction } from 'features/DragDropFiles/model/types/DragDropFilesSchema'

interface MainPageProps {
  className?: string
}

const MainPage: FC<MainPageProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  const { dirStack, currentDir } = useGetCurrentDir()
  const isShowModal = useSelector(getShowModal)
  const isDragEnter = useSelector(getIsDragEnter)

  useEffect(() => {
    dispatch(fileFetching(currentDir))
  }, [dirStack])

  const dragDropHandler = useCallback((props: DragDropAction) => {
    dispatch(dragDropFilesActions.setDragEnter(props))
  }, [dispatch])

  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      {
        !isDragEnter
          ? <>
            <MainPageHeader />
            <FileList dragDropHandler={dragDropHandler}/>
            {isShowModal && <Modal />}
          </>
          : <DragDropFiles dragDropHandler={dragDropHandler}/>
      }

    </div>
  )
}

export default MainPage
