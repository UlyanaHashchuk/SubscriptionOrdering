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
  setStep: React.Dispatch<React.SetStateAction<number>>
  subscriptionData: Subscription
  setSubscriptionData: React.Dispatch<React.SetStateAction<Object>>
  formData: Form
  setFormData: React.Dispatch<React.SetStateAction<Object>>
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
