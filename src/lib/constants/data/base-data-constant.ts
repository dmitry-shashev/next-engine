type ConstantsOnlyType<ConstantType, ElementType> = Pick<
  ConstantType,
  {
    [K in keyof ConstantType]: ConstantType[K] extends ElementType ? K : never
  }[keyof ConstantType]
>

abstract class BaseDataConstant<T> {
  abstract readonly UNDEFINED: T

  public abstract getAll(): ReadonlyArray<T>

  public getByKey(key: keyof ConstantsOnlyType<typeof this, T>): T {
    if (!this[key]) {
      return this.UNDEFINED
    }
    return this[key] as unknown as T
  }

  public getByFieldValue<Key extends keyof T, Value extends T[Key]>(
    fieldName: Key,
    fieldValue: Value
  ): T {
    const allConstants = this.getAll()
    const found = allConstants.find((v) => v[fieldName] === fieldValue)
    if (!found) {
      return this.UNDEFINED
    }
    return found
  }
}

export default BaseDataConstant
