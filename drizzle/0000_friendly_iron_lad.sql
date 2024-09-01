DO $$ BEGIN
 CREATE TYPE "public"."trade_type" AS ENUM('BUY', 'SELL');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "events" (
	"id" uuid PRIMARY KEY NOT NULL,
	"trade_id" varchar,
	"event" varchar NOT NULL,
	"volume" double precision,
	"price" double precision,
	"sl" double precision,
	"tp" double precision,
	"done_at" timestamp,
	"note" text,
	"images" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trades" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" varchar NOT NULL,
	"identifier" varchar,
	"account" varchar NOT NULL,
	"type" "trade_type" NOT NULL,
	"symbol" varchar(255) NOT NULL,
	"volume" double precision NOT NULL,
	"open_price" double precision,
	"close_price" double precision,
	"sl" double precision,
	"tp" double precision,
	"open_at" timestamp,
	"closed_at" timestamp,
	"note" text,
	"images" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
