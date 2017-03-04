$(document).ready(function(){

 $.get("https://www.reddit.com/r/aww/.json",function(goodness){
    var redditArray = goodness.data.children;
   for(var i=0; i<redditArray.length; i++){
      var thumbnail
          =redditArray[i].data.thumbnail;
       var title
          =redditArray[i].data.title;
      var author
          =redditArray[i].data.author;
      var score
          =redditArray[i].data.score;
      var link
          =redditArray[i].data.permalink;
    $('section').append('<a href="https://www.reddit.com'+link+'"> <div class="article"><img class="pic" src=" '+ thumbnail +' "/><h2 class="a">Title:    '+title+'</h2><h3 class="a">Author:    '+author+'</h3><h3 class="a">Score:    '+score+'</h3></div></a><br>');
   }
       });

});
