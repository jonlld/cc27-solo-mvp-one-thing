/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { name: "Howard", password: "generic" },
    { name: "Vince", password: "goth" },
    { name: "Bob", password: "zoo" },
  ]);
};
