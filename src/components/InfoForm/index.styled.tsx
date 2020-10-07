import styled, { css } from 'styled-components'

const displayColumn = css`
  display: flex;
  flex-direction: column;
`

const Form = styled.form`
  background-color: #0b0d12;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 30px;
  width: 350px;
  height: 400px;
  justify-content: space-between;

  ${displayColumn}

  @media only screen and (max-width: 600px) {
    width: 270px;
  }
`

const Input = styled.input`
  outline: none;
  margin-top: 10px;
  width: 90%;
  height: 20px;
`

const Label = styled.label`
  align-items: center;
  margin-top: 10px;

  ${displayColumn}
`

export { Form, Input, Label }
