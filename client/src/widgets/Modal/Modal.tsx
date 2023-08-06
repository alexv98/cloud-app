import React, { type ChangeEvent, type FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import { createDir } from 'features/Files/model/services/CreateDir/createDir'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { fileActions, getCurrentId } from 'entities/FIle'

interface ModalProps {
  className?: string
}

export const Modal: FC = ({ className }: ModalProps) => {
  const [dirName, setDirname] = useState('')
  const dispatch = useAppDispatch()
  const currentDir = useSelector(getCurrentId)

  const createDirHandler = async () => {
    await dispatch(createDir({
      name: dirName,
      type: 'dir',
      parent: currentDir
    }))
    dispatch(fileActions.setShowModal(false))
  }

  const closeModal = useCallback(() => {
    dispatch(fileActions.setShowModal(false))
  }, [dispatch])

  return (
    <div
      className={classNames(cls.Modal, {}, [className])}
    >
      <div className={cls.Modal__content}>
        <div className={cls.Modal__header}>
          <div className={cls.Modal__title}>Создать новую папку</div>
          <div
            className={cls.Modal__close}
            onClick={closeModal}
          >
            X
          </div>
        </div>
        <Input
          className={cls.Modal__input}
          type='text'
          placeholder={'Введите название папки...'}
          value={dirName}
          onChange={(e) => { setDirname(e) }}
        />
        <Button
          className={cls.Modal__btn}
          onClick={createDirHandler}
        >
          Создать папку
        </Button>
      </div>
    </div>
  )
}
