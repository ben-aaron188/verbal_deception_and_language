// globals
var data_array = [];
var data_statement1;
var unid;
var cond = randomdigit(0,1);
var repetition_count = 0;

function randomdigit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// task flow
$(document).ready(function () {
    init_data();
    getIP();
    $("#intro1").show();
    $("#next").attr('onclick', 'to_informed_consent()');
});


function to_informed_consent() {
    simple_transition($("#intro1"), $("#informed_consent"));
    $("#next").attr('onclick', 'to_statement_evaluation()');
}

function activate_stretch() {
    $('.stretch').each(function () {
        $(this).stretch_text();
    });
}

function to_statement_evaluation() {
    $('body').prepend('<div id="statement_explanation">' +
        'Explanation</br>' +
        '!!!!!!!!!!!!!!!!! You will now read descriptions of persons and cities - one at a time. Your task is to identify the person or city that is described without looking up any information. Please do your best to correctly identify the person or city.</br>' +
        'Please take your time with each description. You can only proceed with the task after a set time to ensure that you can take sufficient time.</br></br>' +
        'If you do not adhere to the instructions, you will have to start the task again.</br>' +
        '</div>'
    );
    simple_transition($("#informed_consent"), $("#statement_explanation"));
    $("#next").attr('onclick', 'to_main_instructions1()');
        // to statement
}

// set instructions per condition
// add timer
// add word check
// add word limit counter

function to_main_instructions1() {
    $('body').prepend('<div id="main_instructions1" class="main_instructions">' +
        'INSTRUCTION1</br>' +
        '!!!!!!!!!!!!!!!!! You will now read descriptions of persons and cities - one at a time. Your task is to identify the person or city that is described without looking up any information. Please do your best to correctly identify the person or city.</br>' +
        'Please take your time with each description. You can only proceed with the task after a set time to ensure that you can take sufficient time.</br></br>' +
        'If you do not adhere to the instructions, you will have to start the task again.</br>' +
        '</div>'
    );
    simple_transition($("#statement_explanation"), $("#main_instructions1"));
    $("#next").attr('onclick', 'to_main_instructions2()');
        // to statement
}

function to_main_instructions2() {
    $('body').prepend('<div id="main_instructions2" class="main_instructions">' +
        'INSTRUCTION2</br>' +
        '!!!!!!!!!!!!!!!!! You will now read descriptions of persons and cities - one at a time. Your task is to identify the person or city that is described without looking up any information. Please do your best to correctly identify the person or city.</br>' +
        'Please take your time with each description. You can only proceed with the task after a set time to ensure that you can take sufficient time.</br></br>' +
        'If you do not adhere to the instructions, you will have to start the task again.</br>' +
        '</div>'
    );
    simple_transition($("#main_instructions1"), $("#main_instructions2"));
    $("#next").attr('onclick', 'to_main_instructions3()');
        // to statement
}

function to_main_instructions3() {
    $('body').prepend('<div id="main_instructions3" class="main_instructions">' +
        'INSTRUCTION3</br>' +
        '!!!!!!!!!!!!!!!!! You will now read descriptions of persons and cities - one at a time. Your task is to identify the person or city that is described without looking up any information. Please do your best to correctly identify the person or city.</br>' +
        'Please take your time with each description. You can only proceed with the task after a set time to ensure that you can take sufficient time.</br></br>' +
        'If you do not adhere to the instructions, you will have to start the task again.</br>' +
        '</div>'
    );
    simple_transition($("#main_instructions2"), $("#main_instructions3"));
    $("#next").attr('onclick', 'to_main_instructions4()');
        // to statement
}

function to_main_instructions4() {
    $('body').prepend('<div id="main_instructions4" class="main_instructions">' +
        'INSTRUCTION4</br>' +
        '!!!!!!!!!!!!!!!!! You will now read descriptions of persons and cities - one at a time. Your task is to identify the person or city that is described without looking up any information. Please do your best to correctly identify the person or city.</br>' +
        'Please take your time with each description. You can only proceed with the task after a set time to ensure that you can take sufficient time.</br></br>' +
        'If you do not adhere to the instructions, you will have to start the task again.</br>' +
        '</div>'
    );
    simple_transition($("#main_instructions3"), $("#main_instructions4"));
    $("#next").attr('onclick', 'to_main_instructions5()');
        // to statement
}

function to_main_instructions5() {
    $('body').prepend('<div id="main_instructions5" class="main_instructions">' +
        'INSTRUCTION5</br>' +
        '!!!!!!!!!!!!!!!!! You will now read descriptions of persons and cities - one at a time. Your task is to identify the person or city that is described without looking up any information. Please do your best to correctly identify the person or city.</br>' +
        'Please take your time with each description. You can only proceed with the task after a set time to ensure that you can take sufficient time.</br></br>' +
        'If you do not adhere to the instructions, you will have to start the task again.</br>' +
        '</div>'
    );
    simple_transition($("#main_instructions4"), $("#main_instructions5"));
    $("#next").attr('onclick', 'to_main_statements()');
        // to statement
}

function add_statement(number, content, category) {
    var header = "The model statement";
    if (!$('#statement' + number + '_wrapper').length) {
        pagefocus_reset();
        $('body').prepend(
          // more info!!
            '<div class="statement_wrapper" id="statement' + number + '_wrapper">' +
            '<div class="statement_header" id="statement' + number + '_header">' + header +
            '</div>' +
            '<div class="statement_content" id="statement' + number + '_content">' + content +
            '</div>' +
            '</div>'
        );
    }
    // activate_stretch();
}

function to_main_statements() {
    get_unid(repetition_count);
    to_statement1();
}

function to_statement1() {
  // ADD INSTRUCTIONS
    get_content(0, function (data) {
        data_statement1 = data;
        add_statement(1, data_statement1.content, data_statement1.category_str);
    });
    simple_transition($("#statement_explanation"), $("#statement1_wrapper"));
    $("#next").attr('onclick', 'to_transition()');
}

function to_transition() {
    if (check_choice($(".text_input1_text"))) {
        data_array.push({
            content: data_statement4,
            statementid: data_statement4.id,
            evaluation: {
                certainty: $("#statement4_certainty").val(),
                choice: $("#statement4_choice").val()
            }
        });
        pagefocus_statement4 = pagefocus_get_data();
        simple_transition($("#statement4_wrapper"), $("#transition1"));
        $("#next").attr('onclick', 'to_demographics1()');
    }
}

function to_demographics1() {
    simple_transition($("#transition1"), $("#demographics1"));
    $("#next").attr('onclick', 'to_demographics2()');
    define_keys($("#age_sel"), 'number', 2);
}

function to_demographics2() {
    if (check_fields($(".select_menu")) === true) {
        if (has_second_language() === false) {
            $("#lang2").css('display', 'none');
        }
        simple_transition($("#demographics1"), $("#demographics2"));
        $("#next").attr('onclick', 'to_outro()');
    }
}

function to_outro() {
    if (check_fields($(".select_menu")) === true) {
        simple_transition($("#demographics2"), $("#outro"));
        $("#partcode").text(unid);
        // $("#next").show();
        $("#next").text('SEND');
        $("#next").attr('onclick', 'send_to_server()');
    }
}

function get_data() {
    data.ip = clientip;
    data.browsername = $.browser.name;
    data.browserversion = $.browser.version;
    data.ts_time = moment().format('LTS');
    data.ts_date = moment().format('l');
    data.unid = unid;
    data.unidin = $("#unidin").val();
    data.crowdf = $("#crowdf").val();
    data.gender = $("#gender_sel").val();
    data.age = $("#age_sel").val();
    data.education = $("#education_sel").val();
    data.origin = $("#origin_sel").val();
    data.bilingual_sel = $("#bilingual_sel").val();
    data.lang1_sel = $("#lang1_sel").val();
    data.lang2_sel = $("#lang2_sel").val();
    data.cond = cond;

    data.statement1_content = data_array[0].content.content;
    data.statement1_eval_defoucus = pagefocus_statement1.defocus;
    data.statement1_eval_refoucus = pagefocus_statement1.refocus;
    data.statement1_eval_defocusduration = pagefocus_statement1.durationsum;


    console.log(data);
}
