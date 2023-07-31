import mongoose from "mongoose";
import config from "../../config.js";

//const persistence = "MONGO"; // guardo la variable en una variable de entorno 

// A partir de esa variable, definiremos que DAO tomar.

export default class PersistenceFactoryUsers{
    static async getPersistence() {
        let usersDAO;
        // console.log(config);

        switch (config.PERSISTENCE.Persistence) {     // tengo guardada la varialbe en una variable de entrono 

            case "FS":
                // Importo el archivo solo cuando lo necesite 
                break;

            case "MONGO":
                mongoose.connect(`${config.URL_DB.MONGO_URL}`) // url de conexión con mongo guardada en .env
                const {default: MongoDAO} = await import("./mongodb/manager/userManager.js")
                usersDAO = new MongoDAO();
                break;
            }
            return usersDAO
    }
}