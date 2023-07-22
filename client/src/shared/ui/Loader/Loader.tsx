import React, { type FC } from 'react'
import './Loader.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface LoaderProps {
  className?: string
}

export const Loader: FC = ({ className }: LoaderProps) => {
  return (
    <div className={classNames('lds-dual-ring', {}, [className])}></div>
  )
}
