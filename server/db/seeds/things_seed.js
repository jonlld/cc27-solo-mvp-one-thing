/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("things").del();
  await knex("things").insert([
    { desciption: "practice saxophone", user_id: 1 },
    { desciption: "work on hairdryer design", user_id: 2 },
    { desciption: "meditate", user_id: 3 },
  ]);
};
