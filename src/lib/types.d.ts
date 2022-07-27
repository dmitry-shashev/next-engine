import { ReactElement } from 'react'
import { AppProps } from 'next/app'
import Page from './interfaces/page/page'
import PageMeta from '@lib/interfaces/page/page-meta'

type AppPropsEngine = AppProps & { Component: Page }

type LayoutComponent = ({
  children,
  pageMeta,
}: {
  children: ReactElement
  pageMeta: PageMeta
}) => ReactElement
