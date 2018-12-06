
// global empties so nothing is ever undefined
var bookCover = "assets/images/bookDefault.jpg";


//Run search baised on title
$(document).on("click", "#titleSearch", function() {
  $("#searched").empty();
  $("#search-content").empty();
    var inputTitle = $("#titleInput").val().trim();
    console.log(inputTitle);
   
    var queryUrl = "https://www.googleapis.com/books/v1/volumes?q=" + inputTitle + 
    "&filter=ebooks&maxResults=10&key=AIzaSyCMiu9BKRYCqsMEi73bivxlnUF7Ow-oQO4";
    

    // tells user what they searched for
    $("#searched").append(inputTitle);
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
          var author = response.items[i].volumeInfo.authors;

          //creates a p tag tied to the authors name who wrote book
          var authorName = $("<p>").text("Author(s) name: " + author);

          bookCover = response.items[i].volumeInfo.imageLinks.thumbnail;
          
          var bookImage = $("<img src='" + bookCover + "'>");

          // var snippit = response.items[i].searchInfo.textSnippet;
          // var cleansnip = snippit.trim();
          // var snippitPrint = $("<p>").text(cleansnip);

          //setting attributes for still and animate
          bookImage.attr({
            "height": "300px",
            "width": "250px",
         });

          //displays a still of the book cover
          bookDiv.prepend(bookImage);
          //attaches author name to the end of the div
          bookDiv.prepend(authorName);
          
          // attaches allpulled info into a content pool div
          $("#search-content").append(bookDiv);

        }
        
        
      });
     

  });