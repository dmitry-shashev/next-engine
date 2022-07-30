import cloneDeep from 'lodash/fp/cloneDeep'

abstract class ObjHelper {
  public static cloneDeep<T>(obj: T): T {
    return cloneDeep(obj)
  }
}

export default ObjHelper
