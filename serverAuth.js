const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

exports.authJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://dev-53whsa8t.auth0.com/.well-known/jwks.json`
    }),

    audience: 'MycN2F4eLEYF6VJyvxy4GAaGTQIbebDh', // CLIENT ID
    issuer: 'https://dev-53whsa8t.auth0.com/',
    algorithms: ['RS256']
});
