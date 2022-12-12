import React from 'react'
import Card from '../../Card'
import List from '../../List'

type Props = {
  connectHandler: () => void;
  altCallback: () => void;
}

const items = [
  { title: 'Automated rote responses', body: 'Lets your customers know that you’ve received their support request and are working on it' },
  { title: 'Customized situational responses', body: 'Designate auto responses to any support situation ranging from “where’s my stuff?” to “I want a refund”' },
  { title: 'Automatically tags inbox by category', body: 'Reads your inbound support emails and tags your emails with the problem category so you always know what to expect before even opening an email' },
]

const Initial = ({ connectHandler, altCallback }: Props) => {

  return (
    <Card
      logo
      title='Connect your customer support email'
      body='Allows Chad to send automated rote responses on your behalf, for instance to confirm that a customer’s missing item complaint is being evaluated.'
      buttonText='Connect Gmail account'
      altButtonText="I don't use Gmail"
      // callback={connectHandler}
      altCallback={altCallback}
    >
      <List items={items} />
    </Card>
  )
}

export default Initial