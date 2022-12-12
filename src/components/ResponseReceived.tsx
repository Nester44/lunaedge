import React from 'react'
import Card from './Card'
import checkmark from '../assets/shopCheck.png'

type Props = {}

const ResponseReceived = (props: Props) => {
  return (
    <Card
      title='Response received'
      body='Thank you for your interest in Chad! We’ll be hard at work building integrations to support your platform.'
      buttonText='Done'
      childrenOnTop={<img src={checkmark} style={{ width: '80px', margin: 'auto' }} />}
      centerText
    />
  )
}

export default ResponseReceived