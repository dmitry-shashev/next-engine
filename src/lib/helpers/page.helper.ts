import StrHelper from '@lib/helpers/str.helper'
import PagePath from '@lib/constants/page-path'

abstract class PageHelper {
  public static buildUrl(path: PagePath, id?: string | number): string {
    if (!id) {
      return path
    }
    return path.replace('[id]', StrHelper.base64Encode(String(id)))
  }
}

export default PageHelper
