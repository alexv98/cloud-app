import { type ChangeEvent, type FC, useCallback } from 'react'
import BackIcon from 'shared/assets/icons/back.svg'
import BigGridIcon from 'shared/assets/icons/bigGridIcon.svg'
import RowIcon from 'shared/assets/icons/rowIcon.svg'
import SmallGridIcon from 'shared/assets/icons/smallGridIcon.svg'
import SortIcon from 'shared/assets/icons/sort.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import cls from './MainPageHeader.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fileActions, getDirStack, type IFile } from 'entities/FIle'
import { useGetCurrentDir } from 'entities/FIle/model/hooks/useGetCurrentDir'
import { uploadFile } from 'features/Files/model/services/uploadFile/uploadFile'
import { useSelector } from 'react-redux'

interface MainPageHeaderProps {
  className?: string
}

const MainPageHeader: FC = ({ className }: MainPageHeaderProps) => {
  const dispatch = useAppDispatch()
  const { dirStack, currentDir } = useGetCurrentDir()

  const openModal = useCallback(() => {
    dispatch(fileActions.setShowModal(true))
  }, [dispatch])

  const backClickHandler = useCallback(() => {
    dispatch(fileActions.setLastCurrentDir())
  }, [dispatch])

  const fileUploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // @ts-expect-error
    const files = [...event.target.files]
    files.forEach(async file => await dispatch(uploadFile({ file, parent: currentDir.id })))
  }

  return (
    <div className={classNames(cls.MainPageHeader, {}, [className])}>
      <Text
        title={dirStack.length > 1 ? currentDir.name : 'Корневая директория'}
        align={TextAlign.CENTER}
        className={cls.title}
      />
      <div className={cls.btns}>
        <div className={cls.btns__left}>
          {
            (dirStack.length > 1) &&
            <Button
              theme={ButtonTheme.OUTLINED}
              onClick={backClickHandler}
              rounded
              className={cls.btns__back}
            >
              <BackIcon />
            </Button>
          }
          <div className={cls.btns__createBlock}>
            <Button
              theme={ButtonTheme.OUTLINED}
              rounded
              onClick={openModal}
            >
              Создать новую папку
            </Button>
            <div className={cls.upload}>
              <label htmlFor='upload' className={cls.upload__label}>Загрузить файл</label>
              <input
                multiple={true}
                type='file'
                id='upload'
                className={cls.upload__input}
                onChange={fileUploadHandler}
              />
            </div>
          </div>
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
