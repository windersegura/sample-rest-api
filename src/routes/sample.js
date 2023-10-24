const express = require('express')
const { getSample } = require('../controllers/sampleController')

const router = express.Router()

router.get('/', getSample)

module.exports = router