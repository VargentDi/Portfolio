const jwt = require ('express-jwt')
const jwks = require('jwks-rsa')




exports.checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: 'https://dev-k8lu-jvo.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://dev-k8lu-jvo.us.auth0.com/api/v2/',
  issuer: 'https://dev-k8lu-jvo.us.auth0.com/',
  algorithms: ['RS256']
});