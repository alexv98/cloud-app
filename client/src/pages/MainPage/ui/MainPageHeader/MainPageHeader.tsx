import { type FC, useCallback } from 'react'
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
import { fileActions } from 'entities/FIle'
import { useGetCurrentDir } from 'entities/FIle/model/hooks/useGetCurrentDir'

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
            >
              <BackIcon />
            </Button>
          }
          <Button
            theme={ButtonTheme.OUTLINED}
            rounded
            onClick={openModal}
          >
            Создать новую папку
          </Button>
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
