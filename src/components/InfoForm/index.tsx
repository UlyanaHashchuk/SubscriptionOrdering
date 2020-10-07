import React, { useState, useContext } from 'react'
import StepContext from '../../contexts/StepContext'
import { OrderSteps } from '../../constants/orderSteps'
import { validateName, validateEmail } from '../../utils/validations'
import { Text, Wrapper, Button, Emoji } from '../StyledComponents'
import InputField from './components/InputField'
import ErrorMessage from './components/ErrorMessage'
import { Form } from './index.styled'

export default () => {
  const { setStep, setFormData } = useContext(StepContext)
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleNameChange = ({ target: { value } }) => setName(value)
  const handleSurnameChange = ({ target: { value } }) => setSurname(value)
  const handleEmailChange = ({ target: { value } }) => setEmail(value)

  const isValidatedInputValue = () =>
    !validateName(name, surname, setError) && !validateEmail(email, setError)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isValidatedInputValue()) {
      setFormData({ name, surname, email })
      setStep(OrderSteps.orderSummary)
    }
  }

  return (
    <Wrapper>
      <Text centered header>
        Step 3: Please fill in personal information
      </Text>
      <Form onSubmit={handleSubmit}>
        <div>
          <InputField title="Name:" value={name} onChange={handleNameChange} />
          <InputField
            title="Surname:"
            value={surname}
            onChange={handleSurnameChange}
          />
          <InputField
            title="Email:"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {error && <ErrorMessage error={error} />}
        <Button type="submit" filled>
          Submit
        </Button>
      </Form>
      <Button onClick={() => setStep(OrderSteps.subscriptionDurationSelect)}>
        <Emoji symbol="🔙" label="back" />
      </Button>
    </Wrapper>
  )
}
