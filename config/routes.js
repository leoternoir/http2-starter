const express = require(`express`)
const router = express.Router()

const routes = {
  home: require(`../routes/home.js`)
}

router.get('/', routes.home)

module.exports = router
