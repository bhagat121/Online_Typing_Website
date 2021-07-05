var easy_words=['#', 'i', 'n', 'c', 'l', 'u', 'd', 'e', '<', 's', 't', 'd', 'i', 'o', '.', 'h', '>', 'i', 'n', 't', ' ', 'm', 'a', 'i', 'n', '(', ')', '{', 'i', 'n', 't', ' ', 'n', ',', 'r', ',', 's', 'u', 'm', '=', '0', ',', 't', 'e', 'm', 'p', ';', 'p', 'r', 'i', 'n', 't', 'f', '(', '"', 'e', 'n', 't', 'e', 'r', ' ', 't', 'h', 'e', ' ', 'n', 'u', 'm', 'b', 'e', 'r', '=', '"', ')', ';', 's', 'c', 'a', 'n', 'f', '(', '"', '%', 'd', '"', ',', '&', 'n', ')', ';', 't', 'e', 'm', 'p', '=', 'n', ';', 'w', 'h', 'i', 'l', 'e', '(', 'n', '>', '0', ')', '{', 'r', '=', 'n', '%', '1', '0', ';', 's', 'u', 'm', '=', 's', 'u', 'm', '+', '(', 'r', '*', 'r', '*', 'r', ')', ';', 'n', '=', 'n', '/', '1', '0', ';', '}', 'i', 'f', '(', 't', 'e', 'm', 'p', '=', '=', 's', 'u', 'm', ')', 'p', 'r', 'i', 'n', 't', 'f', '(', '"', 'a', 'r', 'm', 's', 't', 'r', 'o', 'n', 'g', ' ', 'n', 'u', 'm', 'b', 'e', 'r', '"', ')', ';', 'e', 'l', 's', 'e', 'p', 'r', 'i', 'n', 't', 'f', '(', '"', 'n', 'o', 't', ' ', 'a', 'r', 'm', 's', 't', 'r', 'o', 'n', 'g', ' ', 'n', 'u', 'm', 'b', 'e', 'r', '"', ')', ';', 'r', 'e', 't', 'u', 'r', 'n', ' ', '0', ';', '}']
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
                  if(count!=224){
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
                  if(count==224){
                    $("#words_container").css({"background-color":"rgb(128, 176, 255,0.1)"})
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
                      $(window).scrollTop($('#224').offset().top);
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
