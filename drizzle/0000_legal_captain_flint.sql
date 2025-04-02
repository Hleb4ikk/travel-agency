CREATE TABLE "tours" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(128) NOT NULL,
	"description" varchar(512) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_tours" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"product_id" uuid
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(128) NOT NULL,
	"hashedPassword" varchar(128) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user_tours" ADD CONSTRAINT "user_tours_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_tours" ADD CONSTRAINT "user_tours_product_id_tours_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."tours"("id") ON DELETE no action ON UPDATE no action;