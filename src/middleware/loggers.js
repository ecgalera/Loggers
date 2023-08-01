import LoggerService from "../services/loggerService.js";
import config from "../../config.js";

const env = config.LOGGERS.LOGGER

const logger = new LoggerService(env);

const attachLogger = (req, res, next)=>{
    req.logger = logger.logger;
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
    next()
}

export default attachLogger;

