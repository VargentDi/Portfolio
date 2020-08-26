
const mongoose = require('mongoose')
const config = require("../config/index")

require('./models/portfolio')

exports.connect=()=>{
  return mongoose.connect(config.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
  },(err)=>{
    if(err) console.log(err)
    else console.log('connected to db')
  })
}