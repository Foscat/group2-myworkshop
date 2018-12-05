// var keys = require("../keys.js");
// var moment = require("moment")
// var currentTime = moment().format("HH:mm:ss");

// $(document).on("click", "button", function() {
//     // var activity = $(this).attr("data-actChoice");

//     var queryUrl = "http://www.khanacademy.org/api/v1/exercises/logarithms_1";  //&ConsumerKey=2XX8Y9z6N8PrxnnH&ConsumerSecret=ZCZhs5uXjKufQvSf";

//     getapi = function(err, response){
//         if (err) throw err;
//         var result = response.data;
//         $('#quiz-content').append(JSON.parse(result));
//         console.log(result);

//     // $.ajax({
//     //     url: queryUrl,
//     //     method: "GET",
//     //     // oauth_consumer_key: "2XX8Y9z6N8PrxnnH",
//     //     // oauth_nonce: "**see param-req.txt**",
//     //     // oauth_version: 1.0,
//     //     // oauth_signature: "HMAC-SHA1",
//     //     // oauth_timestamp: currentTime,
        
//     // })
//     //   .then(function(err, response){
//     //       if (err) throw err;
//     //       var result = response.data;
//     //       $('#quiz-content').append(JSON.parse(result));
//     //       console.log(result);

          
//     //   });
// });

//Get source info from giphy API
$(document).on("click", "button", function() {
    // var person = $(this).attr("data-person");
   
    
    
    var queryUrl = "http://www.khanacademy.org/api/v1/exercises/logarithms_1";
    

    $.ajax({
      url: queryUrl,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        
        console.log(JSON.parse(response.data));

        // for (var i = 0; i < results.length; i++) {

        //   //makes each gif a ivdividual div with the class name of gif
        //   var gifDiv = $("<div>");
        //   gifDiv.attr({
        //     "class": "gif-div",
        //   });
          
        //   //gets rating value for result
        //   var rating = results[i].rating;

        //   //creates a p tag tied to the rating for the gif
        //   var p = $("<p>").text("Rating: " + rating);

        //   //generates a image tag inside the div that is the gif
        //   //displays a still of the gif
        //   var peopleImage = $("<img src='" + response.data[i].images.fixed_height_still.url + "'>");
          
        //   //setting attributes for still and animate
        //   peopleImage.attr({
        //     "data-state": 'still',
        //     "data-still":  response.data[i].images.fixed_height_still.url,
        //     "data-animate": response.data[i].images.fixed_height.url
        //   })
          
        //   //attaches rating to the end of the div
        //   gifDiv.prepend(p);

        //   //attaches the imageDiv to the main div
        //   gifDiv.prepend(peopleImage);
          
        //   $("#people-gifs").prepend(gifDiv);

        // }
        
        
      });
     

  });