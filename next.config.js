const path= require('path');

const dotevn = require('dotenv-webpack')

module.exports = {

  env:{
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE
  }
}