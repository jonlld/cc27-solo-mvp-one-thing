require("dotenv").config();

// KNEXFILE NOTES:
// scripts will look to the knexfile for info
// here - tells knex where the seed and migration files go
// also - database information (type, how to connect etc.)
// also - environment variables are loaded in (for local) by .env.local (dotenv package)

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.PG_DATABASE, // process-env from dotenv
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./seeds" },
  },

  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL, // heroku add-on
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
