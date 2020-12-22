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

The project is a SPA (Single Page Applications). 

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

* **Assets:** The assets folder contains all the images and styles that are applied by default to each of the views.

* **Components:** Components are located in the components folder as indicated. Each component is located in a folder with:
  - The child components that make it up if they have 
  - The Library testing tests
  - And storybooks to add more documentation to each component.
- **Domain:** Within the domain folder are defined services. That is, here are implemented business logic, models. They are the functions that allow us to communicate with the backend without taking into account how what is behind it works, but they provide us with functionalities that we need to provide services to the customer.
- **utils:** In utils we find the controllers, which act as an intermediary between the services and the back-end. It is responsible for controlling the flow of information between them and adapting the format of the data to the needs of each one. 
- **views:** In the views folder we find the views, which is the interface with which our user acts.

## Building StoryBooks
---
[Storybook](https://storybook.js.org/docs/react/get-started/introduction) is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

```bash
npm run storybook:serve
```