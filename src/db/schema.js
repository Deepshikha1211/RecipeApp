import {pgTable, serial, text, integer, timestamp} from 'drizzle-orm/pg-core'; //drizzle-orm is used for database schema definition and communating with PostgreSQL database and drizzle-kit is used for migration from loal database to PostgreSQL database

export const favoritesTable = pgTable('favorites', {
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull(),
    recipeId: integer('recipe_id').notNull(),
    title: text('title').notNull(),
    image: text('image').notNull(),
    cookTime: text('cook_time'),
    servings: text('servings'),
    createdAt: timestamp('created_at').defaultNow(),
})