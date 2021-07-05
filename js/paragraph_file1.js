var easy_words=['A', 'violent', 'storm', 'rages', 'around', 'a', 'small', 'ship',
'at', 'sea.', 'The', 'master', 'of', 'the', 'ship', 'calls', 'for', 'his',
'boatswain', 'to', 'rouse', 'the', 'mariners', 'to', 'action', 'and', 'prevent',
'the', 'ship', 'from', 'being', 'run', 'aground', 'by', 'the', 'tempest.', 'Chaos',
'ensues.', 'Some', 'mariners', 'enter,', 'followed', 'by', 'a', 'group', 'of', 'nobles',
'comprised', 'of', 'Alonso,', 'King', 'of', 'Naples,', 'Sebastian,', 'his', 'brother,',
'Antonio,', 'Gonzalo,', 'and', 'others.', 'They', 'have', 'just', 'come', 'from',
'Tunis,', 'in', 'Africa,', 'where', 'Alonso’s', 'daughter,', 'Claribel,',
'has', 'been', 'married', 'to', 'the', 'prince.', 'As', 'the', 'Boatswain',
'and', 'his', 'crew', 'take', 'in', 'the', 'topsail', 'and', 'the', 'topmast,',
'Alonso', 'and', 'his', 'party', 'are', 'merely', 'underfoot,', 'and',
'the', 'Boatswain', 'tells', 'them', 'to', 'get', 'below-decks.',
'Gonzalo', 'reminds', 'the', 'Boatswain', 'that', 'one', 'of', 'the',
'passengers', 'is', 'of', 'some', 'importance,', 'but', 'the', 'Boatswain',
'is', 'unmoved.', 'He', 'will', 'do', 'what', 'he', 'has', 'to', 'in', 'order',
'to', 'save', 'the', 'ship,', 'regardless', 'of', 'who', 'is', 'aboard.The',
'lords', 'go', 'belowdecks,', 'and', 'then,', 'adding', 'to', 'the', 'chaos',
'of', 'the', 'scene,', 'three', 'of', 'them—Sebastian,', 'Antonio,',
'and', 'Gonzalo—enter', 'again', 'only', 'four', 'lines', 'later.',
'Sebastian', 'and', 'Antonio', 'curse', 'the', 'Boatswain', 'in', 'his',
'labors,', 'masking', 'their', 'fear', 'with', 'profanity.', 'Some',
'mariners', 'enter', 'wet', 'and', 'crying,', 'and', 'only', 'at', 'this',
'point', 'does', 'the', 'audience', 'learn', 'the', 'identity', 'of',
'the', 'passengers', 'on-board.', 'Gonzalo', 'orders', 'the', 'mariners',
'to', 'pray', 'for', 'the', 'king', 'and', 'the', 'prince.', 'There',
'is', 'a', 'strange', 'noise—perhaps', 'the', 'sound', 'of', 'thunder,',
'splitting', 'wood,', 'or', 'roaring', 'water—and', 'the', 'cry', 'of',
'mariners.', 'Antonio,', 'Sebastian,', 'and', 'Gonzalo,', 'preparing',
'to', 'sink', 'to', 'a', 'watery', 'grave,', 'go', 'in', 'search', 'of', 'the', 'king.']

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
