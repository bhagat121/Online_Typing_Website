var easy_words=["Abacaxi","abgesang","abiuret","advocaat","Aitch","aloisiite",
"atlatl","Autochthonous","bdelloid","bhagavata","bhikku","bobbejaan",
"Cassioberry","catapleiite","chhatri","chiaroscurist","chihuahua","Chlorophyll",
"chthonic","cixiid","cnemidocoptes","cnidoblast","coelacanth","courtoisie",
"Crwth","ctenii","cywydd","dhole","dvandva","Dzungar","eczema","egueiite",
"Eichhornia","eudaemonic","fjeld","gnathonic","gneissoid","gnomonic",
"Gnosticize","jharal","Kharijite","khedive","kiekie","Kierkegaardian",
"knaidlach","Kwakiutl","logorrhea","mbira","mlechchha","Myxosporidiida","ngege",
"ngwee","periscii","pfeffernuss","pfennig","phalaenopsid","phthalein","phthisis",
"Prosciutto","pschent","psephology","pseudaxis","psittaceous","psoriasis",
"Ptarmic","pterodactyl","ptosis","pycnogonid","Qiviut","rhathymia","rhotacismus",
"rijksdaalder","rygbere","sacrilegious","schokker","Sforzando","sgabello",
"shanghaiing","sjambok","soubrette","staphylococci","svedberg","synecdoche",
"taaffeite","taeniid","takkanah","tchaviche","teonanacatl","tjaele","tsao",
"Tsingtao","tzigane","Ursprache","vignette","volksraad","vrbaite",
"weltanschauung","ylem","ytterbium","zuurveldt","zwetschenwasser"];
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
