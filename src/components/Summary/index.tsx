import React, { useContext } from 'react'
import StepContext from '../../StepContext'
import { Text, Wrapper, Emoji } from '../StyledComponents'
import { SummaryBox, StyledButton } from './index.styled'

export default () => {
  const {
    setStep,
    subscriptionData: { type, price, discountPrice, duration },
    formData: { name, surname, email },
  } = useContext(StepContext)

  return (
    <Wrapper>
      <Text header centered>
        Thank you for your order!
      </Text>
      <SummaryBox>
        <Text>
          <Text small>Full name:</Text> {name} {surname}
        </Text>
        <Text>
          <Text small>Email:</Text> {email}
        </Text>
        <Text>
          <Text small>Subscription:</Text> {type}
        </Text>
        <Text>
          <Text small>Duration:</Text> {duration}
        </Text>
        <Text>
          <Text small>Price:</Text> {discountPrice || price}{' '}
          <Emoji symbol="💸" label="dollar" />
        </Text>
      </SummaryBox>
      <StyledButton onClick={() => setStep(0)}>Choose again</StyledButton>
    </Wrapper>
  )
}
