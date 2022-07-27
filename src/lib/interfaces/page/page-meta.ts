import PagePath from '@lib/constants/page-path'
import LayoutKind from '@lib/constants/layout-kind'

interface PageMeta {
  readonly path: PagePath
  readonly title: string
  readonly description: string
  readonly keywords: string
  readonly layoutKind: LayoutKind
}

export default PageMeta
