# Migration `20200818102136-migration`

This migration has been generated by Matt Gregg at 8/18/2020, 10:21:36 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_Item" (
"borrowedAt" DATE   ,"borrowerId" INTEGER   ,"checkedOut" BOOLEAN NOT NULL DEFAULT false ,"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,"description" TEXT NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"ownerId" INTEGER NOT NULL  ,"title" TEXT NOT NULL  ,"visible" BOOLEAN NOT NULL DEFAULT true ,FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY ("borrowerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE)

INSERT INTO "quaint"."new_Item" ("borrowerId", "createdAt", "description", "id", "ownerId", "title", "visible") SELECT "borrowerId", "createdAt", "description", "id", "ownerId", "title", "visible" FROM "quaint"."Item"

PRAGMA foreign_keys=off;
DROP TABLE "quaint"."Item";;
PRAGMA foreign_keys=on

ALTER TABLE "quaint"."new_Item" RENAME TO "Item";

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200813103531-migration..20200818102136-migration
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
@@ -25,14 +25,16 @@
   itemsBorrowed Item[]   @relation("ItemsBorrowed")
 }
 model Item {
-  id          Int      @id @default(autoincrement())
+  id          Int       @id @default(autoincrement())
   title       String
   description String
-  visible     Boolean  @default(true)
-  createdAt   DateTime @default(now())
-  owner       User     @relation("ItemsOwned", fields: [ownerId], references: [id])
+  visible     Boolean   @default(true)
+  createdAt   DateTime  @default(now())
+  borrowedAt  DateTime?
+  checkedOut  Boolean   @default(false)
+  owner       User      @relation("ItemsOwned", fields: [ownerId], references: [id])
   ownerId     Int
-  borrower    User?    @relation("ItemsBorrowed", fields: [borrowerId], references: [id])
+  borrower    User?     @relation("ItemsBorrowed", fields: [borrowerId], references: [id])
   borrowerId  Int?
 }
```


