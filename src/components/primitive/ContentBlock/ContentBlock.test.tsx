import { render } from '@testing-library/react'
import ContentBlock from './ContentBlock'
import {
  ariaLabelInTheDocument,
  textInTheDocument,
  textNotInTheDocument,
} from '@tests/utils'

const testText = 'Test me'
const noDataText = 'No data Found'

describe('ContentBlock', () => {
  it('loaded', async () => {
    render(
      <ContentBlock loading={false} data={[1, 2]}>
        <div>{testText}</div>
      </ContentBlock>
    )
    await textInTheDocument(testText)
    await textNotInTheDocument(noDataText)
  })

  it('no data', async () => {
    render(
      <ContentBlock loading={false} data={[]} noDataMessage={noDataText}>
        <div>{testText}</div>
      </ContentBlock>
    )
    await textInTheDocument(noDataText)
    await textNotInTheDocument(testText)
  })

  it('loading with content', async () => {
    render(
      <ContentBlock loading={true} data={[1, 2]}>
        <div>{testText}</div>
      </ContentBlock>
    )
    await textInTheDocument(testText)
  })

  it('empty loading', async () => {
    render(
      <ContentBlock loading={true} data={[]}>
        <div>{testText}</div>
      </ContentBlock>
    )
    await textNotInTheDocument(testText)
    await textNotInTheDocument(noDataText)
    await ariaLabelInTheDocument('Pre Loader')
  })
})
