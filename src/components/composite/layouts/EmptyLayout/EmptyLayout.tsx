import React from 'react'
import { LayoutComponent } from '@lib/types'

const EmptyLayout: LayoutComponent = ({ children: pageComponent }) => {
  return (
    <div>
      <h1>Empty Layout</h1>
      {pageComponent}
    </div>
  )
}

export default EmptyLayout
