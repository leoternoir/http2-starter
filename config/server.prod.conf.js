const morgan = require(`morgan`)
const bodyParser = require(`body-parser`)

const fs = require(`fs`)

const consolidate = require(`consolidate`)
const handlebars = require(`handlebars`)

const router = require(`./routes.js`)
const parse = require(`../utils/parse.js`))

module.exports = (app) => {
  app.set(`port`, process.env.PORT || 3000)

  app.engine(`html`, consolidate.handlebars)
  app.set(`view engine`, `html`)
  app.set(`views`, `views`)

  parse.use(`views/partials`)
    .then((partials) => {
      handlebars.registerPartial(partials)
    })

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.use(`/`, router)
}
