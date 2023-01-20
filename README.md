# Prueba Tecnica Xcala Backend

Esta prueba consiste en:

1. Levantar un servidor Graphql con Apollo Server.
2. Definir Schemas para los diferentes tipos de datos.
3. Escribir consultas/mutacion.
4. Documentar codigo.

## Instalacion 

Verificar que NodeJS este instalado.

Instalar ApolloServer/Graphql

[Apollo] (https://www.apollographql.com/docs/apollo-server/getting-started/)

```bash
npm install @apollo/server graphql
```
Crear un archivo index.js

```touch index.js```

Reemplazar dentro del package json generado las props type,scripts, para cargar modulos y files de JavaScript como modulos.

## Graphql Informacion basica

1. typeDef/Schemas, se utilizan para describir y darle forma a la data.
2. Query type, objeto especial que define entrypoints del lado del cliente (Read).
3. Mutations, acciones para modificar nuestra data (CRUD).

## Uso

```Graphql

# Para levantar el servidor Apollo y ejecutar nuestro archivo index.js
npm start

# url localhost para entrar al sandbox de ApolloServer
http://localhost:4000

# Al realizar cambios en nuestro index.js volver a ejecutar nuestra aplicacion y actualizar localhost server.

```

## Contributing

Silverio.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)