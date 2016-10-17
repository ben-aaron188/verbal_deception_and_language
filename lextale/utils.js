var lextale_explanation_nl = 'This test consists of about 60 trials, in each of which you will see a string of letters. Your task is to decide whether this is an existing English word or not. If you think it is an existing English word, you press <i>"A" for yes</i>, and if youthink it is not an existing English word, you press on <i>"L" for no</i>.</br></br>If you are sure that the word exists, even though you don’t know its exact meaning, you may still respond "yes". But if you are not sure if it is an existing word, you should respond "no".</br></br>In this experiment, we use British English rather than American English spelling. For example: "realise" instead of "realize"; "colour" instead of "color", and so on. Please don’t let this confuse you. This experiment is not about detecting such subtle spelling differences anyway.</br></br>You have as much time as you like for each decision. This part of the experiment will take about 5 minutes.</br></br>If everything is clear, you can now <u>start the experiment by pressing the space bar</u>.';
var lextale_explanation_nl_key_left = 'A = JA';
var lextale_explanation_nl_key_right = 'L = NEE';

var lextale_explanation_en = 'This test consists of about 60 trials, in each of which you will see a string of letters. Your task is to decide whether this is an existing English word or not. If you think it is an existing English word, you press <i>"A" for yes</i>, and if youthink it is not an existing English word, you press on <i>"L" for no</i>.</br></br>If you are sure that the word exists, even though you don’t know its exact meaning, you may still respond "yes". But if you are not sure if it is an existing word, you should respond "no".</br></br>In this experiment, we use British English rather than American English spelling. For example: "realise" instead of "realize"; "colour" instead of "color", and so on. Please don’t let this confuse you. This experiment is not about detecting such subtle spelling differences anyway.</br></br>You have as much time as you like for each decision. This part of the experiment will take about 5 minutes.</br></br>If everything is clear, you can now <u>start the experiment by pressing the space bar</u>.';
var lextale_explanation_en_key_left = 'A = YES';
var lextale_explanation_en_key_right = 'L = NO';


function calculateScore() {
    Score = ((CorW / 40 * 100) + (CorNW / 20 * 100)) / 2;
}

function listenStartSpaceBar() {
    $(document).keypress(function(e) {
        if (listen_start === true) {
            var code = e.keyCode || e.which;
            console.log('pressed: ' + code);
            if (code === 32) {
                listen_start = false;
                $("#intro, h1").hide();
                setTimeout(function() {
                    $(".stim").show();
                    mainAction();
                }, 1000);
                setTimeout(function() {
                    showStim();
                }, 2000);
            }
        }
    });
}

function end() {
    a_and_l_listener = false;
    $(".stim, #stim_main").hide();
    calculateScore();
    data.stim = Stim;
    data.wstatus = Status;
    data.expresp = Expresp;
    data.actresp = Actresp;
    data.score = Score;
    data.rt = RespTime;
    to_vocabulary_task();
}
