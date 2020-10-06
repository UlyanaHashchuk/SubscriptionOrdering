import React from 'react'
import { Text } from '../StyledComponents'
import {
  TopContainer,
  ProgressContainer,
  Progress,
  ActiveProgress,
  Label,
} from './index.styled'

export default ({ step }) => (
  <TopContainer>
    <ProgressContainer>
      <Progress>
        <ActiveProgress $step={step} />
      </Progress>
      <Label>
        <Text>Step 1</Text>
        <Text centered>Step 2</Text>
        <Text centered>Step 3</Text>
        <Text right>Summary</Text>
      </Label>
    </ProgressContainer>
  </TopContainer>
)
