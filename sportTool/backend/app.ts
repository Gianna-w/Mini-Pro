const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index')

class App {
  public app = express.Application
  constructor () {
    this.app = express()
    this.config()
  }

  private config () {
    // parse application/x-www-form-urlencoded
    this.app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
    this.app.use(bodyParser.json())
    this.app.use(routes)
  }
}
module.exports = new App().app
