/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes tables in order of relationship (foreign keys first)
  await knex("things").del();
  await knex("users").del();
};
