/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("things", function (table) {
    table.increments("id").primary(); // primary key, serial
    table.string("description", 32).notNullable();
    table.dateTime("checked_in").notNullable().defaultTo(knex.fn.now()); // auto-generate date
    table.boolean("archived").notNullable();
    table.foreign("user_id").references("users.id"); // foreign key
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("things");
};
