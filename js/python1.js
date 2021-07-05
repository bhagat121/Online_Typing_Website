var easy_words=['c', 'l', 'a', 's', 's', ' ', 'S', 't', 'a', 'c', 'k', 'F', 'u', 'l', 'l', '(', 'E', 'x', 'c', 'e', 'p', 't', 'i', 'o', 'n', ')', ':', 'd', 'e', 'f', ' ', '_', '_', 'i', 'n', 'i', 't', '_', '_', '(', 's', 'e', 'l', 'f', ')', ':', 's', 'e', 'l', 'f', '.', 'm', 's', 'g', ' ', '=', ' ', "'", 's', 't', 'a', 'c', 'k', ' ', 'i', 's', ' ', 'f', 'u', 'l', 'l', "'", 'd', 'e', 'f', ' ', '_', '_', 's', 't', 'r', '_', '_', '(', 's', 'e', 'l', 'f', ')', ':', 'r', 'e', 't', 'u', 'r', 'n', ' ', 's', 'e', 'l', 'f', '.', 'm', 's', 'g', 'c', 'l', 'a', 's', 's', ' ', 'S', 't', 'a', 'c', 'k', 'E', 'm', 'p', 't', 'y', '(', 'E', 'x', 'c', 'e', 'p', 't', 'i', 'o', 'n', ')', ':', 'd', 'e', 'f', ' ', '_', '_', 'i', 'n', 'i', 't', '_', '_', '(', 's', 'e', 'l', 'f', ')', ':', 's', 'e', 'l', 'f', '.', 'm', 's', 'g', ' ', '=', ' ', "'", 's', 't', 'a', 'c', 'k', ' ', 'i', 's', ' ', 'e', 'm', 'p', 't', 'y', "'", 'd', 'e', 'f', ' ', '_', '_', 's', 't', 'r', '_', '_', '(', 's', 'e', 'l', 'f', ')', ':', 'r', 'e', 't', 'u', 'r', 'n', ' ', 's', 'e', 'l', 'f', '.', 'm', 's', 'g', 'c', 'l', 'a', 's', 's', ' ', 'M', 'y', 'S', 't', 'a', 'c', 'k', ':', 'd', 'e', 'f', ' ', '_', '_', 'i', 'n', 'i', 't', '_', '_', '(', 's', 'e', 'l', 'f', ',', ' ', 's', 'i', 'z', 'e', '=', '1', '0', ')', ':', 's', 'e', 'l', 'f', '.', 'm', 'y', 'l', 'i', 's', 't', '=', '[', ']', 's', 'e', 'l', 'f', '.', 's', 'i', 'z', 'e', '=', 's', 'i', 'z', 'e', 'd', 'e', 'f', ' ', 'p', 'u', 's', 'h', '(', 's', 'e', 'l', 'f', ',', ' ', 'e', 'l', 'e', 'm', ')', ':', 'l', '=', 'l', 'e', 'n', '(', 's', 'e', 'l', 'f', '.', 'm', 'y', 'l', 'i', 's', 't', ')', 'i', 'f', ' ', 'l', '<', 's', 'e', 'l', 'f', '.', 's', 'i', 'z', 'e', ':', 's', 'e', 'l', 'f', '.', 'm', 'y', 'l', 'i', 's', 't', '.', 'a', 'p', 'p', 'e', 'n', 'd', '(', 'e', 'l', 'e', 'm', ')', 'e', 'l', 's', 'e', ':', 'r', 'a', 'i', 's', 'e', ' ', 'S', 't', 'a', 'c', 'k', 'F', 'u', 'l', 'l', '(', ')', 'd', 'e', 'f', ' ', 'p', 'o', 'p', '(', 's', 'e', 'l', 'f', ')', ':', 'i', 'f', ' ', 'l', 'e', 'n', '(', 's', 'e', 'l', 'f', '.', 'm', 'y', 'l', 'i', 's', 't', ')', '=', '=', '0', ':', 'r', 'a', 'i', 's', 'e', ' ', 'S', 't', 'a', 'c', 'k', 'E', 'm', 'p', 't', 'y', '(', ')', 'e', 'l', 's', 'e', ':', 'r', 'e', 't', 'u', 'r', 'n', ' ', 's', 'e', 'l', 'f', '.', 'm', 'y', 'l', 'i', 's', 't', '.', 'p', 'o', 'p', '(', ')', 's', ' ', '=', 'M', 'y', 'S', 't', 'a', 'c', 'k', '(', '3', ')', 't', 'r', 'y', ':', 's', '.', 'p', 'u', 's', 'h', '(', '1', '1', ')', 's', '.', 'p', 'u', 's', 'h', '(', '2', '2', ')', 's', '.', 'p', 'u', 's', 'h', '(', '3', '3', ')', '#', 's', '.', 'p', 'u', 's', 'h', '(', '4', '4', ')', 'p', 'r', 'i', 'n', 't', '(', 's', '.', 'p', 'o', 'p', '(', ')', ')', 'p', 'r', 'i', 'n', 't', '(', 's', '.', 'p', 'o', 'p', '(', ')', ')', 'p', 'r', 'i', 'n', 't', '(', 's', '.', 'p', 'o', 'p', '(', ')', ')', 'p', 'r', 'i', 'n', 't', '(', 's', '.', 'p', 'o', 'p', '(', ')', ')', 'e', 'x', 'c', 'e', 'p', 't', ' ', 'E', 'x', 'c', 'e', 'p', 't', 'i', 'o', 'n', ' ', 'a', 's', ' ', 'e', ':', 'p', 'r', 'i', 'n', 't', '(', 'e', ')']
var count=0;
var correct=0;
var incorrect=0;
var total_letter=0;
var tot_word_width=0;
var timeleft=0;
var start;


$(window).one('keypress', function(){
    start=new Date().getTime();
});
    $(window).on('keypress', function(e) {
                  if(count!=610){
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
                  if(count==610){
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
                      $(window).scrollTop($('#610').offset().top);
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
