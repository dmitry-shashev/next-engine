import React, { FC, ReactElement } from 'react'
import LayoutKind from '@lib/constants/layout-kind'
import EmptyLayout from '@components/composite/layouts/EmptyLayout/EmptyLayout'
import PageMeta from '@lib/interfaces/page/page-meta'
import { LayoutComponent } from '@lib/types'
import MainLayout from '@components/composite/layouts/MainLayout/MainLayout'
import Meta from '@components/composite/layouts/Meta/Meta'

function getLayoutElement(layoutKind: LayoutKind): LayoutComponent {
  switch (layoutKind) {
    case LayoutKind.Empty:
      return EmptyLayout
    case LayoutKind.Main:
      return MainLayout
  }
}

interface Props {
  pageMeta: PageMeta
  children: ReactElement
}

const Layout: FC<Props> = ({ pageMeta, children: pageComponent }) => {
  const LayoutElement = getLayoutElement(pageMeta.layoutKind)
  return (
    <>
      <Meta pageMeta={pageMeta} />

      <LayoutElement pageMeta={pageMeta}>{pageComponent}</LayoutElement>
    </>
  )
}

export default Layout
