import { createLogger, format, transports } from 'winston'

const consoleTransport = new transports.Console({
  colorize: true,
  json: true,
})

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [consoleTransport],
  exitOnError: false,
})

logger.stream = {
  write: (message, encoding) => {
    logger.info(message)
  },
}

export default logger
