import { ReactElement } from 'react'
import PageMeta from '@lib/interfaces/page/page-meta'

interface PageWithProps<T> {
  (props: T): ReactElement
  pageMeta: PageMeta
}

export default PageWithProps
