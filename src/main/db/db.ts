import log from "electron-log";
import { dbUrl, migrationEnginePath, queryEnginePath } from "./constants";
import path from "node:path";
import { PrismaClient } from "@prisma/client";
import { fork } from "node:child_process";

log.info("DB URL", dbUrl);
log.info("Qery Engine Path", queryEnginePath);

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: dbUrl,
    },
  },
  // see https://github.com/prisma/prisma/discussions/5200
  // @ts-expect-error internal prop
  __internal: {
    engine: { binaryPath: queryEnginePath },
  },
});

export const runPrismaCommand = async ({
  command,
  dbUrl,
}: {
  command: string[];
  dbUrl: string;
}): Promise<number> => {
  log.info("Migration engine path", migrationEnginePath);
  log.info("Query engine path", queryEnginePath);

  try {
    const exitCode = await new Promise((resolve) => {
      const prismaPath = path.resolve(
        __dirname,
        "..",
        "..",
        "node_modules/prisma/build/index.js",
      );
      log.info("Prisma path", prismaPath);

      const child = fork(prismaPath, command, {
        env: {
          ...process.env,
          DATABASE_URL: dbUrl,
          PRISMA_MIGRATION_ENGINE_BINARY: migrationEnginePath,
          PRISMA_QUERY_ENGINE_LIBRARY: queryEnginePath,

          // Prisma apparently needs a valid path for the format and introspection binaries, even though
          // we don't use them. So we just point them to the query engine binary. Otherwise, we get
          // prisma:  Error: ENOTDIR: not a directory, unlink '/some/path/electron-prisma-trpc-example/packed/mac-arm64/ElectronPrismaTrpcExample.app/Contents/Resources/app.asar/node_modules/@prisma/engines/prisma-fmt-darwin-arm64'
          PRISMA_FMT_BINARY: queryEnginePath,
          PRISMA_INTROSPECTION_ENGINE_BINARY: queryEnginePath,
        },
        stdio: "pipe",
      });

      child.on("message", (msg) => {
        log.info(msg);
      });

      child.on("close", (code) => {
        resolve(code);
      });

      child.stderr?.on("data", (data) => {
        log.error("prisma: ", data.toString());
      });
    });

    if (exitCode !== 0)
      throw Error(`command ${command} failed with exit code ${exitCode}`);
    return exitCode;
  } catch (e) {
    log.error(e);
    throw e;
  }
};
