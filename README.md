# Subscription shop 💸

## How it works?

1. `First screen` is welcome screen with call to action button.

   - After first screen you will see `order progress`.

2. `Second screen` is first step in subscription ordering.

   - Here you will be able to select subscription `type`: Personal, Pro or Enterprise.

3. `Third screen` is second step in subscription ordering.

   - Here you will be able to select subscription `length`: 1, 3, 6 or 12 months each with a discount 5 % more than the previous
     one (3 months 5 %, 6 months 10 %, 12 months 15 %).
   - Go `back` button available. Will lead to `second screen`.

4. `Fourth screen` is third step in subscription ordering.

   - Here you will fill in `personal information` like `name`, `surname` and `email`.
   - To move to the next screen you need to pass the `input validation`.
   - Go `back` button available. Will lead to `third screen`.

5. `Fifth screen` is summary screen in subscription ordering. Here you will see:

   - Personal information like `name`, `surname` and `email`.
   - Subscription information like `type`, `price`, `duration`.
   - `Choose again` button to choose new subscription.

P.S. There is no credit card details as it is prototype. In real `proceed to payment` would be available after `Summary screen`.

## How to start?

1. Delete `yarn.lock` file

2. Install dependencies:

```sh
yarn
```

2. Run application

```sh
yarn start
```

Application is running on `http://localhost:3000`
