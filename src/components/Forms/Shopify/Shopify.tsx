import React, { useState } from 'react'
import Card from '../../Card'
import List from '../../List'
import Initial from './Initial'
import Connected from './Connected'
import { BASE_URL } from '../../../shared/constants'
import Fetching from './Fetching'
import Alternative from './Alternative'
import ResponseReceived from '../../ResponseReceived'
import { IStepsState } from '../../FormContainer'


enum Windows {
  initial = 'initial',
  connected = 'connected',
  alternative = 'alternative',
  fetching = 'fetching',
  responseReceived = 'responseReceived',
}

export interface IShopifyStep {
  token: string;
  shop_name: string;
  shop_logo_url: string;
}

type ShopifyProps = {
  stepState: IShopifyStep;
  setStepState: (state: IShopifyStep) => void;
}

const Shopify = ({ stepState, setStepState }: ShopifyProps) => {
  const [currentWindow, setCurrentWindow] = useState<Windows>(Windows.initial)

  const connect = async () => {
    setCurrentWindow(Windows.fetching)
    const response = await fetch(BASE_URL + '/shopify?name=123')
    const body: IShopifyStep = await response.json()
    setStepState(body)
    setCurrentWindow(Windows.connected)
  }

  const disconnect = () => {
    setStepState({ shop_logo_url: '', shop_name: '', token: '' })
    setCurrentWindow(Windows.initial)
  }

  const setAlternativeWindow = () => setCurrentWindow(Windows.alternative)
  const setResponseReceivedWindow = () => setCurrentWindow(Windows.responseReceived)

  const getCurrentWindow = () => {
    if (stepState.shop_name) {
      return <Connected disconnectHandler={disconnect} shopName={stepState?.shop_name} shopLogo={stepState?.shop_logo_url} />
    }

    switch (currentWindow) {
      case Windows.initial:
        return <Initial connectHandler={connect} alternativeHandler={setAlternativeWindow} />
      case Windows.connected:
        return <Connected disconnectHandler={disconnect} shopName={stepState?.shop_name} shopLogo={stepState?.shop_logo_url} />
      case Windows.fetching:
        return <Fetching />
      case Windows.alternative:
        return <Alternative onSubmit={setResponseReceivedWindow} />
      case Windows.responseReceived:
        return <ResponseReceived />

      default:
        return <Initial connectHandler={connect} alternativeHandler={setAlternativeWindow} />
    }
  }


  return (
    getCurrentWindow()
  )
}

export default Shopify