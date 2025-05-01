"scripts": {
    "start": "node src/app.js",
    "dev": "node --env-file=.env --watch src/app.js",    // for env file support we install a third party library to handle.
    "test": "echo \"Error: no test specified\" && exit 1"
  },


--env-file=.env //  it's for availabity for env file to our project. 
--watch it's like nodemon without restart/refresh/save it update the letest code to the terminal.