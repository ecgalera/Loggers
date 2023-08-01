import { Router } from "express";

const router = Router();

router.get("/", (req, res)=>{
    req.logger.fatal("Logger from Fatal")
    req.logger.error("Logger from Error")
    req.logger.warning("Logger from Warning")
    req.logger.http("Logger from http")
    req.logger.info("Logger from Info")
    req.logger.debug("Logger from Debug")
    res.sendStatus(200)
})


export default router;