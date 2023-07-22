import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFounePage.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      Страница не найдена
    </div>
  )
}
