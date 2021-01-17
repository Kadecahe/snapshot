const router = require('express').Router()
const {Image, User} = require('../db/models')
const multer = require('multer')
const fs = require('fs')
const {Stream} = require('stream')

let storage = multer.memoryStorage()
let upload = multer({storage: storage})

router.get('/', async (req, res, next) => {
  try {
    const user = req.user.id
    let images = await Image.findOne({
      where: {
        userId: user
      }
    })

    let contents = Buffer.from(images.imageUpload, 'base64')
    const readStream = new Stream.PassThrough()
    readStream.end(contents)
    // console.log('your returned images', result)

    readStream.pipe(res)
  } catch (err) {
    next(err)
  }
})

router.post('/single', upload.single('file'), async (req, res, next) => {
  try {
    console.log(1)

    // const file = global.appRoot + '/uploads/' + req.file.filename;
    const image = await Image.create({
      name: 'SecondTest',
      tags: ['Second'],
      imageUpload: req.file.buffer,
      userId: req.user.id
    })
    return res.send('File uploaded!')
  } catch (err) {
    next(err)
  }
})

// router.post('/images/multiple', upload.array('files', 5), async (req, res, next) => {
//   try{
//     const file = global.appRoot + '/uploads/' + req.file.filename;

//   }catch(err) {
//     next(err)
//   }
// })

// app.post('/categories', upload.single('file'), (req,res) => {
//     fs.rename(req.file.path, file, function(err) {
//         if (err) {
//             console.log(err);
//             res.send(500);
//         }
//         else {
//               db.Category.create({
//                     name: req.body.name,
//                     description: req.body.description,
//                     poster : req.file.filename
//                 })
//                 .then(r =>  {
//                 res.send(r.get({plain:true}));
//                 });
//         }
//       });
// })

module.exports = router
