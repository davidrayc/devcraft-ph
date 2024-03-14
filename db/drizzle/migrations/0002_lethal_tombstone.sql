ALTER TABLE "admins" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "employees" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ALTER COLUMN "code" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "managers" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "employee_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "first_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" SET NOT NULL;