import React from 'react'
import LayoutKind from '@lib/constants/layout-kind'
import Page from '@lib/interfaces/page/page'
import PagePath from '@lib/constants/page-path'

const AboutPage: Page = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

AboutPage.pageMeta = {
  title: 'About',
  description: 'Actual information',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.ABOUT,
}

export default AboutPage
