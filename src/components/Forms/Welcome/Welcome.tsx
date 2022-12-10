import Card from '../../Card'
import List from '../../List'

const Welcome = () => {
  const listItems = [
    { title: 'Track orders and shipping', body: 'Global coverage with 600+ couriers supported' },
    { title: 'Reply from anywhere', body: 'Respond to your customers via email or Chad chat—it’s all saved in the same thread' },
    { title: 'Categorical inbox tags', body: 'Tags your emails by category so you know what to expect before even opening an email' }
  ]
  return (
    <Card
      logo
      title='Connect your Shopify store'
      body='Installs the Chad widget in your Shopify store and sets it up to display your customers’ order information and self-serve options.'
      buttonText='Connect store'
      altButtonText="I don't use Shopify"
    >
      <List items={listItems} />
    </Card >
  )
}

export default Welcome