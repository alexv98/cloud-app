import React, { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './FileItem.module.scss'
import { type IFile } from 'entities/FIle'
import FileIcon from 'shared/assets/icons/file.svg'
import DirIcon from 'shared/assets/icons/folder.svg'
import { type DeepPartial } from '@reduxjs/toolkit'

interface FileItemProps {
  className?: string
  file: DeepPartial<IFile>
  onClick: () => void
}

export const FileItem = memo(({ className, file, onClick }: FileItemProps) => {
  const { name, date, size, type } = file

  return (
    <div
      className={classNames(cls.FileItem, {}, [className])}
      onClick={onClick}
    >
      <div className={cls.FileItem__img}>
        {type === 'dir' ? <DirIcon /> : <FileIcon />}
      </div>
      <div>{name}</div>
      <div className={cls.FileItem__date}>{String(date).slice(0, 10)}</div>
      <div className={cls.FileItem__size}>{size}</div>
    </div>
  )
})
