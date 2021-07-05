var easy_words=["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they",
"I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can",
"said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them",
"these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no",
"way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get",
"come","made","may","part"];

/*var parent = $("#words_container");
var divs = parent.children();
while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    divs.append(" ");
}*/
var count=0;
var correct=0;
var incorrect=0;
var total_letter=0;
var tot_word_width=0;
$("#container1").one("keypress", function(){
    var timeleft=60;
    var total_time=60;
    var wpm;
    $(window).keypress(function(e) {
          if(e.which == 32){
                  var word=document.getElementById("container1").value;
                  if (word ==" "){
                  document.getElementById("container1").value="";
                  }
                  else{
                  if(easy_words[count].trim()==word.trim()){
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
                  document.getElementById("container1").value="";
                  count--;
                  var sec_xpos = $("#"+count).offset();
                  var sec_top_pos = sec_xpos.top;
                  count++;
                  if(parseInt(top_pos)>parseInt(sec_top_pos)){
                  document.getElementById("words_container").scrollTop+=51;
                  tot_word_width=0;
                  }
                }
          }
    });
    var downloadTimer = setInterval(function(){
          var minutes = Math.floor(timeleft / 60);
          var seconds = timeleft - minutes * 60;
          document.getElementById("countdown").innerHTML = minutes+":"+seconds;
          timeleft -= 1;
          /*var subtracted_time=total_time-timeleft-2;
          var minute=subtracted_time/60;
          var wpm_fake=total_letter/5;
          wpm =wpm_fake/minute;
          if(timeleft<57)
          document.getElementById("wordper_min").innerHTML="WPM:"+parseInt(wpm);*/
          if(timeleft <= -2 || count==100){
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML ="Time-Up"
                document.getElementById("words_container").innerHTML="";
                if(timeleft==-2 || count==100){
                  var subtracted_time=total_time-timeleft-2;
                  var minute=subtracted_time/60;
                  var wpm_fake=total_letter/5;
                  var sec_to_dec=seconds/60;
                  minutes+=sec_to_dec;
                  wpm=wpm_fake/minute;
                  //document.getElementById("words_container").remove();
                  //document.getElementById("typing_part").remove();
                  $("#result").show();
                  var res_width=$('#result').width();
                  setTimeout(function(){
                    $('html,body').animate({
                      scrollTop: $("#typing_part").offset().top});
                  });
                  document.getElementById("result").innerHTML+="<br>CorrectWords: "+correct;
                  document.getElementById("result").innerHTML+="<br>IncorrectWords: "+incorrect;
                  document.getElementById("result").innerHTML+="<br>WordsPerMinute: "+parseInt(wpm);
                  document.getElementById("result").innerHTML+="<br><span id='inter_restar'>Click To Restart</span>";
                  //document.getElementById("container").innerHTML="";
                }
          }
      },1000);
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
