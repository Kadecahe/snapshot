const User = require('./user')
const Image = require('./image')

//Associations
Image.belongsTo(User)

//Exporting all Models from this file
module.exports = {
  User,
  Image
}
