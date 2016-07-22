const express = require(`express`)
const winston = require(`winston`)

winston.add(winston.transports.File, {
  filename: './log/app.log',
  json: false
})

/**
 * Set the server up
 */
const app = new require(`express`)()

if (process.env.NODE_ENV == `production`) {
  winston.level = 'info'
  const config = require(`./config/server.prod.conf.js`)(app)
} else {
  winston.level = 'debug'
  const config = require(`./config/server.dev.conf.js`)(app)
}

/**
 * Listen at specified port
 */
app.listen(app.get(`port`), () => {
  winston.log(`info`, `Listen at port ${app.get(`port`)}`)
})
