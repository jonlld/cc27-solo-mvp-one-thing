# One Thing

## Project Outline

## Project Setup

In `/server` and `/client`, run:

```shell
$ npm install
```

Then, set up your local database:

In psql CLI, run:

```shell
CREATE DATABASE one_thing;
```

Connect to the db; at the prompt, create a user called 'one_thing':
`CREATE USER one_thing;`

To initialise the database, run the following script from `server`:

```shell
npm run migrate-latest
```

Create `.env.local` file in `server` and populate as below:

```
PG_DATABASE = one_thing
PG_USER = one_thing
PG_PASSWORD = null
```

RUN MIGRATIONS TO BUILD TABLES
OPTIONAL: RUN SEED TO BUILD TEST DATA
