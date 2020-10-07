import React, { useContext, useMemo } from 'react'
import StepContext from '../../../contexts/StepContext'
import { OrderSteps } from '../../../constants/orderSteps'
import { Text, Wrapper, Button, Emoji } from '../../StyledComponents'
import InfoBox from './components/InfoBox'
import { BoxWrapper } from './index.styled'

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

  const subscriptionDurations = useMemo(
    () => [
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
    ],
    [price]
  )

  const handleSelectClick = (duration, price, discountPrice) => {
    setSubscriptionData({
      type,
      price,
      discountPrice,
      duration,
    })
    setStep(OrderSteps.userInfoForm)
  }

  return (
    <Wrapper>
      <Text header centered>
        Step 2: Please select {type} subscription duration
      </Text>
      <BoxWrapper>
        {subscriptionDurations.map((item: any) => (
          <InfoBox
            key={item.duration}
            item={item}
            handleSelectClick={handleSelectClick}
          />
        ))}
      </BoxWrapper>
      <Button onClick={() => setStep(OrderSteps.subscriptionTypeSelect)}>
        <Emoji symbol="🔙" label="back" />
      </Button>
    </Wrapper>
  )
}
