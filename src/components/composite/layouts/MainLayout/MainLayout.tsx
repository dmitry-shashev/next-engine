import React from 'react'
import { LayoutComponent } from '@lib/types'
import TopNav from '@components/primitive/TopNav/TopNav'
import styles from './MainLayout.module.scss'

const MainLayout: LayoutComponent = ({ children: pageComponent, pageMeta }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.navWrap}>
        <TopNav pageMeta={pageMeta} />
      </div>
      <div className={styles.content}>{pageComponent}</div>
    </div>
  )
}

export default MainLayout
