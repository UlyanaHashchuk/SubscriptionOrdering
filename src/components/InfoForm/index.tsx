import React, { useState, useContext } from 'react'
import StepContext from '../../StepContext'
import { Text, Wrapper, Button, Emoji } from '../StyledComponents'
import { Form, Input, Label } from './index.styled'

const nameRegex = /[a-zA-Z\s-]+/g
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g

export default () => {
  const { setStep, setFormData } = useContext(StepContext)
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleNameChange = ({ target: { value } }) => setName(value)
  const handleSurnameChange = ({ target: { value } }) => setSurname(value)
  const handleEmailChange = ({ target: { value } }) => setEmail(value)

  const validateInputValue = () => {
    if (!name.match(nameRegex) || !surname.match(nameRegex)) {
      setError('wrongFormat')

      return true
    } else if (!email.match(emailRegex)) {
      setError('invalidEmail')

      return true
    }

    return false
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validateInputValue()) {
      setFormData({ name, surname, email })
      setStep(3)
    }
  }

  return (
    <Wrapper>
      <Text centered header>
        Step 3: Please fill in personal information
      </Text>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>
            <Text>Name: </Text>
            <Input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
          </Label>
          <Label>
            <Text>Surname: </Text>
            <Input
              type="text"
              value={surname}
              onChange={handleSurnameChange}
              required
            />
          </Label>
          <Label>
            <Text>Email: </Text>
            <Input
              type="text"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </Label>
        </div>
        {error === 'wrongFormat' && (
          <Text centered small>
            Wrong Name/Surname Format: Only [A-z|-] permitted
          </Text>
        )}
        {error === 'invalidEmail' && (
          <Text centered small>
            You have entered an invalid email address
          </Text>
        )}
        <Button type="submit" filled>
          Submit
        </Button>
      </Form>
      <Button onClick={() => setStep(1)}>
        <Emoji symbol="🔙" label="back" />
      </Button>
    </Wrapper>
  )
}
