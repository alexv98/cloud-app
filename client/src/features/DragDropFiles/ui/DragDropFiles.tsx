import React, { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './DragDropFiles.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type DragDropAction } from 'features/DragDropFiles/model/types/DragDropFilesSchema'
import { uploadFile } from 'features/Files/model/services/uploadFile/uploadFile'
import { useGetCurrentDir } from 'entities/FIle/model/hooks/useGetCurrentDir'
import { dragDropFilesActions } from 'features/DragDropFiles'

interface DragDropFilesProps {
  className?: string
  dragDropHandler: (props: DragDropAction) => void
}

export const DragDropFiles: FC<DragDropFilesProps> = memo((props) => {
  const { className, dragDropHandler } = props
  const dispatch = useAppDispatch()
  const { currentDir } = useGetCurrentDir()

  const dropHandler = (event: React.DragEvent) => {
    event.preventDefault()
    event.stopPropagation()
    const files = [...event.dataTransfer.files]
    files.forEach(async file => await dispatch(uploadFile({ file, parent: currentDir.id })))
    dispatch(dragDropFilesActions.setDragEnter({ event, state: false }))
  }

  return (
    <div
      className={classNames(cls.DragDropFiles, {}, [className])}
      onDragEnter={(event: React.DragEvent) => { dragDropHandler({ event, state: true }) }}
      onDragLeave={(event: React.DragEvent) => { dragDropHandler({ event, state: false }) }}
      onDragOver={(event: React.DragEvent) => { dragDropHandler({ event, state: true }) }}
      onDrop={dropHandler}
    >
      Перетащите файлы сюда
    </div>
  )
})
