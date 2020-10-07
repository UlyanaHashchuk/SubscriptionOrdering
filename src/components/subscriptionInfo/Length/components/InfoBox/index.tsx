import React from 'react'
import { Text, Button, Emoji } from '../../../../StyledComponents'
import { Box, PriceField } from '../../index.styled'

export default ({
  item: { duration, price, fullPrice, discountPrice },
  handleSelectClick,
}) => (
  <Box>
    <Text header centered underlined>
      {duration}
    </Text>
    <PriceField>
      <Text crossed={!!discountPrice} centered header={!discountPrice}>
        {fullPrice || price}
        <Emoji symbol="💸" label="dollar" />
      </Text>
      {discountPrice && (
        <Text centered header>
          {discountPrice}
          <Emoji symbol="💸" label="dollar" />
        </Text>
      )}
    </PriceField>
    <Button
      filled
      onClick={() => handleSelectClick(duration, price, discountPrice)}
    >
      Select
    </Button>
  </Box>
)
