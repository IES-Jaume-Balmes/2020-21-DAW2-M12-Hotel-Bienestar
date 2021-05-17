# Como iniciar el proyecto

### Iniciar el cliente

Vamos a la carpeta del cliente y ejecutamos los siguientes comandos para instalar las dependencias:
````
npm install
````
e inciamos el cliente en el puerto 3000
````
npm start
````

### Iniciar el Servidor

Ahora iniciaremos el servidor, pero antes tendremos que tener la base de datos lista, en nuestro caso utilizamos el xampp con phpmyadmin.
Dicho esto creamos una base de datos con el nombre de "hotelbd2".

Despues ejecutamos el siguiente comando para iniciar el servidor en el puerto 3001 
````
nodemon
````

### En caso de que no funcione el servidor o el cliente

Borramos las carpetas "node-modules" y los ficheros "package-lock.json", e instalamos otra vez las dependencias con el comando:

````
npm install
````
