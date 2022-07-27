import React, { FC } from 'react'
import 'reset-css'
import '@styles/default.scss'
import '@styles/common.scss'
import { Provider } from 'react-redux'
import { store } from '@store/store'
import Layout from '@components/composite/layouts/Layout'
import { AppPropsEngine } from '@lib/types'
import EMPTY_PAGE_META from '@lib/constants/empty-page-meta'

const AppPage: FC<AppPropsEngine> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout pageMeta={Component.pageMeta ?? EMPTY_PAGE_META}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default AppPage
