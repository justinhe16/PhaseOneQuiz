var tracker = -1;
$(document).ready(function(){
    animateBits(); //animates first PhaseOne:Quiz
    animateBits2(); //animates second PhaseOne:Quiz
    
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src','./assets/spacemusic.mp3');
    audioElement.setAttribute('autoplay','autoplay');
    $.get();
    audioElement.addEventListener("load", function() {
            audioElement.pause();
        }, true);

    //working image change $("html").css("background-image","url('./assets/images/background2.jpg')").hide().fadeIn(1000);

    $("#continue").click(function() { //This function is for the Begin button on the 1st page. The reason this needs its own seperate function is because the 1st question doesn't have a back button.
        if (validateForm() == false) {
            $("#interface").addClass("has-error");
            $("<label for=\"NameProtocol\" class=\"control-label\">You must name yourself, human.</label>").hide().prependTo("#interface").fadeIn(1000);
        }
        else if (validateForm() == true){
            tracker++;
            $("#container").empty();
            $("#container").append("<h2>" + quiz.questions[0].text + "<h2>").hide().fadeIn(1000);
            for(i = 0; i < quiz.questions[0].answers.length; i++){
                $("#container").append("<input type=\"radio\" name=\"answer\">" + quiz.questions[0].answers[i] + "<br>");
            }
            $("#container").append("<input id=\"continue\" type=\"button\" value=\"Next\"></input>");
        }
    });

    $(document).keypress(function(e) { // This function allows it so that you can press enter to continue!
        if (e.which == 13 && tracker == -1){
            if (validateForm() == false) {
            $("#interface").addClass("has-error");
            $("#interface").prepend("<label for=\"NameProtocol\" class=\"control-label\">You must name yourself, human.</label>");
            }
            else if (validateForm() == true){
                tracker++;
                $("#container").empty();
                $("#container").append("<h1>" + quiz.questions[0].text + "<h1>").hide().fadeIn(1000);
                for(i = 0; i < quiz.questions[0].answers.length; i++){
                    $("#container").append("<input type=\"radio\" name=\"answer\">" + quiz.questions[0].answers[i] + "<br>");
                }
                $("#container").append("<input id=\"continue\" type=\"button\" value=\"Next\"></input>");
            }
        }
    });

    $("#container").on("click", "#continue", function(){
        if (tracker >= 0) {
        tracker++;
        $("#container").empty();
        $("#container").append("<h1>" + quiz.questions[tracker].text + "</h1>").hide().fadeIn(1000);
        for(i = 0; i < quiz.questions[tracker].answers.length; i++){
            $("#container").append("<input type=\"radio\" name=\"answer\">" + quiz.questions[tracker].answers[i] + "<br>");
        }
        // add if statement; if traker is less than 1, then dont display back button.
        if(tracker > 0){
            $("#container").append("<input id=\"back\" type=\"button\" value=\"Back\"></input>");  
        }
        if(tracker == (quiz.questions.length - 1)) {
            $("#container").append("<input id=\"grade\" type=\"button\" value=\"Submit\"></input>");
        }
        else {
            $("#container").append("<input id=\"continue\" type=\"button\" value=\"Next\"></input>");
        }
    }
    });

    $("#container").on("click", "#back", function(){
        tracker--;
        $("#container").empty();
        $("#container").append("<h1>" + quiz.questions[tracker].text + "</h1>").hide().fadeIn(1000);
        for(i = 0; i < quiz.questions[tracker].answers.length; i++){
            $("#container").append("<input type=\"radio\" name=\"answer\">" + quiz.questions[tracker].answers[i] + "<br>");
        }
        // add if statement; if traker is less than 1, then dont display back button.
        if(tracker > 0){
            $("#container").append("<input id=\"back\" type=\"button\" value=\"Back\"></input>");  
        }
        if(tracker == (quiz.questions.length - 1)) {
            $("#container").append("<input id=\"grade\" type=\"button\" value=\"Submit\"></input>");
        }
        else {
            $("#container").append("<input id=\"continue\" type=\"button\" value=\"Next\"></input>");
        }
    });

});




// =========== FUNCTIONS BELOW

function animateBits() {
    const BITS_ID = 'bits';
    const BITS_TEXT = 'PhaseOne:Quiz';
    const BITS_ANIMATE_INTERVAL = 75.0;
    const BITS_ANIMATE_DURATION = 1750.0;
    var bitsTextTicks = 0;
    var animateBITS_ID = window.setInterval(function() {
        var len = Math.floor(bitsTextTicks / (BITS_ANIMATE_DURATION / BITS_ANIMATE_INTERVAL) * 15);
        var text = BITS_TEXT;
        for (i = len; i < 13; i++) {
            text = text.substr(0, i) + (Math.random() > 0.5 ? '1' : '0') + text.substr(i + 1);
        }
        document.getElementById(BITS_ID).innerHTML = text;
        bitsTextTicks++;
    }, BITS_ANIMATE_INTERVAL);
    window.setTimeout(function() {
        window.clearInterval(animateBITS_ID);
        document.getElementById(BITS_ID).innerHTML = BITS_TEXT;
    }, BITS_ANIMATE_DURATION);
}

function animateBits2() {
    const BITS_ID = 'bits2';
    const BITS_TEXT = 'PhaseOne:Quiz';
    const BITS_ANIMATE_INTERVAL = 75.0;
    const BITS_ANIMATE_DURATION = 1750.0;
    var bitsTextTicks = 0;
    var animateBITS_ID = window.setInterval(function() {
        var len = Math.floor(bitsTextTicks / (BITS_ANIMATE_DURATION / BITS_ANIMATE_INTERVAL) * 15);
        var text = BITS_TEXT;
        for (i = len; i < 13; i++) {
            text = text.substr(0, i) + (Math.random() > 0.5 ? '1' : '0') + text.substr(i + 1);
        }
        document.getElementById(BITS_ID).innerHTML = text;
        bitsTextTicks++;
    }, BITS_ANIMATE_INTERVAL);
    window.setTimeout(function() {
        window.clearInterval(animateBITS_ID);
        document.getElementById(BITS_ID).innerHTML = BITS_TEXT;
    }, BITS_ANIMATE_DURATION);
}

function validateForm() {
    var x = document.getElementById('NameProtocol');
    if (x.value == null | x.value == "") {
        return false;
    }
    else {
    return true;
}
}
