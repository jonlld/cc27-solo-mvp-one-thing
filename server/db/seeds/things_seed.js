/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("things").del();
  await knex("things").insert([{ desciption: "learn jazz", user_id: 1 }]);
  await knex("things").insert([
    { desciption: "work on hairdryer design", user_id: 2 },
  ]);
  await knex("things").insert([
    { desciption: "study calligraphy", user_id: 3 },
  ]);
};
