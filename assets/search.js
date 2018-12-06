
// global empties so nothing is ever undefined--in theroy
var bookCover = "assets/images/bookDefault.jpg";


//Run search baised on title
$(document).on("click", "#titleSearch", function() {
  $("#searched").empty();
  $("#search-content").empty();
    var inputTitle = $("#titleInput").val().trim();
    console.log(inputTitle);
   
    var queryUrl = "https://www.googleapis.com/books/v1/volumes?q=" + inputTitle + 
    "&filter=ebooks&orderBy=relevance&maxResults=10&key=AIzaSyCMiu9BKRYCqsMEi73bivxlnUF7Ow-oQO4";
    

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

        for (var i = 0; i < results; i++) {

          //makes each gif a ivdividual div with the class name of book-div
          var bookDiv = $("<div>");
          bookDiv.attr({
            class: "book-div",
            // width: "500px"
          });
        
          // first base link to book info **still needs work**--only displays json data for book
          var infolink =("<a href=" + response.items[i].selfLink + "> Book link</a>");
          // var infolink = bookSelfLink(response);

          //gets author value for result
          var author = response.items[i].volumeInfo.authors;
          //creates a p tag tied to the authors name who wrote book
          var authorName = $("<p class=author-names>").text("Author(s) name: " + author);

          //get book cover inmage from json
          bookCover = response.items[i].volumeInfo.imageLinks.thumbnail;
          //displays book cover on page
          var bookImage = $("<img src='" + bookCover + "'>");
          //setting attributes for size and lableing for each image
          bookImage.attr({
            class: "book-info",
            height: "300px",
            width: "250px",
          });

          // commented out because it messes up querys need to make if elese statements to give default responeses
          // var snippit = response.items[i].searchInfo.textSnippet;
          // var cleansnip = snippit.trim();
          // var snippitPrint = $("<p>").text(cleansnip);          

          // attaches first base link to book info **still needs work**
          bookDiv.prepend(infolink);

          //displays a still of the book cover
          bookDiv.prepend(bookImage);
          //attaches author name to the end of the div
          bookDiv.prepend(authorName);
          
          // attaches all pulled info into a content pool div
          $("#search-content").append(bookDiv);

        }
        
        
      });
     

  });

// checker to see everything in book div quickly
  $(document).on("click", ".book-div", function() {
  
    console.log(this);
  
  });

///////////// Genere select funtion

  $(document).on("click", "#genre-select", function(){
    console.log(this);
    $("#searched").empty();
    $("#search-content").empty();

    // var genreFilter ={

    // };

    queryUrl = "https://www.googleapis.com/books/v1/volumes?q=horror+fiction" +
    "&filter=ebooks&orderBy=relevance&maxResults=30&key=AIzaSyCMiu9BKRYCqsMEi73bivxlnUF7Ow-oQO4";
    
    $.ajax({
      url: queryUrl,
      method: "GET"
    })
      .then(function(response) {
        var results = response.items.length;
        
        console.log(results);
        console.log(response);
      
        for(i = 0; i < results; i++){

           //makes each gif a ivdividual div with the class name of book-div
           var bookDiv = $("<div>");
           bookDiv.attr({
             class: "book-div",
             // width: "500px"
           });

           // first base link to book info **still needs work**--only displays json data for book
          var infolink =("<a href=" + response.items[i].selfLink + "> Book link</a>");
          // var infolink = bookSelfLink(response);

          //gets author value for result
          var author = response.items[i].volumeInfo.authors;
          //creates a p tag tied to the authors name who wrote book
          var authorName = $("<p class=author-names>").text("Author(s) name: " + author);

          //get book cover inmage from json
          bookCover = response.items[i].volumeInfo.imageLinks.thumbnail;
          //displays book cover on page
          var bookImage = $("<img src='" + bookCover + "'>");
          //setting attributes for size and lableing for each image
          bookImage.attr({
            class: "book-info",
            height: "300px",
            width: "250px",
          });

          // commented out because it messes up querys need to make if elese statements to give default responeses
          // var snippit = response.items[i].searchInfo.textSnippet;
          // var cleansnip = snippit.trim();
          // var snippitPrint = $("<p>").text(cleansnip);          

          // attaches first base link to book info **still needs work**
          bookDiv.prepend(infolink);

          //displays a still of the book cover
          bookDiv.prepend(bookImage);
          //attaches author name to the end of the div
          bookDiv.prepend(authorName);
          
          // attaches all pulled info into a content pool div
          $("#search-content").append(bookDiv);
          
        }
      });
  });