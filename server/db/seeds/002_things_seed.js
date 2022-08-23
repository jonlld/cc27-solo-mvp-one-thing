/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex.raw("ALTER SEQUENCE things_id_seq RESTART WITH 100");

  await knex("things").insert([
    { id: 1, description: "Play saxophone", user_id: 1 },
    { id: 2, description: "Continue work on treehouse", user_id: 2 },
    { id: 3, description: "Build lion enclosure", user_id: 3 },
    { id: 4, description: "Read Homer", user_id: 1 },
    { id: 5, description: "Practice talking to animals", user_id: 2 },
    { id: 6, description: "Meditate", user_id: 1 },
    { id: 7, description: "Learn spangly guitar riffs", user_id: 2 },
    { id: 8, description: "Build lion enclosure", user_id: 3 },
    { id: 9, description: "Read Homer", user_id: 1 },
    { id: 10, description: "Brush up on zoo accounting", user_id: 3 },
    { id: 11, description: "Continue work on treehouse", user_id: 2 },
    { id: 12, description: "Explore the forest", user_id: 3 },
    { id: 13, description: "Learn spangly guitar riffs", user_id: 2 },
    { id: 14, description: "Read Homer", user_id: 1 },
    { id: 15, description: "Build lion enclosure", user_id: 3 },
    { id: 16, description: "Continue work on treehouse", user_id: 2 },
    { id: 17, description: "Practice talking to animals", user_id: 2 },
    { id: 18, description: "Brush up on zoo accounting", user_id: 3 },
    { id: 19, description: "Continue work on treehouse", user_id: 2 },
    { id: 20, description: "Build lion enclosure", user_id: 3 },
    { id: 21, description: "Read Homer", user_id: 1 },
    { id: 22, description: "Continue work on treehouse", user_id: 2 },
    { id: 23, description: "Practice talking to animals", user_id: 2 },
    { id: 24, description: "Build lion enclosure", user_id: 3 },
    { id: 25, description: "Learn spangly guitar riffs", user_id: 2 },
    { id: 26, description: "Brush up on zoo accounting", user_id: 3 },
    { id: 27, description: "Read Homer", user_id: 1 },
    { id: 28, description: "Meditate", user_id: 1 },
    { id: 29, description: "Practice talking to animals", user_id: 2 },
    { id: 30, description: "Read Homer", user_id: 1 },
  ]);
};
