var easy_words=["acceptable","accidentally","accommodate","acquire","acquite",
"amateur","apparent","argument","atheist","believe","calendar","category",
"cemetery","changeable","collectible","column","committed","conscience",
"conscious","consensus","daiquire","definitely","discipline","drunkenness",
"dumbbell","embarrassment","equipment","exhilarate","exceed","existance",
"experience","fiery","foreign","gauge","grateful","guarantee","harass","height",
"heirarchy","humorous","ignorance","immediate","independent","indispensable",
"inoculate","intelligence","its","jewelry","judgement","kernal","leisure",
"liaison","library","license","maintenance","maneuver","medieval","memento",
"millennium","miniature","minuscule","mischievous","misspell","neighbor",
"noticeable","occasionally","occurrence","pastime","perseverance","personnel",
"playwright","possession","precede","principal","privilege","pronunciation",
"publicily","questionnaire","receipt","recommend","referred","reference",
"relevant","rhyme","rhythm","schedule","seperate","sergeant","supersede",
"their","threshold","twelfth","tyranny","until","vacuum","weather","weird"];
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
