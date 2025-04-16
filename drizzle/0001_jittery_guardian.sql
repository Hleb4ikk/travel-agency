CREATE TABLE "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"tag" varchar(128) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tour_tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"tour_id" uuid,
	"tag_id" serial NOT NULL
);
--> statement-breakpoint
ALTER TABLE "tour_tags" ADD CONSTRAINT "tour_tags_tour_id_tours_id_fk" FOREIGN KEY ("tour_id") REFERENCES "public"."tours"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tour_tags" ADD CONSTRAINT "tour_tags_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE no action ON UPDATE no action;