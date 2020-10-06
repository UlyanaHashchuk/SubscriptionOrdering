import styled from 'styled-components'
import Container from '../Container'

const Box = styled(Container)`
  background-color: #0b0d12;
  border-radius: 15px;
  flex-wrap: nowrap;
  margin: 10px;

  &:hover {
    background-color: #232a3b;
    transition: 0.2s ease-in-out;
  }
`

export default Box
