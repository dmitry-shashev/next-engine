import EngineHelper from './engine.helper'
import * as process from 'process'

describe('engine.helper', () => {
  it('isDevEnv', () => {
    const current = process.env.NODE_ENV

    process.env.NODE_ENV = 'development'
    expect(EngineHelper.isDevEnv()).toBe(true)
    process.env.NODE_ENV = 'production'
    expect(EngineHelper.isDevEnv()).toBe(false)

    // restore
    process.env.NODE_ENV = current
  })

  it('throwInDev', () => {
    const current = process.env.NODE_ENV

    process.env.NODE_ENV = 'development'
    expect(EngineHelper.throwInDev).toThrowError('')

    process.env.NODE_ENV = 'production'
    expect(EngineHelper.throwInDev).not.toThrowError('')

    // restore
    process.env.NODE_ENV = current
  })
})
