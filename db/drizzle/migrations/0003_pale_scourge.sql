ALTER TABLE "admins" RENAME TO "admin";--> statement-breakpoint
ALTER TABLE "audit_histories" RENAME TO "audit_history";--> statement-breakpoint
ALTER TABLE "employees" RENAME TO "employee";--> statement-breakpoint
ALTER TABLE "items" RENAME TO "item";--> statement-breakpoint
ALTER TABLE "managers" RENAME TO "manager";--> statement-breakpoint
ALTER TABLE "users" RENAME TO "user";--> statement-breakpoint
ALTER TABLE "admin" DROP CONSTRAINT "admins_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "employee" DROP CONSTRAINT "employees_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "employee" DROP CONSTRAINT "employees_manager_id_managers_id_fk";
--> statement-breakpoint
ALTER TABLE "manager" DROP CONSTRAINT "managers_user_id_managers_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admin" ADD CONSTRAINT "admin_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "employee" ADD CONSTRAINT "employee_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "employee" ADD CONSTRAINT "employee_manager_id_manager_id_fk" FOREIGN KEY ("manager_id") REFERENCES "manager"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "manager" ADD CONSTRAINT "manager_user_id_manager_id_fk" FOREIGN KEY ("user_id") REFERENCES "manager"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
