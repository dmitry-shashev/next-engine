import React, { FC } from 'react'
import styles from './GreenButton.module.scss'
import clsx from 'clsx'

interface Props {
  size?: 'default' | 'large'
}

const GreenButton: FC<Props> = ({ size = 'default' }) => {
  return (
    <button
      className={clsx(styles.greenButton, {
        [styles.defaultSize ?? '']: size === 'default',
        [styles.largeSize ?? '']: size === 'large',
      })}
      type="button"
    >
      Green button
    </button>
  )
}

export default GreenButton
