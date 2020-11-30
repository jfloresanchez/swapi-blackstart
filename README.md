# Blackstart [nodejs, mysql, swapi, docker, postman]

# Postman: [Doc API]
`<link>` https://documenter.getpostman.com/view/2552453/TVmJjKxQ

##### Proyecto SWAPI

                
+ database
    + db.sql `[ejecutar script de creación bd]` 
    + keys.js

`archivo keys.js debe ser cambiado por credenciales de servidor mysql`

```javascript
module.exports = {
    database: {
        host: 'localhost',
        user: 'USUARIO',
        password: 'CONTRASEÑA',
        database: 'blackstart'
    }
};
```
# Instalaciones. [local]:
#### linea de comando terminal (en el proyecto raiz)

+ $ npm install
+ $ npm run start:dev 


    
