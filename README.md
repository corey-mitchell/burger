# Burger

A restaurant app that lets users input the names of burgers they'd like to eat. The input will be stored in the database. The user may then choose to eat the burger. Which changes the state of the burgers data.

## Demo

Try out the demo, [here]().

## Running Locally

First, run database schema and seeds into mySQL workbench to create and populate a database.

Run ```npm install``` in terminal.

Run ```node server.js``` in terminal.

### Prerequisites

Dependencies: Express, body-parser, path, mysql and express-handlebars.

Terminal commands for downloading dependencies: 

```
npm i express
npm i body-parser
npm i mysql
npm i express-handlebars
```

*Note* - 'Path' dependency is already a part of node, no need to install it.

Initialize Dependencies: 

```
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
```

[*Express Documentation*](https://www.npmjs.com/package/express)
[*Body-Parser Documentation*](https://www.npmjs.com/package/body-parser)
[*Mysql Documentation*](https://www.npmjs.com/package/mysql)
[*Express-Handlebars Documentation*](https://www.npmjs.com/package/express-handlebars)


## Author

* **Corey Mitchell** - *Initial work* - (https://github.com/corey-mitchell)
