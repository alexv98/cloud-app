import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export const PageError: FC = ({ className }: PageErrorProps) => {
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>Произошла непредвиденная ошибка</p>
      <Button onClick={() => { location.reload() }}>
        Обновить страницу
      </Button>
    </div>
  )
}
