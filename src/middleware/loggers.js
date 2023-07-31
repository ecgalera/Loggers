import LoggerService from "../services/loggerService.js";

const logger = new LoggerService("prod");

const attachLogger = (req, res, next)=>{
    req.logger = logger.logger;
    // console.log(req.logger);
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
    next()
}

export default attachLogger;