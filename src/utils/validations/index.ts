import { nameRegex, emailRegex } from '../../constants/validations'

export const validateName = (name, surname, setError) => {
  if (!name.match(nameRegex) || !surname.match(nameRegex)) {
    setError('wrongFormat')

    return true
  }

  return false
}

export const validateEmail = (email, setError) => {
  if (!email.match(emailRegex)) {
    setError('invalidEmail')

    return true
  }

  return false
}
