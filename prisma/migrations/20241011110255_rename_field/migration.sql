/*
  Warnings:

  - You are about to drop the column `expence` on the `yearHistory` table. All the data in the column will be lost.
  - Added the required column `expense` to the `yearHistory` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_yearHistory" (
    "userId" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "income" REAL NOT NULL,
    "expense" REAL NOT NULL,

    PRIMARY KEY ("month", "year", "userId")
);
INSERT INTO "new_yearHistory" ("day", "income", "month", "userId", "year") SELECT "day", "income", "month", "userId", "year" FROM "yearHistory";
DROP TABLE "yearHistory";
ALTER TABLE "new_yearHistory" RENAME TO "yearHistory";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
