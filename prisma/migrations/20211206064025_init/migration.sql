-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Block" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "unitNumber" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "commitedAt" DATETIME,
    "contentId" INTEGER NOT NULL,
    CONSTRAINT "Block_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Block" ("commitedAt", "contentId", "createdAt", "id", "unitNumber") SELECT "commitedAt", "contentId", "createdAt", "id", "unitNumber" FROM "Block";
DROP TABLE "Block";
ALTER TABLE "new_Block" RENAME TO "Block";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
