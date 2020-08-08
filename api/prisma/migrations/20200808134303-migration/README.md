# Migration `20200808134303-migration`

This migration has been generated by Matt Gregg at 8/8/2020, 1:43:03 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Item" (
"description" TEXT NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"title" TEXT NOT NULL  ,"visible" BOOLEAN NOT NULL  )

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200808132358-migration..20200808134303-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -30,4 +30,11 @@
   name      String
   email     String   @unique
   createdAt DateTime @default(now())
 }
+
+model Item {
+  id          Int     @id @default(autoincrement())
+  title       String
+  description String
+  visible     Boolean
+}
```

