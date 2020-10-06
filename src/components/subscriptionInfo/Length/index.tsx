import React, { useContext } from 'react'
import StepContext from '../../../StepContext'
import { Text, Wrapper, Button, Emoji } from '../../StyledComponents'
import { Box, BoxWrapper, PriceField } from './index.styled'

const newDiscountPrice = (price, percentage) => {
  const discount = (price * percentage) / 100
  const newPrice = price - discount

  return newPrice
}

export default () => {
  const {
    setStep,
    setSubscriptionData,
    subscriptionData: { price, type },
  } = useContext(StepContext)

  const threeMonthesPrice = price * 3
  const sixMonthesPrice = price * 6
  const perYearPrice = price * 12

  const subscriptionDuration = [
    {
      duration: '1 month',
      price,
    },
    {
      duration: '3 monthes',
      price,
      fullPrice: threeMonthesPrice,
      discountPrice: newDiscountPrice(threeMonthesPrice, 5),
    },
    {
      duration: '6 monthes',
      price,
      fullPrice: sixMonthesPrice,
      discountPrice: newDiscountPrice(sixMonthesPrice, 10),
    },
    {
      duration: '1 year',
      price,
      fullPrice: perYearPrice,
      discountPrice: newDiscountPrice(perYearPrice, 15),
    },
  ]

  const handleSelectClick = (duration, price, discountPrice) => {
    setSubscriptionData({
      type,
      price,
      discountPrice,
      duration,
    })
    setStep(2)
  }

  return (
    <Wrapper>
      <Text header centered>
        Step 2: Please select {type} subscription duration
      </Text>
      <BoxWrapper>
        {subscriptionDuration.map(
          ({ duration, price, fullPrice, discountPrice }, index) => (
            <Box key={index}>
              <Text header centered underlined>
                {duration}
              </Text>
              <PriceField>
                <Text
                  crossed={!!discountPrice}
                  centered
                  header={!discountPrice}
                >
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
                onClick={() =>
                  handleSelectClick(duration, price, discountPrice)
                }
              >
                Select
              </Button>
            </Box>
          )
        )}
      </BoxWrapper>
      <Button onClick={() => setStep(0)}>
        <Emoji symbol="🔙" label="back" />
      </Button>
    </Wrapper>
  )
}
