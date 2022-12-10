import React from 'react'
import Card from '../../Card'
import List from '../../List'

const Shopify = () => {
  const listItems = [
    { title: 'Track orders and shipping', body: 'Allow your customers to track order and shipping status on Shopify' },
    { title: 'Check inventory', body: 'Automatically check Shopify inventory when your customers ask for replacements' },
    { title: 'Process payments', body: 'Process refunds according to your Store Policy' }
  ]
  return (
    <Card
      logo
      title='Connect your Shopify store'
      body='This installs the Chad widget in your Shopify store and sets it up to display information that is relevant to your customers.'
      buttonText='Connect store'
      altButtonText="I don't use Shopify"
    >
      <List items={listItems} />
    </Card >
  )
}

export default Shopify