// const express = require("express");
// const jwt = require("express-jwt");
// const jwksRsa = require("jwks-rsa");
// const axios = require("axios");

// // Create a new Express app
// const app = express();

// // Set up Auth0 configuration
// const authConfig = {
//   domain: "dev-dbt713.au.auth0.com",
//   audience: "http://localhost:3001"
// };

// // Define middleware that validates incoming bearer tokens
// // using JWKS from dev-dbt713.au.auth0.com
// const checkJwt = jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
//   }),

//   audience: authConfig.audience,
//   issuer: `https://${authConfig.domain}/`,
//   algorithm: ["RS256"]
// });

// // Define an endpoint that must be called with an access token
// app.get("/api/external", checkJwt, async (req, res) => {
//         const response = await axios.post("https://dev-dbt713.au.auth0.com/userinfo", {}, {
//         headers: {
//             "Authorization": req.headers.authorization
//         }
//     });

//     console.log(response.data);

//     res.send({
//     msg: "Your Access Token was successfully validated!"
//   });
// });

// // app.use(checkJwt);

// app.get('/authorized', function (req, res) {
//     res.send('Secured Resource');
// });

// // Start the app
// app.listen(3001, () => console.log("API listening on 3001"));
