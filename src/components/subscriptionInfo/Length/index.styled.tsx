import styled from 'styled-components'
import { Box as box, Container } from '../../StyledComponents'

const Box = styled(box)`
  width: 200px;
  height: auto;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`

const BoxWrapper = styled(Container)`
  justify-content: space-around;
  width: 80%;
  margin-bottom: 30px;
`

const PriceField = styled(Container)`
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 20px 0px;
`

export { Box, BoxWrapper, PriceField }
