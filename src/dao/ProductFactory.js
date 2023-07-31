import mongoose from "mongoose";
import config from "../../config.js";

//const persistence = "MONGO"; // guardo la variable en una variable de entorno 
 // A partir de esa variable, definiremos que DAO tomar.

export default class PersistenceFactoryProduct {
    static async getPersistence() {
        let productDao;
        // console.log(config);

        switch (config.PERSISTENCE.Persistence) {     // tengo guardada la varialbe en una variable de entrono 
            
            case "FS":
               try {
                console.log("Sin conexión")
               } catch (error) {
                console.log(object)
                console.log("Sin conexíon")
               }
                break;

            case "MONGO":
                mongoose.connect(`${config.URL_DB.MONGO_URL}`) // url de conexión con mongo guardada en .env
                const {default: MongoDAO} = await import("../dao/mongodb/manager/productsManagers.js")
                productDao = new MongoDAO();
                break;
            }
            return productDao
    }
}