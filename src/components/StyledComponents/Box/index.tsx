import styled from 'styled-components'
import Container from '../Container'

const Box = styled(Container)`
  background-color: #0b0d12;
  border-radius: 15px;
  flex-wrap: nowrap;
  margin: 10px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #232a3b;
  }
`

export default Box
