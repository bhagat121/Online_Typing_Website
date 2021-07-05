var easy_words=['#', 'i', 'n', 'c', 'l', 'u', 'd', 'e', '<', 'i', 'o', 's', 't', 'r', 'e', 'a', 'm', '>', '#', 'i', 'n', 'c', 'l', 'u', 'd', 'e', '<', 'f', 's', 't', 'r', 'e', 'a', 'm', '>', '#', 'i', 'n', 'c', 'l', 'u', 'd', 'e', '<', 's', 't', 'r', 'i', 'n', 'g', '>', '#', 'i', 'n', 'c', 'l', 'u', 'd', 'e', '<', 'c', 'c', 't', 'y', 'p', 'e', '>', 'u', 's', 'i', 'n', 'g', ' ', 'n', 'a', 'm', 'e', 's', 'p', 'a', 'c', 'e', ' ', 's', 't', 'd', ';', 'i', 'n', 't', ' ', 'm', 'a', 'i', 'n', '(', ')', '{', 'i', 'f', 's', 't', 'r', 'e', 'a', 'm', ' ', 'i', 'f', 'i', 'l', 'e', ';', 'i', 'f', 'i', 'l', 'e', '.', 'o', 'p', 'e', 'n', '(', '"', 't', 'e', 'x', 't', '.', 't', 'x', 't', '"', ')', ';', 'c', 'o', 'u', 't', ' ', '<', '<', ' ', '"', 'R', 'e', 'a', 'd', 'i', 'n', 'g', ' ', 'd', 'a', 't', 'a', ' ', 'f', 'r', 'o', 'm', ' ', 'a', ' ', 'f', 'i', 'l', 'e', ' ', ':', '-', '"', ' ', '<', '<', ' ', 'e', 'n', 'd', 'l', ';', 'i', 'n', 't', ' ', 'c', '=', 'i', 'f', 'i', 'l', 'e', '.', 'p', 'e', 'e', 'k', '(', ')', ';', 'i', 'f', '(', 'c', '=', '=', 'E', 'O', 'F', ')', ' ', 'r', 'e', 't', 'u', 'r', 'n', ' ', '1', ';', 'i', 'f', '(', 'i', 's', 'd', 'i', 'g', 'i', 't', '(', 'c', ')', ')', '{', 'i', 'n', 't', ' ', 'n', ';', 'i', 'f', 'i', 'l', 'e', ' ', '>', '>', ' ', 'n', ';', 'c', 'o', 'u', 't', ' ', '<', '<', ' ', '"', 'D', 'a', 't', 'a', ' ', 'i', 'n', ' ', 't', 'h', 'e', ' ', 'f', 'i', 'l', 'e', ':', ' ', '"', ' ', '<', '<', ' ', 'n', '<', '<', ' ', "'", 'n', "'", ';', '}', 'e', 'l', 's', 'e', '{', 's', 't', 'r', 'i', 'n', 'g', ' ', 's', 't', 'r', ';', 'i', 'f', 'i', 'l', 'e', ' ', '>', '>', ' ', 's', 't', 'r', ';', 'c', 'o', 'u', 't', ' ', '<', '<', ' ', '"', 'D', 'a', 't', 'a', ' ', 'i', 'n', ' ', 't', 'h', 'e', ' ', 'f', 'i', 'l', 'e', ':', ' ', '"', '<', '<', ' ', 's', 't', 'r', ' ', '<', '<', ' ', "'", 'n', "'", ';', '}', 'i', 'f', 'i', 'l', 'e', '.', 'c', 'l', 'o', 's', 'e', '(', ')', ';', 'r', 'e', 't', 'u', 'r', 'n', ' ', '0', ';', '}'];
var count=0;
var correct=0;
var incorrect=0;
var total_letter=0;
var tot_word_width=0;
var timeleft=0;
var start;
    /*var timeleft=60;
    var total_time=60;
    var wpm;*/
$(window).one('keypress', function(){
    start=new Date().getTime();
});
    $(window).on('keypress', function(e) {
                  if(count!=390){
                    $("body").css({"overflow":"hidden"})
                  }
                  var pressed_key=String.fromCharCode(e.keyCode);
                  if(easy_words[count].trim()==pressed_key.trim()){
                          total_letter+=easy_words[count].trim().length;
                          $( "#"+count).removeClass("highliter");
                          $( "#"+count).toggleClass( "right");
                          correct++;
                  }
                  else{
                          $( "#"+count).removeClass("highliter");
                          $( "#"+count).toggleClass("wrong");
                          incorrect++;
                  }
                  count++;
                  $( "#"+count).toggleClass( "highliter");
                  var xpos = $("#"+count).offset();
                  var top_pos = xpos.top;
                  count--;
                  var sec_xpos = $("#"+count).offset();
                  var sec_top_pos = sec_xpos.top;
                  count++;
                  if(parseInt(top_pos)>parseInt(sec_top_pos)){
                  document.getElementById("words_container").scrollTop+=26;
                  tot_word_width=0;
                  }
                  if(count==390){
                    $("#words_container").css({"background-color":"rgb(128, 176, 255,0.1)"});
                    $(".right").css({"color":"black"})
                    $("body").css({"overflow":"scroll"})
                    $("#result").show();
                    var end=new Date().getTime();
                    var timeleft=end-start;
                    timeleft=timeleft/1000
                    var minutes = Math.floor(timeleft / 60);
                    var seconds = timeleft - minutes * 60;
                    var wpm_fake=correct/5;
                    var sec_to_dec=seconds/60;
                    minutes+=sec_to_dec;
                    wpm=wpm_fake/minutes;
                    setTimeout(
                    function()
                    {
                      //do something special
                      document.getElementById("result").innerHTML += "Typing Summary<br><br>"+"Time Elapsed:&emsp; &emsp;"
                      +parseInt(minutes)+":"+parseInt(seconds)+"<br><br>"+"Total Typeable letters:&emsp; &emsp;"+parseInt(count)+"<br><br>"+
                      "Correct letters typed:&emsp; &emsp;"+parseInt(correct)+"<br><br>"+"Incorrect Letters:&emsp; &emsp;"+
                      incorrect+"<br><br>"+"Words per minute:&emsp; &emsp;"+parseInt(wpm);
                      $(window).scrollTop($('#390').offset().top);
                    }, 1000);
                  }

    });
$('#home').click(function(){
  window.location.href = "index.html"
});
$('#Restart').click(function(){
    location.reload();
});
$('#result').click(function(){
    location.reload();
});
