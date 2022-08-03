import React from 'react'
import { LayoutComponent } from '@lib/types'

const EmptyLayout: LayoutComponent = ({ children: pageComponent }) => {
  return <div>{pageComponent}</div>
}

export default EmptyLayout
