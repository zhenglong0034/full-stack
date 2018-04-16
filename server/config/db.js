const Sequelize = require('sequelize')

const jenst = new Sequelize('mysql://root:zl900713@localhost/jenst', {
  define: {
    timestamps: false
  }
})
module.exports = {
  jenst
}
