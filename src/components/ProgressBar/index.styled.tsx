import styled from 'styled-components'
import { Container, Text } from '../StyledComponents'
import { MAX_STEP } from '../../constants/orderSteps'

type Props = {
  $step: number
}

const TopContainer = styled(Container)`
  background-color: white;
  color: #0b0d12;
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  align-items: center;
`

const ProgressContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`

const Progress = styled.div`
  background-color: #a5aeb0;
  height: 20px;
  border-radius: 20px;
`

const ActiveProgress = styled.div.attrs(({ $step }: Props) => ({
  style: {
    width: `${$step * (100 / MAX_STEP)}%`,
  },
}))<Props>`
  background-color: #61dafb;
  height: 20px;
  border-radius: 20px;
`

const Label = styled(Container)`
  width: 100%;
  margin-top: 10px;
  flex-wrap: nowrap;

  ${Text} {
    flex: 1 1 25%;
  }

  ${Text}:nth-child(2) {
    transform: translate(-18%);
  }

  ${Text}:nth-child(3) {
    transform: translate(16%);
  }
`

export { TopContainer, ProgressContainer, Progress, ActiveProgress, Label }
