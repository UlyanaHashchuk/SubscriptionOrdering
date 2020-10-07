import React from 'react'
import { Text } from '../../../StyledComponents'

const errors = {
  wrongFormat: 'Wrong Name/Surname Format: Only [A-z|-] permitted',
  invalidEmail: 'You have entered an invalid email address',
}

export default ({ error }) => {
  const errorMessage = errors[error]

  return (
    <Text centered small>
      {errorMessage}
    </Text>
  )
}
