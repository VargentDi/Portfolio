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
  const userId = req.user.sub;
  const portfolio = new Portfolio(data);
  portfolio.userId = userId;

  try {
    const newPortfolio = await portfolio.save();
    console.log("-----Successfully saved DB data--------")
    return res.json(newPortfolio);
  } catch(error) {
    console.log("-----failed saved DB data--------")
    return res.status(422).send(error.message);
  }
}

exports.updatePortfolio = async (req, res) => {
  const { body, params: {id}} = req;

  try {
    const updatedPortfolio = await Portfolio.findOneAndUpdate({_id: id}, body, {new: true, runValidators: true})
    return res.json(updatedPortfolio);
  } catch(error) {
    return res.status(422).send(error.message);
  }
}

exports.deletePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findOneAndRemove({_id: req.params.id});
  return res.json({_id: portfolio.id})
}