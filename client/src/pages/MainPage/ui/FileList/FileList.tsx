import { fileActions, FileItem, getFiles } from 'entities/FIle'
import React, { type FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './FileList.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type CurrentDir } from 'entities/FIle/model/types/file'
import { type DragDropAction } from 'features/DragDropFiles/model/types/DragDropFilesSchema'

interface FileListProps {
  className?: string
  dragDropHandler: (props: DragDropAction) => void
}

export const FileList: FC<FileListProps> = memo((props) => {
  const { className, dragDropHandler } = props

  const dispatch = useAppDispatch()

  const openFileHandler = useCallback((dir: CurrentDir) => {
    dispatch(fileActions.setCurrentDir(dir))
  }, [])

  const data = useSelector(getFiles)?.map((file, index) => (
    <FileItem
      key={index}
      file={file}
      onClick={() => { openFileHandler({ id: file._id, name: file.name }) }}
    />
  ))

  return (
    <div className={classNames(cls.FileList, {}, [className])}>
      <div className={cls.FileList__header}>
        <div className={cls.FileList__name}>Название</div>
        <div className={cls.FileList__date}>Дата</div>
        <div className={cls.FileList__size}>Размер</div>
      </div>
      <div
        className={cls.FileList__items}
        onDragEnter={(event: React.DragEvent) => { dragDropHandler({ event, state: true }) }}
        onDragLeave={(event: React.DragEvent) => { dragDropHandler({ event, state: false }) }}
        onDragOver={(event: React.DragEvent) => { dragDropHandler({ event, state: true }) }}
      >
        {data}
      </div>
    </div>
  )
})
