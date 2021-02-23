"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
class App {
    constructor() {
        this.app = express.Application;
        this.app = express();
        this.config();
    }
    config() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(routes);
    }
}
module.exports = new App().app;
//# sourceMappingURL=app.js.map