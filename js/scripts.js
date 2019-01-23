$(document).ready(function(){
  $('form').submit(function (event) {
    event.preventDefault();
    let sentence = $("#sentence").val();
    let sentArr = sentence.split(' ');

    let words = {};
    sentArr.forEach(function(word) {
        if(word in words === false){
           words[word] = 1;
        } else if(word in words) {
          words[word] += 1;
        }
      });

      Object.keys(words).forEach(function(word){
        $("ul").append('<li>'+(word + " " + words[word])+'</li>');
      });
  });
});
