import React, { useContext } from 'react'
import StepContext from '../../contexts/StepContext'
import { OrderSteps } from '../../constants/orderSteps'
import WelcomeScreen from '../WelcomeScreen'
import SubscriptionTypes from '../subscriptionInfo/Types'
import SubscriptionLength from '../subscriptionInfo/Length'
import InfoForm from '../InfoForm'
import Summary from '../Summary'

export default () => {
  const { step } = useContext(StepContext)

  switch (step) {
    case OrderSteps.subscriptionTypeSelect:
      return <SubscriptionTypes />
    case OrderSteps.subscriptionDurationSelect:
      return <SubscriptionLength />
    case OrderSteps.userInfoForm:
      return <InfoForm />
    case OrderSteps.orderSummary:
      return <Summary />
    default:
      return <WelcomeScreen />
  }
}
