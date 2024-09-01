import { pgTable, text, varchar, timestamp, pgEnum, doublePrecision, uuid } from 'drizzle-orm/pg-core';
import { v4 as uuidv4 } from 'uuid';

export const trade_type_enum = pgEnum('trade_type', ['BUY', 'SELL']);

export const Users = pgTable('users', {
  id: uuid('id').primaryKey().default(uuidv4),
  name: varchar('name').notNull(),
  email: varchar('email').unique().notNull(),
  password: text('password').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow()
});


export const Trades = pgTable('trades', {
  id: uuid('id').primaryKey().default(uuidv4),
  user_id: varchar('user_id').notNull(),
  identifier: varchar('identifier'),
  account: varchar('account').notNull(),
  type: trade_type_enum('type').notNull(),
  symbol: varchar('symbol', { length: 255 }).notNull(),
  open_volume: doublePrecision('volume').notNull(),
  open_price: doublePrecision('open_price'),
  close_price: doublePrecision('close_price'),
  sl: doublePrecision('sl'),
  tp: doublePrecision('tp'),
  open_at: timestamp('open_at'),
  closed_at: timestamp('closed_at'),
  note: text('note'),
  images: timestamp('images'),
  created_at: timestamp('created_at').notNull().defaultNow(),
});


export const Events = pgTable('events', {
  id: uuid('id').primaryKey().default(uuidv4),
  trade_id: varchar("trade_id"),
  event: varchar('event').notNull(),
  volume: doublePrecision('volume'),
  price: doublePrecision('price'),
  sl: doublePrecision('sl'),
  tp: doublePrecision('tp'),
  done_at:  timestamp('done_at'),
  note: text('note'),
  images: varchar('images'),
  created_at: timestamp('created_at').notNull().defaultNow(),
});
