import {ConnectionOptions} from "typeorm";
import path from "path";

const isCompiled = path.extname(__filename).includes('js');

export default {
  type: "postgres",
  host: process.env.DB_HOST || "kandula.db.elephantsql.com",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME || "cgyybwzs",
  password: process.env.DB_PASSWORD || "dFBlc9vj2RsMghe1LHhpnsig_66AzoQJ",
  database: process.env.DB_NAME || "cgyybwzs",
  synchronize: false,
  logging: !process.env.DB_NO_LOGS,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 2000,
  migrationsTableName: "migrations",
  entities: [
    `src/entity/**/*.${isCompiled ? "js" : "ts"}`
  ],
  migrations: [
    `src/migration/**/*.${isCompiled ? "js" : "ts"}`
  ],
  cli: {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
  },
} as ConnectionOptions;
