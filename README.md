[Live App](http://cryptbase.herokuapp.com)

Cryptbase is a web app that allows users to buy, sell, and manage a cryptocurrency portfolio,
aiming to be a pixel-perfect clone of the popular trading app, Coinbase.
[Coinbase](https://coinbase.com/). "Blockchain is the future!"


# Technologies


## Frontend

-   Javascript
-   React + Redux
-   Chart.js
-   Webpack / npm


## Backend

-   Ruby on Rails
-   Postgresql
-   JBuilder


# Features


## Account

-   Secure login and signup using BCrypt.
-   Demo Login.
-   New users are given $100k to play around with.

<img src="app/assets/images/login.gif?raw=true" width="1000">


## Dashboard

The main dashboard page acts as the management console for the users's owned currencies and currencies on the user's watchlist.

-   6 of the user's watchlist currencies are displayed with current price and a price graph of the last 24 hours.
-   The user's wallets for each currency are listed in dollar value descending order.
-   Recent orders' time, price, and total value are displayed on the right of the dashboard.

<img src="app/assets/images/dashboard.gif?raw=true" width="1000">

## Prices

The prices section serves as an index page for all the stocks available on Cryptbase.

-   Each currency's name, logo, symbol, current price, 24hr price chang, and market cap are displayed on this page.
-   Currencies can be sorted by their information by clicking on the header row of the table.
-   Users can add and remove currencies from their watchlist with the star icon on the end of every currency's row.
-   Users can quickly buy and sell currencies by clicking the "Trade" button, which brings up a modal that allows for transactions.

<img src="app/assets/images/price_index.gif?raw=true" width="1000">

## Currency Detail Page

Each currency can be examined in more detail. Currency detail pages
contain:

-   a dynamic price graph for the last 24 hours, last week, last month, last year, or all time.
-   the user's recent orders for this currency, if any.
-   daily performance indicators.
-   a button to add or remove the currency from your watchlist.
-   a section to buy and sell, along with info on the user's current balance of the currency.
-   recent news articles and/or social media posts about the currency.

<img src="app/assets/images/price_detail.gif?raw=true" width="1000">
