# One Thing

## Project Outline

## Project Setup

In `/server` and `/client`, run

```shell
$ npm install
```

Then, set up your local database.

In psql CLI, run:

```shell
CREATE DATABASE onething;
```

In `server/db`, run

```shell
knex migrate:latest
```

Create `.env.local` file in `server/db`. Write information below.

```
DB_USER=YOUR PSQL USERNAME
DB_PASSWORD=YOUR PSQL PASSWORD
DB_NAME=kanjify
```

After installing those libraries, you should be able to run the app.
In `/client` and `/server`, run:

```shell
$ npm start
```
