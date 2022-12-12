import React from 'react'
import Card from '../../Card'
import List from '../../List'

type Props = {
  connectHandler: () => void;
  alternativeHandler: () => void;
}

const listItems = [
  { title: 'Track orders and shipping', body: 'Allow your customers to track order and shipping status on Shopify' },
  { title: 'Check inventory', body: 'Automatically check Shopify inventory when your customers ask for replacements' },
  { title: 'Process payments', body: 'Process refunds according to your Store Policy' }
]

const Initial = ({ connectHandler, alternativeHandler }: Props) => {
  return (
    <Card
      logo
      title='Connect your Shopify store'
      body='This installs the Chad widget in your Shopify store and sets it up to display information that is relevant to your customers.'
      buttonText='Connect store'
      altButtonText="I don't use Shopify"
      callback={connectHandler}
      altCallback={alternativeHandler}
    >
      <List items={listItems} />
    </Card >
  )
}

export default Initial