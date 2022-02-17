# Power shop backend service

This the backend service for Power shop backend services, Follow the bellow steps to be able to run the service

## Getting started

- clone the [repo](https://github.com/PatrickNiyogitare28/power-shop-dev-challenge.git)
- navigate to backend service
- install modules using `npm install`

## Connecting to db

This service is using [Postgresql db](https://www.postgresql.org/), to be able to run the server and the tests you should have a  [Postgresql Servier](https://www.postgresql.org/) installed on your device

To connect to database successfully.
Modify the database credentials under `.env` file

- Create database named `electricity_shop_dev_db` for development
- Create database named `electricity_shop_dev_db` for staging/testing

Edit `postgres://postgres:<password>@127.0.0.1:5432/electricity_shop_dev_db` to change `<password>` with your own postgres user

> You should make sure that your postgres db user is postgres other wise use your local user

## Running migrations

Well you have now connected successfully on database now you need to run migrations
with this command

```sh
$ npm run migrate
```

Now you have successfully run the migration. Let's run our server


## Running the server

- To run for development
```sh
$ npm run start
```

or 

```sh
$ npm run start:dev
```
which runs with nodemon for auto server refresh

## Running the tests

```sh
$ npm run test
```

## Maintainer

patrickniyogitare28@gmail.com


