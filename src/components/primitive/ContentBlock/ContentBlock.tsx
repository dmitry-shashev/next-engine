import React, { FC, ReactNode } from 'react'
import styles from './ContentBlock.module.scss'
import clsx from 'clsx'
import { CircularProgress } from '@mui/material'

interface Props {
  loading: boolean
  data: ReadonlyArray<unknown>
  children: ReactNode
  noDataMessage?: string
}

const ContentBlock: FC<Props> = ({
  loading,
  data,
  children,
  noDataMessage = 'No data found',
}) => {
  return (
    <div className={clsx({ [styles.contentLoading ?? '']: loading })}>
      {loading ? (
        <>
          {data.length > 0 ? (
            <>{children}</>
          ) : (
            <div aria-label="Pre Loader" className="preLoaderBlock">
              <CircularProgress />
            </div>
          )}
        </>
      ) : (
        <>
          {data.length > 0 ? (
            <>{children}</>
          ) : (
            <div className={styles.contentNotFound}>{noDataMessage}</div>
          )}
        </>
      )}
    </div>
  )
}

export default ContentBlock
