var displayLoop =function(){ for(i = 0; i < results; i++){

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

  //get book cover image from json
  response.items[i].volumeInfo.imageLinks ? 
  bookCover = response.items[i].volumeInfo.imageLinks.thumbnail : 
  bookCover = "assets/images/bookDefault.jpg";
 //displays book cover on page
 var bookImage = $("<img src='" + bookCover + "'>");
 //setting attributes for size and lableing for each image
 bookImage.attr({
   class: "book-info",
   height: "300px",
   width: "250px",
 });

 // commented out because it messes up querys need to make if elese statements to give default responeses
 var snippit = response.items[i].searchInfo.textSnippet;
 // var cleansnip = snippit.trim();
 var snippitPrint = $("<p>").text(snippit);     
 response.items[i].searchInfo.textSnippet ? 
            snippit = response.items[i].volumeInfo.imageLinks.thumbnail : 
            snippit = "There is no short discription for this book";     

// attaches textsnippit to book div
 bookDiv.prepend(snippitPrint);    

 // attaches first base link to book info **still needs work**
 bookDiv.prepend(infolink);

 //displays a still of the book cover
 bookDiv.prepend(bookImage);
 //attaches author name to the end of the div
 bookDiv.prepend(authorName);
 
 // attaches all pulled info into a content pool div
 $("#search-content").append(bookDiv);
 
}
};