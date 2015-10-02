var tracker = 0;
$(document).ready(function(){
    animateBits();

    $("#continue").click(function() {
        $("#container").empty();
        $("#container").append("<h1>" + quiz.questions[0].text + "<h1>");
        for(i = 0; i < quiz.questions[0].answers.length; i++){
        $("#container").append("<input type=\"radio\" name=\"answer\">" + quiz.questions[0].answers[i] + "<br>");
        }
        $("#container").append("<input id=\"continue\" type=\"button\" value=\"Next\"></input>");
    });

    $("#container").on("click", "#continue", function(){
        tracker++;
        $("#container").empty();
        $("#container").append("<h1>" + quiz.questions[tracker].text + "</h1>");
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

    $("#container").on("click", "#back", function(){
        tracker--;
        $("#container").empty();
        $("#container").append("<h1>" + quiz.questions[tracker].text + "</h1>");
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
