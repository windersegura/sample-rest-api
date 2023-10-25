const express = require('express')
const { findAll, create } = require('../controllers/sample.controller')

const router = express.Router()

router.get('/', findAll)
router.post('/creteSample', create)

module.exports = router
