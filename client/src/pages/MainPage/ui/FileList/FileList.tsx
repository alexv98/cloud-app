import { fileActions, FileItem, getFiles } from 'entities/FIle'
import { type FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './FileList.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { type CurrentDir } from 'entities/FIle/model/types/file'

interface FileListProps {
  className?: string
}

const FileList: FC<FileListProps> = (props) => {
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
    <div className={classNames(cls.FileList, {}, [])}>
      <div className={cls.FileList__header}>
        <div className={cls.FileList__name}>Название</div>
        <div className={cls.FileList__date}>Дата</div>
        <div className={cls.FileList__size}>Размер</div>
      </div>
      <div>{data}</div>
    </div>
  )
}

export default FileList
