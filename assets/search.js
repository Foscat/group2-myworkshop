
// global empties so nothing is ever undefined--in theroy
var bookCover = "assets/images/bookDefault.jpg";
var defaultSnippit = "blank";


//Run search baised on title
$("#titleSearch").on("click", function() {
  $("#searched").empty();
  $("#search-content").empty();
    var inputTitle = $("#titleInput").val().trim();
    console.log(inputTitle);
   
    var queryUrl = "https://www.googleapis.com/books/v1/volumes?q=" + inputTitle + 
    "&filter=free-ebooks&orderBy=relevance&maxResults=10&langRestrict=en&key=AIzaSyCMiu9BKRYCqsMEi73bivxlnUF7Ow-oQO4";
    

    // tells user what they searched for
    $("#searched").append(inputTitle);
    $.ajax({
      url: queryUrl,
      method: "GET",
      prettyPrint: true
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

          // **Needs work**--it messes up querys need to make if elese statements to give default responeses
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

  // takes in all users selected tags and puts them into query
  var tagList = ["money", "power"];
  console.log(tagList)
  var activeTagList = ["food", "camping", "grilling", "tents"];
  console.log(activeTagList)

  console.log("inactive:  " + tagList);
  console.log("active:  " + activeTagList);
///////////// Tag search funtion 
  $("#tag-search").on("click", function(){
    console.log($(this));
    $("#searched").empty();
    $("#search-content").empty();

    var tagpool= activeTagList.join("+");
    console.log(tagpool);
    
    queryUrl = "https://www.googleapis.com/books/v1/volumes?q=" + tagpool +
    "&filter=ebooks&orderBy=relevance&maxResults=30&langRestrict=en&key=AIzaSyCMiu9BKRYCqsMEi73bivxlnUF7Ow-oQO4";
    console.log(queryUrl);
    $.ajax({
      url: queryUrl,
      method: "GET",
      prettyPrint: true
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

  function renderButtons() {

    // empty current tag buttons to prevent repetes
    $("#tag-pool").empty();
    $("#active-tags").empty();

    // Loop through the array of active tags, then generate buttons for each tag name in the array
    for(i=0; i<activeTagList.length; i++){
      var newTagAct = $("<button class=tagButton active=true tag=" + activeTagList[i] + ">").text(activeTagList[i]);
      
      //attach the attribute of data-person to Person
      //  newTag.attr(people[i]);
      
      //put new button at the end othe other buttons
      $("#active-tags").append(newTagAct);
      
       
     }


    // Loop through the array of unused tags, then generate buttons for each tag name in the array
    for(i=0; i<tagList.length; i++){
     var newTag = $("<button class=tagButton active=false tag=" + tagList[i] + ">").text(tagList[i]);
     
     //attach the attribute of data-person to Person
     //  newTag.attr(people[i]);
     
     //put new button at the end othe other buttons
     $("#tag-pool").append(newTag);
     
      
    }
  }

  // generates new tag button 
  $("#tagGenerator").on("click", function(){
    //take in value of make new tag maker bar
    var inputTag = $("#tagMaker").val().trim();
    // check that info came in right
    console.log(inputTag);
    // put the string into the tagList array
    tagList.push(inputTag);
    // check to see updated arry
    console.log(tagList);
    
    // generate new buttons to replace the old ones that were deleted in the line above
    renderButtons();
  });

  // moves tag between unused and active tags **Needs work**--does not move buttons but causes the whole array to clear due to page refreshing on any click

$(document).on("click", ".tagButton", function() {
    // console.log($(this).attr('tag'))
    var tag = $(this).attr('tag');

    if($(this).attr('active') == "false") {
      var falseTagIndex = tagList.indexOf(tag)
      tagList.splice(falseTagIndex, 1);
      activeTagList.push(tag);
      console.log(tagList, activeTagList)
      renderButtons();
      // console.log("false");
    }else{
      // activetagList.pop(this);
      // TagList.push(this);
      console.log("true");
    }
});


//lets user clear active seach tags
$("#clear-tags").on("click", function(){
  $("#tag-pool").push("#active-tags");
});
  
renderButtons();