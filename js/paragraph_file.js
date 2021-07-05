var easy_words=["They","stepped","inside","the","cave.","Pitch_black","it","was.",
"The","old","man","shook","open","his","fist","and","a","ball","of","light","suddenly",
"appeared,","brightening","the","cave.","Under","the","light","with","one","long",
"finger,","he","drew","the","shape","of","a","circle","over","the","ground.",
"He","pulled","from","his","pocket","some","red","dust","and","threw","it",
"over","the","circle,","and","at","the","same","time","said","some","magic",
"words.","The","earth","trembled","a","little","before","them.","The","floor",
"of","the","cave","cracked","open,","and","the","cracks","grew","wider","and",
"deeper.","Then","up","from","below","the","ground","rose","a","giant","white",
"quartz","crystal","and","it","filled","the","circle.",'"Do',"not","be",
'alarmed,"',"said","the","magician.",'"Under',"this","giant","white","crystal",
"lies","a","treasure","that","is","to","be",'yours."',"He","chanted","a","few",
"magic","words","and","the","giant","crystal","rose","up","several","feet","in",
"the","air,","moved","to","the","side","and","landed.","Aladdin","peered",
"into","the","hole.","He","saw","steps","that","led","down","to","a","dark","hole.",
'"Fear','nothing,"',"said","the","magician","to","Aladdin.",'"But',"obey",
"me.","Go","down,","and","at","the","foot","of","the","steps,","follow","a",
"long","hall.","You","will","walk","through","a","garden","of","fruit",
"trees.","You","must","touch","nothing","of","them.","Walk","on","till","you",
"come","to","a","large","flat","stone","and","on","the","stone","will","be","a",
"lighted","lamp.","Pour","out","the","oil","in","the","lamp","and","bring",
"it","to","me.","Now",'go!"'];
var count=0;
var correct=0;
var incorrect=0;
var tot_word_width=0;
var total_letter=0;
$("#container1").one("keypress", function(){
  var e=document.getElementById('countdown_select').value;
  var timeleft=e*60;
  var total_time=e*60;
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
                document.getElementById("words_container").scrollTop+=50;
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
                    scrollTop: $("#result").offset().top});
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
