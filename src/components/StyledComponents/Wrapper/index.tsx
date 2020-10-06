import styled from 'styled-components'
import { Text } from '../index'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  margin: 130px 5px 20px 5px;

  & > ${Text}:first-child {
    margin-bottom: 30px;
  }
`

export default Wrapper
