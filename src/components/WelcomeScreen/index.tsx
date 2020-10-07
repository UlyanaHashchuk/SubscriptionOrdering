import React, { useContext } from 'react'
import StepContext from '../../contexts/StepContext'
import { OrderSteps } from '../../constants/orderSteps'
import { Text, Button, Emoji } from '../StyledComponents'
import { Box, Component, Container } from './index.styled'

export default () => {
  const { setStep } = useContext(StepContext)

  return (
    <Component>
      <Box>
        <Container>
          <Text header>
            Welcome <Emoji symbol="✌️" />
          </Text>
          <Text small>Lets the shopping begin</Text>
        </Container>
        <Button onClick={() => setStep(OrderSteps.subscriptionTypeSelect)}>
          Lets start
        </Button>
      </Box>
    </Component>
  )
}
