const path= require('path');

const dotevn = require('dotenv-webpack')

module.exports = {

  webpack:config=>{
    config.resolve.alias['@'] = path.resolve(__dirname)
    config.plugins.push(new dotevn({silent:true}))
    return config
  }

}