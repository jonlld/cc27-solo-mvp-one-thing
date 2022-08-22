/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("things").del();
  await knex.raw("ALTER SEQUENCE things_id_seq RESTART WITH 1");

  await knex("things").insert([
    { description: "practice saxophone", user_id: 1 },
    { description: "work on hairdryer design", user_id: 2 },
    { description: "meditate", user_id: 3 },
  ]);
};
