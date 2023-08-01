import winston from "winston";
import config from "../../config.js";

const env = config.LOGGERS.LOGGER

export default class LoggerService {
    constructor(env) {
        this.options = {
            levels: {
                fatal: 0,
                error: 1,
                warning: 2,
                http: 3,
                info: 4,
                debug: 5
            }
        }
        this.logger = this.createLogger(env);
    }

    createLogger = (env) => {
        switch (env) {
            case "dev":
                return winston.createLogger({
                    levels: this.options.levels,
                    transports: [
                      new winston.transports.Console({ level: "debug", format: winston.format.simple() })
                    ]
                })
            case "prod":
                return winston.createLogger({
                    levels: this.options.levels,
                    transports:[
                        new winston.transports.Console({level:"info",format: winston.format.simple()}),
                        new winston.transports.File({level: "http", filename: "./errors.log", format: winston.format.simple()})
                    ]
                });
                
        }
    }
};
