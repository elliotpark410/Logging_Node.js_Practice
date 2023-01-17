import winston from "winston";
import * as dotenv from 'dotenv'
dotenv.config()


/*
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};
*/

/* Examples of good loggging messages:
Failed to open file 'abc.pdf': no such file or directory
Cache hit for image '59AIGo0TMgo'
Transaction 3628122 failed: cc number is invalid
*/

const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  level: "info || error",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.colorize({ all: true }),
    winston.format.align(),
  ),
  transports: [
    new winston.transports.File({
      filename: 'combined.log',
    }),
    new winston.transports.File({
      filename: 'app-error.log',
      level: 'error',
    }),
  ],
})

logger.info('Info message');
logger.error('Error message');










