const router = require('express').Router()
const {Image, User} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const user = req.user.id
    let images = await Image.findOne({
      where: {
        userId: user
      }
    })

    res.send(images)
  } catch (err) {
    next(err)
  }
})

router.post('/single', async (req, res, next) => {
  try {
    const {title, tags, price, imageUpload, userId, isPrivate} = req.body
    await Image.create({
      title,
      tags,
      price,
      imageUpload,
      isPrivate,
      userId
    })
    return res.send('File uploaded!')
  } catch (err) {
    next(err)
  }
})

router.delete('/single/:imageid', async (req, res, next) => {
  try {
    await Image.destroy({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.delete('/multiple', async (req, res, next) => {
  try {
    await Image.destroy({
      where: {
        id: req.body.imageids,
        userId: req.user.id
      }
    })

    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.delete('/all', async (req, res, next) => {
  try {
    await Image.bulkDelete({
      where: {
        userId: req.user.id
      }
    })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

module.exports = router
