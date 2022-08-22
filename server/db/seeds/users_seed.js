/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { name: "Howard Moon", password: "generic" },
    { name: "Vince Noir", password: "goth" },
    { name: "Bob Fossil", password: "zoozoo" },
  ]);
};
