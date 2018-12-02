var keys = require("../keys.js")

$(document).on("click", "button", function() {
    var activity = $(this).attr("data-actChoice");

    var queryUrl = "http://www.khanacademy.org/api/v1/exercises" + activity + "&" + keys.consumer;

    $.ajax({
        url: queryUrl,
        method: "GET"
    })
      .then(function(response){
          var result = response.data;
          console.log(result);

          
      });
});