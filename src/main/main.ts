import fs from "node:fs";
import path from "path";
import { app, BrowserWindow, shell } from "electron";
import log from "electron-log";
import { useDBQueryOnClient } from "./db";
import { prisma, runPrismaCommand } from "./db/db";

import { useMarkdownToHTML } from "./useMarkdownToHTML";
import { dbUrl, dbPath, type Migration, latestMigration } from "./db/constants";

useDBQueryOnClient();
useMarkdownToHTML();

const handleURLOpen = (e: Electron.Event, url: string) => {
  e.preventDefault();
  shell.openExternal(url);
};

const createWindow = async () => {
  // 必要があればデータベースのマイグレーションを行う
  let needsMigration;
  const dbExists = fs.existsSync(dbPath);
  if (!dbExists) {
    needsMigration = true;
    fs.closeSync(fs.openSync(dbPath, "w"));
  } else {
    try {
      const latest: Migration[] =
        await prisma.$queryRaw`select * from _prisma_migrations order by finished_at`;
      needsMigration =
        latest[latest.length - 1]?.migration_name !== latestMigration;
    } catch (e) {
      log.error(e);
      needsMigration = true;
    }
  }

  if (needsMigration) {
    try {
      const schemaPath = path.join(
        app.getAppPath().replace("app.asar", "app.asar.unpacked"),
        "prisma",
        "schema.prisma",
      );
      log.info("Schema path", schemaPath);
      await runPrismaCommand({
        command: ["migrate", "deploy", "--schema", schemaPath],
        dbUrl,
      });
      log.info("Migration done.");
    } catch (e) {
      log.error(e);
      process.exit(1);
    }
  } else {
    log.info("Does not need migration");
  }

  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, "../preload/preload.js"),
      sandbox: true,
    },
  });

  win.loadFile(path.resolve(__dirname, "../renderer/index.html"));
  // win.webContents.openDevTools();

  win.webContents.on("will-navigate", handleURLOpen);
  win.webContents.on("new-window", handleURLOpen);
};

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
