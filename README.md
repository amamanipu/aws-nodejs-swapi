# PROYECTO AWS-NODEJS-SWAPI

El proyecto desarrollado contiene 2 lambda y se implemento con NodeJS y Typescript.

1. lambda-get: Obtiene y Transforma los atributos del personaje en español que devuelve StarWars API
2. lambda-post: Registra datos de un personaje en una tabla de AWS DynamoDB

Seguir los siguientes pasos para usar el proyecto.

### Descargar e instalar versión de nodejs >= 20.x.x
- `https://nodejs.org/en/download`

### Instalar la dependencia serverless por npm a nivel global
- Ejecutar el comando: `npm install -g serverless`

### Configurar las credenciales de AWS por comando serverless

- Ejecutar el comando: `serverless config credentials --provider aws --key ${Your access key ID} --secret ${Your secret access key}`
- Crear clave de acceso en AWS y reemplazar `${Your access key ID}` y `${Your secret access key}`

### Clonar el repositorio aws-nodejs-swapi
- Ejecutar el comando: `git clone https://github.com/amamanipu/aws-nodejs-swapi.git`

### Descargar las dependencias del proyecto
- Ejecutar el comando: `npm install`

### Crear recursos y despliegue del proyecto en aws por comando serverless
- Ejecutar el comando: `serverless deploy`

### Levantar proyecto de manera local por comando serverless
- Ejecutar el comando: `serverless offline`

### Ejecutar pruebas unitarias
- Ejecutar el comando: `npm run test`

### Swagger del API AWS-NODEJS-SWAPI

- [Visualizar API en Swagger UI](https://app.swaggerhub.com/apis-docs/amamanipu/swapi-api/1.0.0)
- En caso de tener corriendo el proyecto de modo local. Solo se necesita cambiar el `Servers` del Swagger UI a `API Local`

### Estructura del Proyecto

La base de codigo del proyecto se encuentra en la carpeta `src`. La carpeta contiene:

- `functions` - Contiene el codigo y configuración de lambda
- `libs` - Contiene codigo reutilizable para usar en las funciones lambda

```
.
├── src
│   ├── functions                   
│   │   ├── lambda-get
│   │   │   ├── dtos
│   │   │   │   └── personaje.dto.ts  
│   │   │   ├── external-services
│   │   │   │   └── personaje.service.ts    
│   │   │   ├── mappers
│   │   │   │   └── personaje.mapper.ts    
│   │   │   ├── handler.ts          
│   │   │   └── index.ts            
│   │   │ 
│   │   ├── lambda-post
│   │   │   ├── database
│   │   │   │   └── db.ts  
│   │   │   ├── handler.ts          
│   │   │   ├── index.ts            
│   │   │   └── schema.ts
│   │   │            
│   │   └── index.ts                
│   │
│   └── libs                        
│       └── apiGateway.ts           
│       └── handlerResolver.ts      
│       └── lambda.ts               
│
├── test
│   └── index.test.ts
│ 
├── package.json
├── serverless.ts                   
├── tsconfig.json                   
└── tsconfig.paths.json             
```

