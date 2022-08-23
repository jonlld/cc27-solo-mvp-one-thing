/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex.raw("ALTER SEQUENCE things_id_seq RESTART WITH 100");

  await knex("things").insert([
    { id: 1, description: "practice saxophone", user_id: 1 },
    { id: 2, description: "work on hairdryer design", user_id: 2 },
    { id: 3, description: "meditate", user_id: 3 },
  ]);
};
