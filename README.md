# Loggers

Se implemeto una estrategia de LOGGERS MULTIENTORNO, en .env se podra elegir por produción: "pord" o por desarrollo: "dev".

Para la implementación se definieron los siguientes niveles: 

 levels: {
                fatal: 0,
                error: 1,
                warning: 2,
                http: 3,
                info: 4,
                debug: 5
            }

y los transportes son: - Consola para "dev",  
                      - File y Consola para "prod" 


En el caso de "dev": los loggers se muestran en consola hasta el nivel "debug" para la muestra en Consola.

En el caso de "prod": los loggers se muestan en consola hasta el nivel "info" y se guardan en FILE hasta el nivel "http" en el archivo errors.log.

Para verificar el funcionamiento utilizamos: GET localhost:3000/logger

Muestra en el caso de "dev":
fatal: Logger from Fatal
error: Logger from Error
warning: Logger from Warning
http: Logger from http
info: Logger from Info
debug: Logger from Debug

Muestra en el caso de "Prod": 
fatal: Logger from Fatal
error: Logger from Error
warning: Logger from Warning
http: Logger from http
info: Logger from Info

en el caso de los http: 
http: GET en /loggers - 10:06:47
http: GET en /logger - 10:06:53

Se muestran en Consola y se guardan en FILE: errors.log

Ante cualquier duda quedo a la espera de tu contacto, Saludos, Eduardo 

