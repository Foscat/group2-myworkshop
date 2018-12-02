// var keys = require("../keys.js");
var currentTime = moment().format("HH:mm:ss");

$(document).on("click", "button", function() {
    var activity = $(this).attr("data-actChoice");

    var queryUrl = "http://www.khanacademy.org/exercise/" + "logarithms_1" + "&api_key=2XX8Y9z6N8PrxnnH";

    $.ajax({
        url: queryUrl,
        method: "GET",
        oauth_consumer_key: "2XX8Y9z6N8PrxnnH",
        oauth_timestamp: currentTime,
        
    })
      .then(function(err, response){
          if (err) throw err;
          var result = response.data;
          console.log(result);

          
      });
});