
class PortfolioApi {
  constructor(accessToken){
    this.config = {}

    if (accessToken) {
      this.config.accessToken=accessToken
    }
    this.baseUrl = process.env.PORTFOLIO_API_URL + '/portfolios';
  }
  getAll() {
    return fetch(this.baseUrl)
  }
  getById(id){
    return fetch(`${this.baseUrl}/${id}`)
  }
  createPortfolio(data) {
    console.log('in the caller api',data)
    return fetch(this.baseUrl, {
      method:'POST',
      headers: {
        authorization: `Bearer ${this.config.accessToken}`,
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify(data)
    });
  }


}

export default PortfolioApi;