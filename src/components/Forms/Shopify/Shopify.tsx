import React, { useState } from 'react'
import Card from '../../Card'
import List from '../../List'
import Initial from './Initial'
import Connected from './Connected'
import { BASE_URL } from '../../../shared/constants'
import Fetching from './Fetching'


enum Windows {
  initial = 'initial',
  connected = 'connected',
  alternative = 'alternative',
  fetching = 'fetching',
}

interface IStepState {
  token: string;
  shop_name: string;
  shop_logo_url: string;
}

const Shopify = () => {
  const [currentWindow, setCurrentWindow] = useState<Windows>(Windows.initial)
  const [stepState, setStepState] = useState<IStepState>({ token: '', shop_name: '', shop_logo_url: '' })

  const connect = async () => {
    setCurrentWindow(Windows.fetching)
    const response = await fetch(BASE_URL + '/shopify?name=123')
    const body: IStepState = await response.json()
    setStepState(body)
    setCurrentWindow(Windows.connected)
  }

  const getCurrentWindow = () => {
    switch (currentWindow) {
      case Windows.initial:
        return <Initial connectHandler={connect} />
      case Windows.connected:
        return <Connected shopName={stepState?.shop_name} shopLogo={stepState?.shop_logo_url} />
      case Windows.fetching:
        return <Fetching />

      default:
        return <Initial />
    }
  }


  return (
    getCurrentWindow()
  )
}

export default Shopify