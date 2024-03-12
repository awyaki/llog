import path from "node:path";
import { app } from "electron";
import { PrismaClient } from "@prisma/client";

const dbUrl = app.isPackaged
  ? `file:${path.join(app.getPath("userData"), "llog.db")}`
  : "file:./dev.db";

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: dbUrl,
    },
  },
});
