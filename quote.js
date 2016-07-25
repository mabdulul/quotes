$(document).ready(function() {
   var test ;


  $("#getquote").on("click", function(){
    $.getJSON("https://got-quotes.herokuapp.com/quotes?char=tyrion", function(data){
      var dquote = data.quote ;
       test= " \" "+dquote+ "\"";
      document.getElementById("quote").innerHTML = test;

  }); //end json


  $("#share").click(function() {
  var tweetQuote = $('#quote').html();

  var tweetLink = encodeURI('https://twitter.com/intent/tweet?text=');

  tweetLink += test + "#tyrionlannister";

  window.open(tweetLink, "_blank");
});

}); //end click







}); // The End of JQuery
