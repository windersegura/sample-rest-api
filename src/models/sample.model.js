module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean
    },
    { timestamps: true }
  )

  schema.method('toJSON', () => {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  const Sample = mongoose.model('sample', schema)
  return Sample
}
