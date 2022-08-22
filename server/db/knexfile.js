require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.PG_DATABASE, // process-env from dotenv
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: { directory: "./db/seeds" },
  },

  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL, // heroku add-on
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
