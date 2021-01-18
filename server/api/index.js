const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/images', require('./images'))

// For Image storage we will use multer. This will have the images
// store into the ~/public/img folder. Originally I tried learning how
// to use blob objects. I first converted to blobs and stored them into
// the database but need more time to learn how to buffer when queryign
// to render the image on the front end.
router.use('/multer', require('./multer'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
