const morgan = require(`morgan`)
const errorHandler = require(`errorhandler`)
const bodyParser = require(`body-parser`)
const static =require(`serve-static`)

const consolidate = require(`consolidate`)
const handlebars = require(`handlebars`)

const router = require(`./routes.js`)
const parse = require(`../utils/parse.js`)

module.exports = (app) => {
  app.use(morgan(`dev`))
  app.use(errorHandler())

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

  app.use(`/public`, static('public'));
  app.use(`/`, router)
}
