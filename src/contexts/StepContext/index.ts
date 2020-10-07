import React from 'react'

type Subscription = {
  type: string
  price: number
  discountPrice: number
  duration: string
}

type Form = {
  name: string
  surname: string
  email: string
}

type ContextProps = {
  step: any
  setStep: (step: number) => void
  subscriptionData: Subscription
  setSubscriptionData: (props) => void
  formData: Form
  setFormData: (props) => void
}

export default React.createContext<Partial<ContextProps>>({
  step: null,
  setStep: () => {},
  subscriptionData: { type: '', price: 0, discountPrice: 0, duration: '' },
  setSubscriptionData: ({
    type,
    price,
    discountPrice,
    duration,
  }: Subscription) => ({
    type,
    price,
    discountPrice,
    duration,
  }),
  formData: { name: '', surname: '', email: '' },
  setFormData: ({ name, surname, email }: Form) => ({
    name,
    surname,
    email,
  }),
})
