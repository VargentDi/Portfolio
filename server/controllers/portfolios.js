const mongoose = require("mongoose");


const Portfolio = mongoose.model('Portfolio')

exports.getPortfolios = async (req, res) => {
  const portfolios = await Portfolio.find({})
  return res.json(portfolios)
}



exports.getPortfoliosById = async (req,res)=>{
  const {id }= req.params
  const portfolio = await Portfolio.findById(id)
  return res.json(portfolio)
}


exports.createPortfolio = async (req, res) => {
  const data = req.body;
  const userId = 'google-oauth2|106322693209926200762';
  const portfolio = new Portfolio(data);
  portfolio.userId = userId;

  try {
    const newPortfolio = await portfolio.save();
    console.log("-----Successfully saved DB data--------")
    return res.json(newPortfolio);
  } catch(error) {
    return res.status(422).send(error.message);
  }
}