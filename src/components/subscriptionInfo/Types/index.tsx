import React, { useContext } from 'react'
import StepContext from '../../../contexts/StepContext'
import { OrderSteps } from '../../../constants/orderSteps'
import { Wrapper, Text, Button, Emoji } from '../../StyledComponents'
import { BoxWrapper, Box, List } from './index.styled'

const subscriptionTypes = [
  {
    type: 'Personal',
    features: ['Beginners', 'All for you'],
    price: 10,
  },
  {
    type: 'Pro',
    features: ['Advanced', 'For 2 people', 'Pro tools'],
    price: 15,
  },
  {
    type: 'Enterprise',
    features: ['Fluent', 'Up to 10 people', 'Special features', 'Just great'],
    price: 30,
  },
]

export default () => {
  const { setStep, setSubscriptionData } = useContext(StepContext)

  const handleClick = ({ type, price }) => {
    setStep(OrderSteps.subscriptionDurationSelect)
    setSubscriptionData({
      type,
      price,
    })
  }

  return (
    <Wrapper>
      <Text header centered>
        Step 1: Please select subscription type
      </Text>
      <BoxWrapper>
        {subscriptionTypes.map(({ type, features, price }) => (
          <Box key={type}>
            <Text centered header underlined>
              {type}
            </Text>
            <List>
              {features.map((item) => (
                <Text key={item}>
                  <Emoji symbol="✔️" label="check" /> {item}
                </Text>
              ))}
            </List>
            <Button filled onClick={() => handleClick({ type, price })}>
              Select | {price}
              <Emoji symbol="💸" label="dollar" />
              /mon
            </Button>
          </Box>
        ))}
      </BoxWrapper>
    </Wrapper>
  )
}
