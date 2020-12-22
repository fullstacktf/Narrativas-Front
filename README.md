# **Narrativas proyect: Front-end**

Our project has two repositories. One for the Front and one for the Back-end:  
This one is for the Front-end and following this [link](https://github.com/fullstacktf/Narrativas-Backend/) you can go to the Back-end.

## Building the project
---

This project can be built in two different ways.  

*  **Locally** (node v12 and npm needed)

```bash

npm install

npm run serve

```

The front-end app wil be running at http://localhost:8080.

*  **Using docker**

```bash

make build

```

The front-end app wil be running at http://localhost.

This app will not work properly if it is not running along side the backend.

## Project Structure
---
```bash
├── babel.config.js
├── conf
├── config
├── Dockerfile
├── docs
├── jest.config.js
├── licenses.md
├── LICENSES.md
├── Makefile
├── node_modules
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
├── README.md
├── src
├── tailwind.config.js
├── testSetupFile.js
├── vue.config.js
└── yarn.lock
```
Of all these files and folders, the most important are:
* Dockerfile: Build the project in a container
* docs/: Contains all the mock-ups and the data base model
* src/: Folder with all code of the project. 

the rest are configuration files.

### src

El proyecto es un SPA (Aplicaciones de una sola página). 

```bash
├── App.vue
├── assets
├── components
├── domain
├── event-bus.js
├── main.js
├── router
├── store.js
├── utils
└── views
```

* **Assets:** La carpeta assets contiene todos las imágenes y los estilos que que se aplican por defecto a cada uno de las vistas.

* **Componentes:** En la carpeta componentes como bien indica se encuentra los componentes. Cada componentes se encuentra en una carpeta con:
  - Los componentes hijos que lo conforman si tienen 
  - Los test de testing Library
  - Y los storybooks para añadir más documentación a cada componente.
- **Domain:** Dentro de la carpeta domain están definidos los servicios. Es decir, aquí están implementado la lógica de negocio, los modelos. Son las funciones que nos permiten comunicarnos con el backend sin tener en cuenta como funciona lo que hay detrás, pero nos proporcionan funcionalidades que necesitamos para aportar servicios al cliente.
- **utils:** En utils encontramos los controladores, que hacen de intermediario entre los servicios y el back-end. Se encarga de controlar el flujo de la información entre ellos y adaptar el formato de los datos a las necesidades de cada uno. 
- **views:** En la carpeta views encontramos las vistas, que es la interfaz con la que actua nuestro usuario. 

## Building StoryBooks
---
[Storybook](https://storybook.js.org/docs/react/get-started/introduction) is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

```bash
npm run storybook:serve
```