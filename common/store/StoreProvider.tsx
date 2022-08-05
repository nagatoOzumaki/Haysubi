/* eslint-disable import/no-extraneous-dependencies */

import { FC } from 'react'
import { Provider } from 'react-redux'
import { ChildrenProps } from '../types/@appTypes'
import { Store } from './Store'

const StoreProvider:FC<ChildrenProps>=({children})=>(
    <Provider store={Store}>
      {children}
    </Provider>
  )


export default StoreProvider
