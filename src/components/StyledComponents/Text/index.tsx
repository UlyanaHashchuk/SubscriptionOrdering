import styled, { css } from 'styled-components'

type Props = {
  centered?: boolean
  right?: boolean
  header?: boolean
  small?: boolean
  underlined?: boolean
  crossed?: boolean
}

const Text = styled.div<Props>`
  font-weight: 400;
  font-size: 16px;

  ${({ centered }: Props) =>
    centered &&
    css`
      text-align: center;
    `}

  ${({ right }: Props) =>
    right &&
    css`
      text-align: right;
    `}

  ${({ header }: Props) =>
    header &&
    css`
      font-size: 24px;
      font-weight: 500;
    `}

  ${({ small }: Props) =>
    small &&
    css`
      font-size: 14px;
      color: #71898f;
    `}

  ${({ underlined }: Props) =>
    underlined &&
    css`
      padding-bottom: 10px;
      border-bottom: 1px solid #61dafb;
    `}

  ${({ crossed }: Props) =>
    crossed &&
    css`
      text-decoration: line-through;
    `}
`

export default Text
