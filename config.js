import dotenv from "dotenv";

dotenv.config()

export default {
    app:{
        PORT:process.env.PORT || 8080
    },
    URL_DB:{
        MONGO_URL: process.env.URL_MONGO 
    },
    PERSISTENCE:{
        Persistence: process.env.PERSISTENCE
    }
}