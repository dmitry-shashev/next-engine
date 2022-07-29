import React, { FC } from 'react'
import { Breadcrumbs, Typography } from '@mui/material'
import Link from 'next/link'
import styles from './BreadCrumbsBlock.module.scss'
import BreadCrumbModel from '@lib/interfaces/bread-crumb.model'

interface Props {
  data: Array<BreadCrumbModel>
}

const BreadCrumbsBlock: FC<Props> = ({ data }) => {
  return (
    <div className={styles.wrap}>
      <Breadcrumbs>
        {data.map((elem) => (
          <div key={elem.label}>
            {elem.link ? (
              <Link href={elem.link}>
                <a className="unStyledLink">{elem.label}</a>
              </Link>
            ) : (
              <Typography color="text.primary">{elem.label}</Typography>
            )}
          </div>
        ))}
      </Breadcrumbs>
    </div>
  )
}

export default BreadCrumbsBlock
