import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('class_schedule', table => {

    table.increments('id').primary();
    
    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table.integer('class_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

// roolback
export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable('class_schedule');
}