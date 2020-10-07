import React, { useState } from 'react'
import StepContext from '../../contexts/StepContext'
import GlobalStyle from './index.styled'
import ProgressBar from '../ProgressBar'
import OrderSteps from '../OrderSteps'

export default () => {
  const [step, setStep] = useState(null)
  const [subscriptionData, setSubscriptionData] = useState({
    type: '',
    price: 0,
    discountPrice: 0,
    duration: '',
  })
  const [formData, setFormData] = useState({ name: '', surname: '', email: '' })

  const contex = {
    step,
    setStep,
    subscriptionData,
    setSubscriptionData,
    formData,
    setFormData,
  }

  return (
    <>
      <GlobalStyle />
      <StepContext.Provider value={contex}>
        {step !== null && <ProgressBar step={step} />}
        <OrderSteps />
      </StepContext.Provider>
    </>
  )
}
