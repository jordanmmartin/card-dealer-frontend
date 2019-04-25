# Card Dealer

Card Dealer is a single page web app that displays 5 random cards from a standard 52 card deck.

## Screenshots

![image](https://user-images.githubusercontent.com/41978173/56751353-db421b80-6753-11e9-9a38-840b22a6f251.png)
![image](https://user-images.githubusercontent.com/41978173/56748720-54d70b00-674e-11e9-841f-9b70f23952d8.png)


## Built with

- Javascript
- React
- Rails
- Custom CSS

## Installation

### Requirements

- Node 10.15.3 or higher
- Ruby 2.4.5 or higher
- PostgreSQL 2.1.5 or higher

This is the frontend, the backend can be found [here](https://github.com/jordanmmartin/card-dealer-backend).

### Backend

Make sure to start up the backend first as the frontend depends on the backend being hosted locally at http://localhost:3000.

OS X & Linux:

```sh
git clone https://github.com/jordanmmartin/card-dealer-backend.git
cd card-dealer-backend
bundle install
rails db:create
rails db:migrate
rails s
```

### Frontend

Use the package manager [npm](https://www.npmjs.com/get-npm) to install Card Dealer Frontend.

OS X & Linux:

```sh
git clone https://github.com/jordanmmartin/card-dealer-frontend.git
cd card-dealer-frontend
npm install
npm start
```

## Contributing

1. Fork it (<https://github.com/jordanmmartin/card-dealer-frontend/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
