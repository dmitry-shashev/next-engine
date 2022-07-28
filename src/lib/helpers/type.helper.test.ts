import TypeHelper from './type.helper'

enum TestEnum {
  One = 12,
  Two = 144,
  Seven = '7',
}

describe('type.helper', () => {
  it('getEnumValues', () => {
    expect(TypeHelper.getEnumValues(TestEnum)).toEqual([
      TestEnum.One,
      TestEnum.Two,
      TestEnum.Seven,
    ])
  })

  it('getEnumValuesAsNum', () => {
    expect(TypeHelper.getEnumValuesAsNum(TestEnum)).toEqual([
      TestEnum.One,
      TestEnum.Two,
      Number(TestEnum.Seven),
    ])
  })
})
