import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const {
  PORT,
  HOST_DB,
  USER_DB,
  PASS_DB,
  NAME_DB,
  CLIENT_BASE_URL,
  JWT_SEED
} = process.env;

if (!JWT_SEED) {
  throw new Error('JWT_SEED no está definido');
}

export {
  PORT,
  HOST_DB,
  USER_DB,
  PASS_DB,
  NAME_DB,
  CLIENT_BASE_URL,
  JWT_SEED
};
