var options = {
    salt: 'some_random_string',
    // How long tokens will be valid since creation
    ttl: 86400,
    // Function for verifying validity of the application secret key
    checkAppSecret: function (userId, userSecret, cb) {
      // Return promise OR use callback
      return Promise.resolve(true)
    },
    // Function for verifying validity of the user secret key
    checkUserSecret: function (userId, userSecret, cb) {
      return Promise.resolve(true)
    },
    // Function for verifying the session existence
    checkSession: function (sessionId, cb) {
      return Promise.resolve(true)
    }
  };
   
var OauthToken = require('oauth-token')(options);
console.log(options);
var keys = require("../keys");

var data = {
    appId: 'my_app',
    appSecret: '9iZp4FqiubL6',
    userId: '198623486', // userId is required and must be string
    userSecret: '1HMuXS5KBTWQ',
    session: 'QxBfjfUQsD66'
  };

  // OR use callback
OauthToken.create(data, function (err, oauthToken) {
console.log("create");
});