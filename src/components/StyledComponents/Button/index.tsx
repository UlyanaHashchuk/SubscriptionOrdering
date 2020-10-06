import styled, { css } from 'styled-components'

type Props = {
  filled?: boolean
}

const Button = styled.button<Props>`
  border-radius: 15px;
  background-color: #61dafb;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  width: 120px;
  height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }

  &:hover {
    background-color: #8adcf2;
  }

  &:active {
    background-color: #36a8c7;
  }

  ${({ filled }: Props) =>
    filled &&
    css`
      width: 100%;
    `}
`

export default Button
