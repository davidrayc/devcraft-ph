ALTER TABLE "audit_histories" RENAME COLUMN "manager_id" TO "item_id";--> statement-breakpoint
ALTER TABLE "audit_histories" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "audit_histories" ALTER COLUMN "item_id" SET NOT NULL;