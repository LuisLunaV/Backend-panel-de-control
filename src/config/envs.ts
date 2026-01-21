import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const {
  PORT,
  MYSQLPORT,
  MYSQLHOST,
  MYSQLDATABASE,
  MYSQLPASSWORD,
  MYSQLUSER,
  CLIENT_BASE_URL,
  JWT_SEED,
  SITIO_UNO,
  SITIO_DOS,
} = process.env;

export {
  PORT,
  MYSQLPORT,
  MYSQLHOST,
  MYSQLDATABASE,
  MYSQLPASSWORD,
  MYSQLUSER,
  CLIENT_BASE_URL,
  JWT_SEED,
  SITIO_UNO,
  SITIO_DOS,
};
