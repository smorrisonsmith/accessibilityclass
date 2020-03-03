//alert("hello world")
$(document).keydown(function(ev){
    //console.log($("img"))
    //alert("hello world")
    //console.log(ev.keyCode)

    if(ev.keyCode == 66) {
        if($("img").hasClass("bigblueborder"))
        {
            $("img").removeClass("bigblueborder");
            speechSynthesis.speak( new SpeechSynthesisUtterance("Removing blue border from images"))
        }
        else {
            $("img").addClass("bigblueborder");
            speechSynthesis.speak( new SpeechSynthesisUtterance("Adding blue border to images"))
        }

    }


});