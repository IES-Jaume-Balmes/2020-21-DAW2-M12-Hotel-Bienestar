---
title: "Documentation"
date: 2021-05-14T16:37:56+02:00
draft: true
author: "Daniel, Tito, Marc"
---
## Documentacion Hotel Bienestar

# Como iniciar el proyecto

Utilizad dos terminales, el primero nos servirá para tener activo el cliente y el segundo para el servidor.

### Iniciar el cliente

Vamos a la carpeta del cliente y ejecutamos el siguiente comandos para instalar las dependencias:
````
npm install
````
e inciamos el cliente en el puerto 3000
````
npm start
````

### Iniciar el Servidor

Ahora iniciaremos el servidor, pero antes tendremos que tener la base de datos lista, en nuestro caso utilizamos el xampp con phpmyadmin,
dicho esto creamos una base de datos con el nombre de "hotelbd2".

!Importante, el host es "localhost" y por defecto no tiene contraseña establecida, pero si vuestra BD la tiene, tendreis que cambiar la configuración en la carpeta de servidor/config el fichero config.json, en concreto el apartado de 'development'.

instalamos las dependencias para el servidor
````
npm install
````

Y despues ejecutamos el siguiente comando para iniciar el servidor en el puerto 3001. 
````
nodemon 
````
o
````
npm start
````

### En caso de que no funcione el servidor o el cliente

Borramos las carpetas "node-modules" y los ficheros "package-lock.json", e instalamos otra vez las dependencias con el comando:

````
npm install
````