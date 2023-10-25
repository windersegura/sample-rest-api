const db = require('../models')
const Sample = db.samples

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: 'Content cannot be empty' })
  }

  const sample = new Sample({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  })

  sample
    .save(sample)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred'
      })
    })
}

exports.findAll = (req, res) => {
  res.json({ message: 'Find all samples' })
}

exports.findOne = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.deleteAll = (req, res) => {

}

exports.findAllPublished = (req, res) => {

}
// const getSample = async (req, res) => {
//   res.json({ message: 'get data in controller' })
// }

// module.exports = {
//   getSample
// }
