import styled from 'styled-components'
import { Box, Text, Button } from '../StyledComponents'

const SummaryBox = styled(Box)`
  box-sizing: border-box;
  width: 310px;
  height: 290px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-around;

  @media only screen and (max-width: 600px) {
    width: 280px;
  }

  ${Text} > ${Text} {
    padding-bottom: 5px;
  }
`

const StyledButton = styled(Button)`
  margin-top: 20px;
  width: 150px;
`

export { SummaryBox, StyledButton }
