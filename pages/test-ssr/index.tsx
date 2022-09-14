import React from 'react'
import LayoutKind from '@lib/constants/layout-kind'
import PagePath from '@lib/constants/page-path'
import PageWithProps from '@lib/interfaces/page/page-with-props'
import { GetServerSideProps } from 'next'

interface Props {
  name: string
}

const TestSsrPage: PageWithProps<Props> = ({ name }) => {
  return (
    <div>
      <h1>Test SSR data - {name}</h1>
    </div>
  )
}

// nextjs runs this function each time we navigate on this page
// it blocks returning the content till this functions is finished
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      name: 'Tester',
    },
  }
}

TestSsrPage.pageMeta = {
  title: 'Test SSR',
  description: 'Test SSR',
  keywords: '',
  layoutKind: LayoutKind.Main,
  path: PagePath.TEST_SSR,
}

export default TestSsrPage
