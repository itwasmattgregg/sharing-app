# Migration `20200808132358-migration`

This migration has been generated by Matt Gregg at 8/8/2020, 1:23:58 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE UNIQUE INDEX "quaint"."User.email" ON "User"("email")

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200808125944-migration..20200808132358-migration
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
@@ -27,7 +27,7 @@
 model User {
   id        Int      @id @default(autoincrement())
   name      String
-  email     String
+  email     String   @unique
   createdAt DateTime @default(now())
 }
```

