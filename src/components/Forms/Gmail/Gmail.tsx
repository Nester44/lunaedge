import React, { useState } from 'react'
import { BASE_URL } from '../../../shared/constants'
import ResponseReceived from '../../ResponseReceived';
import Alternative from './Alternative'
import Initial from './Initial'

enum Windows {
  initial = 'initial',
  alternative = 'alternative',
  responseReceived = 'responseReceived',
}

export interface IGmailState {
  token: string;
}

type GmailProps = {
  setStepState: (state: IGmailState) => void;
}

const Gmail = ({ setStepState }: GmailProps) => {
  const [currentWindow, setCurrentWindow] = useState<Windows>(Windows.initial)

  const connect = async () => {
    const response = await fetch(BASE_URL + '/google')
    const body = await response.json()
    setStepState(body)
    // setCurrentWindow(Windows.connected)
  }

  const getCurrentWindow = () => {
    switch (currentWindow) {
      case Windows.initial:
        return <Initial altCallback={() => setCurrentWindow(Windows.alternative)} connectHandler={connect} />

      case Windows.responseReceived:
        return <ResponseReceived />

      case Windows.alternative:
        return <Alternative onSubmit={() => { setCurrentWindow(Windows.responseReceived) }} />
      default:
        return <Initial altCallback={() => setCurrentWindow(Windows.alternative)} connectHandler={connect} />
    }

  }
  return (
    getCurrentWindow()
  )
}

export default Gmail