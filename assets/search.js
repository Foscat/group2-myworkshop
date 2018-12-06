
//Run search baised on title
$(document).on("click", "#titleSearch", function() {
    var inputTitle = $("#titleInput").val().trim();
    console.log(inputTitle);
   
    var queryUrl = "https://www.googleapis.com/books/v1/volumes?q=" + inputTitle + "&filter=ebooks&maxResults=10&key=AIzaSyCMiu9BKRYCqsMEi73bivxlnUF7Ow-oQO4";
    

    $.ajax({
      url: queryUrl,
      method: "GET"
    })
      .then(function(response) {
        var results = response.items.length;
        
        console.log(results);
        console.log(response);

        for (var i = 0; i < response.items.length; i++) {

          //makes each gif a ivdividual div with the class name of gif
          var bookDiv = $("<div>");
          bookDiv.attr({
            "class": "book-div",
          });
        
          //gets author value for result
          var author = response.items[i].volumeInfo.authors[0];

          //creates a p tag tied to the authors name who wrote book
          var authorName = $("<p>").text("Author name: " + author);
          
          var bookImage = $("<img src='" + "assets/images/bookDefault.jpg" + "'>");

          // var snippit = response.items[i].searchInfo.textSnippet;
          // var snippitPrint = $("<p>").text(snippit);

          //setting attributes for still and animate
          bookImage.attr({
            "height": "300px",
            "width": "250px",
         });

        //  bookDiv.prepend(snippitPrint);

          //displays a still of the book cover
          bookDiv.prepend(bookImage);
          
          //attaches author name to the end of the div
          bookDiv.prepend(authorName);
          
          // attaches allpulled info into a content pool div
          $("#search-content").append(bookDiv);

        }
        
        
      });
     

  });