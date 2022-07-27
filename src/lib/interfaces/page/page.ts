import { ReactElement } from 'react'
import PageMeta from './page-meta'

interface Page {
  (): ReactElement
  pageMeta: PageMeta
}

export default Page
