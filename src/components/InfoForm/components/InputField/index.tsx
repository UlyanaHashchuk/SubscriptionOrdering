import React from 'react'
import { Text } from '../../../StyledComponents'
import { Input, Label } from '../../index.styled'

export default ({ title, value, onChange }) => (
  <Label>
    <Text>{title}</Text>
    <Input type="text" value={value} onChange={onChange} required />
  </Label>
)
