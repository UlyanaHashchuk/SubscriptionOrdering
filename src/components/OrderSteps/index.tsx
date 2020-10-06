import React, { useContext } from 'react'
import StepContext from '../../StepContext'
import WelcomeScreen from '../WelcomeScreen'
import SubscriptionTypes from '../subscriptionInfo/Types'
import SubscriptionLength from '../subscriptionInfo/Length'
import InfoForm from '../InfoForm'
import Summary from '../Summary'

export default () => {
  const { step } = useContext(StepContext)

  switch (step) {
    case 0:
      return <SubscriptionTypes />
    case 1:
      return <SubscriptionLength />
    case 2:
      return <InfoForm />
    case 3:
      return <Summary />
    default:
      return <WelcomeScreen />
  }
}
