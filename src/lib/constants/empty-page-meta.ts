import PageMeta from '@lib/interfaces/page/page-meta'
import LayoutKind from '@lib/constants/layout-kind'
import PagePath from '@lib/constants/page-path'

const EMPTY_PAGE_META: PageMeta = {
  title: '',
  description: '',
  keywords: '',
  path: PagePath.CATALOG,
  layoutKind: LayoutKind.Empty,
}

export default EMPTY_PAGE_META
