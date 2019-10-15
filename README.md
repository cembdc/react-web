# react-web
Infrastructure for web applicaitons.

# Build Scripts

Create React App comes with a few scripts that are helpful for our development. We will use these scripts whenever we want to:

Run our application for development
Build our application for production
Test our application if we've created tests
You can see inside our package.json where the scripts are located:

"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

We can run any of the above commands using the following:

# starting our app for development
npm start
npm run start
yarn start

# building our app for production
npm run production
yarn production

# testing our application
npm run test

# ejecting our application (ONLY DO IF YOU KNOW WHAT YOURE DOING)
npm run eject

start: This command will start our application for development. It will even open up our application for development in browser at http://localhost:3000.

build: We can bundle our application for production and generate only a few files that we can host for our users.

test: This will run all of our tests like the one that comes with Create React App in App.test.js

eject: Ejecting will give you access to configure every aspect of your React application. This means that Create React App is no longer handling the configuration for your application. This command is only for those that are 100% sure they want to leave the comfort of CRA and need extra configuration.