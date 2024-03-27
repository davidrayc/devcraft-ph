ALTER TABLE "audit_history" RENAME TO "audit-history";--> statement-breakpoint
ALTER TABLE "admin" RENAME COLUMN "user_id" TO "userId";--> statement-breakpoint
ALTER TABLE "employee" RENAME COLUMN "user_id" TO "userId";--> statement-breakpoint
ALTER TABLE "employee" RENAME COLUMN "manager_id" TO "managerId";--> statement-breakpoint
ALTER TABLE "manager" RENAME COLUMN "user_id" TO "userId";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "last_name" TO "employeeId";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "employee_id" TO "firstName";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "first_name" TO "lastName";--> statement-breakpoint
ALTER TABLE "audit-history" RENAME COLUMN "item_id" TO "userId";--> statement-breakpoint
ALTER TABLE "audit-history" RENAME COLUMN "user_id" TO "itemId";--> statement-breakpoint
ALTER TABLE "admin" DROP CONSTRAINT "admin_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "employee" DROP CONSTRAINT "employee_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "employee" DROP CONSTRAINT "employee_manager_id_manager_id_fk";
--> statement-breakpoint
ALTER TABLE "manager" DROP CONSTRAINT "manager_user_id_manager_id_fk";
--> statement-breakpoint
ALTER TABLE "item" ALTER COLUMN "quantity" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "item" ALTER COLUMN "description" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "employeeId" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "lastName" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "audit-history" ALTER COLUMN "userId" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "audit-history" ALTER COLUMN "itemId" SET DATA TYPE integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admin" ADD CONSTRAINT "admin_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "employee" ADD CONSTRAINT "employee_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "employee" ADD CONSTRAINT "employee_managerId_manager_id_fk" FOREIGN KEY ("managerId") REFERENCES "manager"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "manager" ADD CONSTRAINT "manager_userId_manager_id_fk" FOREIGN KEY ("userId") REFERENCES "manager"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
