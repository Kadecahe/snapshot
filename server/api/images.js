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
    const {title, tags, price, imageUpload, userId} = req.body
    await Image.create({
      title,
      tags,
      price,
      imageUpload,
      userId
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
