# Microservicio con NodeJS y MongoDB
## Repositorio: msNodeMongoDB

###### La ApiRest está desarrollada con NodeJS y MongoDB, tiene la finalidad de servir como base para la construcción de un microservicio.

### Para el proyecto debes instalar las siguientes dependencias:

- body-parser
  
  Permite acceder al cuerpo de una petición cuando se utiliza el metodo POST.
  
  Como realizar la instalación de la libreria body-parser?
  ```
  $ npm install body-parser
  ```

- express

  Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.
  ```
  $ npm install express --save
  ```

- mongoose

  Mongoose es un marco de JavaScript que se usa comúnmente en una aplicación Node.js con una base de datos MongoDB.
  Permite definir objetos con un esquema fuertemente tipado que se asigna a un documento MongoDB.
  ```
  $ npm install mongoose
  ```

- winston

  Permite el registro de LOG en la aplicación
  
  ```
  $ npm install winston
  ```
  
- winston-daily-rotate-file

  Permite registrar archivos giratorios. Los registros se pueden rotar según una fecha, un límite de tamaño y los registros   antiguos se pueden eliminar según el recuento o los días transcurridos.

  ```
  $ npm install winston-daily-rotate-file
  ```

- cors

  Permite las solicitudes de origenes cruzados entre dominios.
 
  ```
  $ npm install cors
  ```
 
- jsonwebtoken
 
  Permite proteger el acceso a la API mediante un token.
 
  ```
  $ npm install jsonwebtoken
  ```
 
 
#### Ejemplo de Uso

Es recomendable utilizar Postman para realizar las pruebas.

- Metodos GET


  Obtiene una lista de sucursales 
  ``` 
  http://localhost:5000/api/sucursal/

  Debes agregar el parámetro access-token al body con su correspondiente valor
  ```

  Obtiene una sucursal dado su codigo
  ``` 
  http://localhost:5000/api/sucursal/350

  Debes agregar el parámetro access-token al body con su correspondiente valor
  ```

- Metodos POST

  Metodo para autenticar un usuario y obtener un token para el uso de la API
  ```
  http://localhost:5000/autenticar

  Se debe agregar los siguientes parámetros al body en formato json
  {
    "usuario": "mca",
    "contrasena": "123"
  } 

  como respuesta devolverá un token

  {
    "mensaje": "Autenticación correcta",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNTkzNDYxOTA1LCJleHAiOjE1OTM0NjMzNDV9.7SHReWejZBOPVU9rNUaqNN0HeHUY2GfokSULVkBj42c"   
  }
  ```
