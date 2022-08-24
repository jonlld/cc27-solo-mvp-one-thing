# One | Thing

## Project Outline

Solo-MVP project for Code Chrysalis Immersive - a simple full-stack app to help users build consistent, meaningful habits.

Tech-stack:
Front - React.js, HTML, CSS
Back - Node.js, Express, PostgreSQL, Knex

## Project Setup

In `/server` and `/client`, run:
`$ npm install`

Then, set up your local database:

In psql CLI, run:
`CREATE DATABASE one_thing;`

Connect to the db; at the prompt, create a user called 'one_thing':
`CREATE USER one_thing;`

To initialise the database, run the following script from `server`:
`npm run migrate-latest`

Finally, create `.env` file in `server` and populate as below:

```
PG_DATABASE = one_thing
PG_USER = one_thing
PG_PASSWORD = null
```
