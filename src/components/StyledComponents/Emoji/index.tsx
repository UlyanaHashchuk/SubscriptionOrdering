import React from 'react'

export default ({ label = '', symbol }) => (
  <span role="img" aria-label={label}>
    {symbol}
  </span>
)
