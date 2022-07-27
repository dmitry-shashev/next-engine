import React, { FC } from 'react'
import styles from './TopNav.module.scss'
import Link from 'next/link'
import PagePath from '@lib/constants/page-path'
import clsx from 'clsx'
import PageMeta from '@lib/interfaces/page/page-meta'

interface PageToShow {
  name: string
  page: PagePath
  links: Array<PagePath>
}

const pagesToShow: Array<PageToShow> = [
  {
    name: 'SSR Catalog',
    page: PagePath.CATALOG,
    links: [PagePath.CATALOG, PagePath.PRODUCT_ID],
  },
  {
    name: 'State Catalog',
    page: PagePath.STATE_CATALOG,
    links: [PagePath.STATE_CATALOG],
  },
  {
    name: 'About',
    page: PagePath.ABOUT,
    links: [PagePath.ABOUT],
  },
]

interface Props {
  pageMeta: PageMeta
}

const TopNav: FC<Props> = ({ pageMeta }) => {
  return (
    <div className={styles.wrap}>
      <ul className={styles.navList}>
        {pagesToShow.map(({ name, page, links }) => (
          <li key={name}>
            <Link href={page}>
              <a
                className={clsx('unStyledLink', {
                  [styles.active ?? '']: links.includes(pageMeta.path),
                })}
              >
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TopNav
