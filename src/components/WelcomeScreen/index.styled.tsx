import styled from 'styled-components'
import { Box as box, Container as container, Text } from '../StyledComponents'

const Box = styled(box)`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  width: 300px;
  height: 180px;
`
const Component = styled(container)`
  height: 100%;
  align-items: center;
`

const Container = styled(container)`
  flex-direction: column;
  align-items: center;

  ${Text}:first-child {
    margin-bottom: 10px;
  }
`

export { Box, Component, Container }
