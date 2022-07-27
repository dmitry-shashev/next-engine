import { $enum } from 'ts-enum-util'

abstract class TypeHelper {
  public static getEnumValues<T extends Record<keyof T, string | number>>(
    enumKind: T
  ): Array<number | string> {
    return $enum(enumKind).getValues()
  }

  public static getEnumValuesAsNum<T extends Record<keyof T, string | number>>(
    enumKind: T
  ): Array<number> {
    return TypeHelper.getEnumValues(enumKind).map(Number)
  }
}

export default TypeHelper
