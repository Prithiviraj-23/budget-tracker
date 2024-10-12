/*
  Warnings:

  - You are about to drop the column `day` on the `yearHistory` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_yearHistory" (
    "userId" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "income" REAL NOT NULL,
    "expense" REAL NOT NULL,

    PRIMARY KEY ("month", "year", "userId")
);
INSERT INTO "new_yearHistory" ("expense", "income", "month", "userId", "year") SELECT "expense", "income", "month", "userId", "year" FROM "yearHistory";
DROP TABLE "yearHistory";
ALTER TABLE "new_yearHistory" RENAME TO "yearHistory";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
