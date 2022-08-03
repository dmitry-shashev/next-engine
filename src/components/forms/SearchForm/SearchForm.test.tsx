import { render } from '@testing-library/react'
import SearchForm from './SearchForm'
import { typeInInputByAriaLabel } from '@tests/utils'

jest.mock('use-debounce', () => {
  return {
    useDebouncedCallback: (callback: unknown, _timeout: unknown): unknown =>
      callback,
  }
})

describe('SearchForm', () => {
  it('component', async () => {
    const testText = 'Pear'
    const onSubmit = jest.fn()
    render(
      <SearchForm
        onSubmit={(data): void => onSubmit(data)}
        defaultValues={{
          search: '',
        }}
      />
    )

    expect(onSubmit).toBeCalledTimes(0)
    await typeInInputByAriaLabel('Search Input', testText)
    expect(onSubmit).toBeCalledWith({
      search: testText,
    })
  })
})
