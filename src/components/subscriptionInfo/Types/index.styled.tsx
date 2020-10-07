import styled from 'styled-components'
import { Container, Box as box, Text } from '../../StyledComponents'

const BoxWrapper = styled(Container)`
  justify-content: space-around;
  width: 80%;
`

const Box = styled(box)`
  width: 270px;
  height: 340px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
`

const List = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  ${Text} {
    margin-bottom: 25px;
    font-size: 18px;
  }

  ${Text}:last-child {
    margin-bottom: 0px;
  }
`

export { BoxWrapper, Box, List }
