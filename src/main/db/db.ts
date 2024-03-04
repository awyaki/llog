import path from "path";
import { PrismaClient } from "@prisma/client";

const dbPath = path.resolve(__dirname, "dev.db").replace("/app.asar", "");
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "file:".concat(dbPath),
    },
  },
});
