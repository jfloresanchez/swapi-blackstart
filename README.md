# Blackstart [swapi-mysql]
nodejs
mysql
swapi

# Postman: [Doc API]
`<link>` 
<a href="<https://documenter.getpostman.com/view/2552453/TVmJjKxQ>" target="_blank">Documnetación de API</a>
# Instalaciones. [local]:
#### linea de comando terminal (en el proyecto raiz)

`$ npm install`


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


    
