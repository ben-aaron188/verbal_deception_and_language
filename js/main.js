// globals
var data_array = [];
var data_statement1;
var unid;
var repetition_count = 0;
var conditions;
var timer = 3000;
var time_langtask1 = 2000;

// task flow
$(document).ready(function() {
    init_data();
    getIP();
    $("#intro1").show();
    $("#next").attr('onclick', 'to_informed_consent()');
    get_unid();
});

function to_informed_consent() {
    simple_transition($("#intro1"), $("#informed_consent"));
    $("#next").attr('onclick', 'to_statement_evaluation()');
}

function to_statement_evaluation() {
    $('body').prepend('<div id="statement_explanation">' +
        'Explanation</br>' +
        'GENERAL EXPLANATION' +
        '</div>'
    );
    simple_transition($("#informed_consent"), $("#statement_explanation"));
    $("#next").attr('onclick', 'to_demographics1()');
}

function to_demographics1() {
    simple_transition($("#statement_explanation"), $("#demographics1"));
    $("#next").attr('onclick', 'to_demographics2()');
    define_keys($("#age_sel"), 'number', 2);
}

function to_demographics2() {
    if (check_fields($(".select_menu")) === true) {
        if (has_second_language() === false) {
            $("#lang2").css('display', 'none');
        }
        simple_transition($("#demographics1"), $("#demographics2"));
        // $("#next").attr('onclick', 'to_outro()');
        $("#next").attr('onclick', 'to_main_instructions1()');
    }
}

function to_main_instructions1() {
    conditions = get_cond();
    var text;
    if (conditions.cond_lang === 0) {
        text = 'DUTCH DUTCH DUTCH INSTRUCTION1';
    } else if (conditions.cond_lang == 1) {
        text = 'ENGLISH ENGLISH ENGLISH INSTRUCTION1';
    }
    $('body').prepend('<div id="main_instructions1" class="main_instructions">' + text + '</div>');
    simple_transition($("#demographics2"), $("#main_instructions1"));
    $("#next").attr('onclick', 'to_main_instructions2()');
}

function to_main_instructions2() {
    var text;
    if (conditions.cond_lang === 0) {
        text = 'DUTCH DUTCH DUTCH INSTRUCTION2';
    } else if (conditions.cond_lang == 1) {
        text = 'ENGLISH ENGLISH ENGLISH INSTRUCTION2';
    }
    $('body').prepend('<div id="main_instructions2" class="main_instructions">' + text + '</div>');
    simple_transition($("#main_instructions1"), $("#main_instructions2"));
    $("#next").attr('onclick', 'to_main_instructions3()');
}

function to_main_instructions3() {
    var text;
    if (conditions.cond_lang === 0) {
        text = 'DUTCH DUTCH DUTCH INSTRUCTION3';
    } else if (conditions.cond_lang == 1) {
        text = 'ENGLISH ENGLISH ENGLISH INSTRUCTION3';
    }
    $('body').prepend('<div id="main_instructions3" class="main_instructions">' + text + '</div>');
    simple_transition($("#main_instructions2"), $("#main_instructions3"));
    $("#next").attr('onclick', 'to_main_instructions4()');
}

function to_main_instructions4() {
    var text;
    if (conditions.cond_lang === 0) {
        text = 'DUTCH DUTCH DUTCH INSTRUCTION4';
    } else if (conditions.cond_lang == 1) {
        text = 'ENGLISH ENGLISH ENGLISH INSTRUCTION4';
    }
    $('body').prepend('<div id="main_instructions4" class="main_instructions">' + text + '</div>');
    simple_transition($("#main_instructions3"), $("#main_instructions4"));
    $("#next").attr('onclick', 'to_main_instructions5()');
}

function to_main_instructions5() {
    var text;
    if (conditions.cond_lang === 0) {
        text = 'DUTCH DUTCH DUTCH INSTRUCTION5';
    } else if (conditions.cond_lang == 1) {
        text = 'ENGLISH ENGLISH ENGLISH INSTRUCTION5';
    }
    $('body').prepend('<div id="main_instructions5" class="main_instructions">' + text + '</div>');
    simple_transition($("#main_instructions4"), $("#main_instructions5"));
    $("#next").attr('onclick', 'to_main_instructions6()');
}

function to_main_instructions6() {
    var text;
    var menu1;
    var menu2;
    if (conditions.cond_lang === 0) {
        if (conditions.cb === 0) {
            text = 'INSTRUCTIONS 6 NEDERLANDS</br>REPHRASE --> WHAT ARE YOU GOING TO DO THIS WEEKEND?</br>';
            menu1 = '<div id="activity_future" class="text3">' +
                'Welk van de volgende activiteiten ga je dit weekend doen?' +
                '<select id="acitivity_future_sel" class="select_menu_2" multiple>' +
                '<option value="option1">Option1</option>' +
                '<option value="option2">Option2</option>' +
                '<option value="option3">Option3</option>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_future_non" class="text3">' +
                'Welk van de volgende activiteiten ga je zeker niet doen dit weekend?' +
                '<select id="acitivity_future_non_sel" class="select_menu_2" multiple>' +
                '<option value="option1">Option1</option>' +
                '<option value="option2">Option2</option>' +
                '<option value="option3">Option3</option>' +
                '</select>' +
                '</div>';
        } else if (conditions.cb == 1) {
            text = 'INSTRUCTION 6 NEDERLANDS</br>REPHRASE --> WHAT DID YOU DO LAST WEEKEND?</br>';
            menu1 = '<div id="activity_past" class="text3">' +
                'Welk van de volgende activiteiten heb je afgelopen weekend gedaan?' +
                '<select id="acitivity_past_sel" class="select_menu_2" multiple>' +
                '<option value="option1">Option1</option>' +
                '<option value="option2">Option2</option>' +
                '<option value="option3">Option3</option>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_past_non" class="text3">' +
                'Welk van de volgende activiteiten heb je niet gedaan afgelopen weekend?' +
                '<select id="acitivity_past_non_sel" class="select_menu_2" multiple>' +
                '<option value="option1">Option1</option>' +
                '<option value="option2">Option2</option>' +
                '<option value="option3">Option3</option>' +
                '</select>' +
                '</div>';
        }
    } else if (conditions.cond_lang == 1) {
        if (conditions.cb === 0) {
            text = 'INSTRUCTIONS 6 ENGLISH</br>WHAT ARE YOU GOING TO DO THIS WEEKEND?</br>';
            menu1 = '<div id="activity_future" class="text3">' +
                'Which of the following activities are going to do this weekend?' +
                '<select id="acitivity_future_sel" class="select_menu_2" multiple>' +
                '<option value="option1">Option1</option>' +
                '<option value="option2">Option2</option>' +
                '<option value="option3">Option3</option>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_future_non" class="text3">' +
                'Which of the following activities are you definitely not going to do?' +
                '<select id="acitivity_future_non_sel" class="select_menu_2" multiple>' +
                '<option value="option1">Option1</option>' +
                '<option value="option2">Option2</option>' +
                '<option value="option3">Option3</option>' +
                '</select>' +
                '</div>';
        } else if (conditions.cb == 1) {
            text = 'INSTRUCTION 6 ENGLISH</br>WHAT DID YOU DO LAST WEEKEND?</br>';
            menu1 = '<div id="activity_past" class="text3">' +
                'Which of the following acitivities did you do last weekend?' +
                '<select id="acitivity_past_sel" class="select_menu_2" multiple>' +
                '<option value="option1">Option1</option>' +
                '<option value="option2">Option2</option>' +
                '<option value="option3">Option3</option>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_past_non" class="text3">' +
                'Which of the following activities did you not do last weekend?' +
                '<select id="acitivity_past_non_sel" class="select_menu_2" multiple>' +
                '<option value="option1">Option1</option>' +
                '<option value="option2">Option2</option>' +
                '<option value="option3">Option3</option>' +
                '</select>' +
                '</div>';
        }
    }
    $('body').prepend('<div id="main_instructions6" class="main_instructions_">' + text + menu1 + menu2 + '</div>');
    simple_transition($("#main_instructions5"), $("#main_instructions6"));
    $("#next").attr('onclick', 'to_main_instructions7()');
}


function to_main_instructions7() {
    if (check_multi_select() === true) {
        var items_for_rating;
        var table_rows;
        var a;
        if (conditions.cb === 0) {
            items_for_rating = collect_selected('future');
        } else if (conditions.cb == 1) {
            items_for_rating = collect_selected('past');
        }
        $('body').prepend('<div id="main_instructions7" class="main_instructions_"></div>');

        $(items_for_rating).each(function(index, val) {
            if (conditions.cb === 0) {
                a = generate_table_row(index, val, 'future');
                $('#main_instructions7').append(a);
            } else if (conditions.cb == 1) {
                a = generate_table_row(index, val, 'past');
                $('#main_instructions7').append(a);
            }

        });

        simple_transition($("#main_instructions6"), $("#main_instructions7"));
        $("#next").attr('onclick', 'to_model_statement1()');
    }
}


function to_model_statement1() {
    if (check_slider($(".slider_io_output")) === true) {
        var text;
        var modelstatement;
        if (conditions.cond_lang === 0) {
            text = 'DUTCH DUTCH DUTCH INSTRUCTION MODELSTATEMENT';
            modelstatement = modelstatement_nl;
        } else if (conditions.cond_lang == 1) {
            text = 'ENGLISH ENGLISH ENGLISH MODELSTATEMENT';
            modelstatement = modelstatement_en;
        }
        $('body').prepend('<div id="model_statement1" class="main_instructions_">' + text + modelstatement + '</div>');
        simple_transition($("#main_instructions7"), $("#model_statement1"));
        $("#next").attr('onclick', 'to_text_input_instructions1()').hide();
        setTimeout(function() {
            $("#next").show();
        }, timer);
    }
}

function to_text_input_instructions1() {
    var text;
    if (conditions.cond_lang === 0) {
        text = 'DUTCH DUTCH DUTCH INSTRUCTION BEFORE TEXT INPUT';
    } else if (conditions.cond_lang == 1) {
        text = 'ENGLISH ENGLISH ENGLISH INSTRUCTION BEFORE TEXT INPUT';
    }
    $('body').prepend('<div id="text_input_instructions_1" class="main_instructions_">' + text + '</div>');
    simple_transition($("#model_statement1"), $("#text_input_instructions_1"));
    $("#next").attr('onclick', 'to_statement_input1()');
}

function to_statement_input1() {
    var instructive;
    if (conditions.cb === 0) {
        instructive = select_manipulation('future');
    } else if (conditions.cb == 1) {
        instructive = select_manipulation('past');
    }
    console.log(instructive);

    var input_field = '<textarea type="text" rows="10" cols="80" class="text_input1" id="statement1" placehoder="your answer"></textarea>';

    $('body').prepend('<div id="statement_input1" class="main_instructions_">HERE COMES THE INPUT FIELD.' + input_field + '</div>');
    simple_transition($("#text_input_instructions_1"), $("#statement_input1"));
    $("#next").attr('onclick', 'to_main_instructions8()');

    // check input length & meaningfulness
}

function to_main_instructions8() {
    if (validate_text($("#statement1"), 10, 'both') === true) {
        var text;
        var menu1;
        var menu2;
        if (conditions.cond_lang === 0) {
            if (conditions.cb == 1) {
                text = 'INSTRUCTIONS 8 NEDERLANDS</br>REPHRASE --> WHAT ARE YOU GOING TO DO THIS WEEKEND?</br>';
                menu1 = '<div id="activity_future" class="text3">' +
                    'Welk van de volgende activiteiten ga je dit weekend doen?' +
                    '<select id="acitivity_future_sel" class="select_menu_2" multiple>' +
                    '<option value="option1">Option1</option>' +
                    '<option value="option2">Option2</option>' +
                    '<option value="option3">Option3</option>' +
                    '</select>' +
                    '</div>';
                menu2 = '<div id="activity_future_non" class="text3">' +
                    'Welk van de volgende activiteiten ga je zeker niet doen dit weekend?' +
                    '<select id="acitivity_future_non_sel" class="select_menu_2" multiple>' +
                    '<option value="option1">Option1</option>' +
                    '<option value="option2">Option2</option>' +
                    '<option value="option3">Option3</option>' +
                    '</select>' +
                    '</div>';
            } else if (conditions.cb === 0) {
                text = 'INSTRUCTION 8 NEDERLANDS</br>REPHRASE --> WHAT DID YOU DO LAST WEEKEND?</br>';
                menu1 = '<div id="activity_past" class="text3">' +
                    'Welk van de volgende activiteiten heb je afgelopen weekend gedaan?' +
                    '<select id="acitivity_past_sel" class="select_menu_2" multiple>' +
                    '<option value="option1">Option1</option>' +
                    '<option value="option2">Option2</option>' +
                    '<option value="option3">Option3</option>' +
                    '</select>' +
                    '</div>';
                menu2 = '<div id="activity_past_non" class="text3">' +
                    'Welk van de volgende activiteiten heb je niet gedaan afgelopen weekend?' +
                    '<select id="acitivity_past_non_sel" class="select_menu_2" multiple>' +
                    '<option value="option1">Option1</option>' +
                    '<option value="option2">Option2</option>' +
                    '<option value="option3">Option3</option>' +
                    '</select>' +
                    '</div>';
            }
        } else if (conditions.cond_lang == 1) {
            if (conditions.cb == 1) {
                text = 'INSTRUCTIONS 8 ENGLISH</br>WHAT ARE YOU GOING TO DO THIS WEEKEND?</br>';
                menu1 = '<div id="activity_future" class="text3">' +
                    'Which of the following activities are going to do this weekend?' +
                    '<select id="acitivity_future_sel" class="select_menu_2" multiple>' +
                    '<option value="option1">Option1</option>' +
                    '<option value="option2">Option2</option>' +
                    '<option value="option3">Option3</option>' +
                    '</select>' +
                    '</div>';
                menu2 = '<div id="activity_future_non" class="text3">' +
                    'Which of the following activities are you definitely not going to do?' +
                    '<select id="acitivity_future_non_sel" class="select_menu_2" multiple>' +
                    '<option value="option1">Option1</option>' +
                    '<option value="option2">Option2</option>' +
                    '<option value="option3">Option3</option>' +
                    '</select>' +
                    '</div>';
            } else if (conditions.cb === 0) {
                text = 'INSTRUCTION 8 ENGLISH</br>WHAT DID YOU DO LAST WEEKEND?</br>';
                menu1 = '<div id="activity_past" class="text3">' +
                    'Which of the following acitivities did you do last weekend?' +
                    '<select id="acitivity_past_sel" class="select_menu_2" multiple>' +
                    '<option value="option1">Option1</option>' +
                    '<option value="option2">Option2</option>' +
                    '<option value="option3">Option3</option>' +
                    '</select>' +
                    '</div>';
                menu2 = '<div id="activity_past_non" class="text3">' +
                    'Which of the following activities did you not do last weekend?' +
                    '<select id="acitivity_past_non_sel" class="select_menu_2" multiple>' +
                    '<option value="option1">Option1</option>' +
                    '<option value="option2">Option2</option>' +
                    '<option value="option3">Option3</option>' +
                    '</select>' +
                    '</div>';
            }
        }
        $('body').prepend('<div id="main_instructions8" class="main_instructions_">' + text + menu1 + menu2 + '</div>');
        simple_transition($("#statement_input1"), $("#main_instructions8"));
        $("#next").attr('onclick', 'to_main_instructions9()');
    }
}

function to_main_instructions9() {
    if (check_multi_select() === true) {
        var items_for_rating;
        var table_rows;
        var a;
        if (conditions.cb == 1) {
            items_for_rating = collect_selected('future');
        } else if (conditions.cb === 0) {
            items_for_rating = collect_selected('past');
        }
        $('body').prepend('<div id="main_instructions9" class="main_instructions_"></div>');

        $(items_for_rating).each(function(index, val) {
            if (conditions.cb == 1) {
                a = generate_table_row(index, val, 'future');
                $('#main_instructions9').append(a);
            } else if (conditions.cb === 0) {
                a = generate_table_row(index, val, 'past');
                $('#main_instructions9').append(a);
            }
        });
        simple_transition($("#main_instructions8"), $("#main_instructions9"));
        $("#next").attr('onclick', 'to_model_statement2()');
    }
}

function to_model_statement2() {
    if (check_slider($(".slider_io_output")) === true) {
        var text;
        var modelstatement;
        if (conditions.cond_lang === 0) {
            text = 'DUTCH DUTCH DUTCH INSTRUCTION MODELSTATEMENT';
            modelstatement = modelstatement_nl;
        } else if (conditions.cond_lang == 1) {
            text = 'ENGLISH ENGLISH ENGLISH MODELSTATEMENT';
            modelstatement = modelstatement_en;
        }
        $('body').prepend('<div id="model_statement2" class="main_instructions_">' + text + modelstatement + '</div>');
        simple_transition($("#main_instructions9"), $("#model_statement2"));
        $("#next").attr('onclick', 'to_text_input_instructions2()').hide();
        setTimeout(function() {
            $("#next").show();
        }, timer);
    }
}

function to_text_input_instructions2() {
    var text;
    if (conditions.cond_lang === 0) {
        text = 'DUTCH DUTCH DUTCH INSTRUCTION BEFORE TEXT INPUT';
    } else if (conditions.cond_lang == 1) {
        text = 'ENGLISH ENGLISH ENGLISH INSTRUCTION BEFORE TEXT INPUT';
    }
    $('body').prepend('<div id="text_input_instructions_2" class="main_instructions_">' + text + '</div>');
    simple_transition($("#model_statement2"), $("#text_input_instructions_2"));
    $("#next").attr('onclick', 'to_statement_input2()');
}

function to_statement_input2() {
    var instructive;
    if (conditions.cb == 1) {
        instructive = select_manipulation('future');
    } else if (conditions.cb === 0) {
        instructive = select_manipulation('past');
    }
    console.log(instructive);

    var input_field = '<textarea type="text" rows="10" cols="80" class="text_input1" id="statement2" placehoder="your answer"></textarea>';

    $('body').prepend('<div id="statement_input2" class="main_instructions_">HERE COMES THE INPUT FIELD.' + input_field + '</div>');
    simple_transition($("#text_input_instructions_2"), $("#statement_input2"));
    $("#next").attr('onclick', 'to_lextale()');
}


function to_lextale() {
    if (validate_text($("#statement2"), 10, 'both') === true) {
        var lextale_explanation;
        var lextale_explanation_key_right;
        var lextale_explanation_key_left;
        if (conditions.cond_lang === 0) {
            language = 'nl';
            lextale_explanation = lextale_explanation_nl;
            lextale_explanation_key_right = lextale_explanation_nl_key_right;
            lextale_explanation_key_left = lextale_explanation_nl_key_left;
        } else if (conditions.cond_lang == 1) {
            language = 'en';
            lextale_explanation = lextale_explanation_en;
            lextale_explanation_key_right = lextale_explanation_en_key_right;
            lextale_explanation_key_left = lextale_explanation_en_key_left;
        }
        var lextale_main_dom = '<div id="intro" class="text1" style="font-size: 1.2vw">' + lextale_explanation +
            '</div>' +
            '<p id="stim_key_left" class="stim">' + lextale_explanation_key_left +
            '</p>' +
            '<p id="stim_key_right" class="stim">' + lextale_explanation_key_right +
            '</p>' +
            '<div id="stim_main">' +
            '<div id="stim_stim">' +
            '</div>' +
            '</div>' +
            '<div id="outro">' +
            '</div>';
        $('body').prepend('<div id="lextale1" class="wrapper0">' + lextale_main_dom + '</div>');
        simple_transition($("#statement_input2"), $("#lextale1"));
        $("#next").hide();
        init_main();
    }
}

function to_vocabulary_task() {
    var vocabulary_task_explanation;
    if (conditions.cond_lang === 0) {
        vocabulary_task_explanation = vocabulary_task_explanation_nl;
    } else if (conditions.cond_lang == 1) {
        vocabulary_task_explanation = vocabulary_task_explanation_en;
    }

    var vocabulary_task_dom = '<textarea class="textbox_" id="tbwordprod" rows="10" cols="80"></textarea>';

    simple_transition($("#lextale1"), $("#langtask1"));
    $("#next").hide();
    $('body').prepend('<div id="langtask1" class="main_instructions_">' + vocabulary_task_explanation + vocabulary_task_dom + '</div>');
    init_language_task1($("#tbwordprod"), time_langtask1);
    // $("#next").attr('onclick', 'to_outro()');
}

function to_outro() {
    var outro_dom = 'Your participation code: <span id=partcode style="color: red">9871NO</span></br></br>' +
        '<span id="debr">Thank you for taking part in this study. NEW DEBRIEFING!!!!</span></br></br>' +
        'In order to validate your participation, it is necessary that you provide your UvA Student number below in the left hand-field and confirm your participation code in the middle text field.' +
        '<input type="text" id="crowdf" name="crowdf" class="select_menu" maxlength="40" size="16" style="text-align: center; left: 20%; top: 85%; height: 10%; width: 25%;" placeholder="YOUR UVA STUDENT NUMBER">' +
        '<input type="text" id="unidin" name="unidin" class="select_menu" maxlength="6" size="16" style="text-align: center; left: 50%; top: 85%; height: 10%; width: 25%; color: red" placeholder="PARTICIPATION CODE">';

    var credits_dom = '<div id="credits">' +
        'University of Amsterdam // Bennett Kleinberg: <a href="mailto:b.a.r.kleinberg@uva.nl?Subject=Online%20Experiment" target="_top">b.a.r.kleinberg@uva.nl</a>' +
        '</div>';

    simple_transition($("#langtask1"), $("#outro"));
    $('body').prepend('<div id="outro" class="main_instructions_">' + outro_dom + '</div>' + credits_dom);
    $("#partcode").text(unid);
    $("#next").show();
    $("#next").text('SEND');
    $("#next").attr('onclick', 'send_to_server()');
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
    data.cond_lang = conditions.cond_lang;
    data.cond_ver = conditions.cond_ver;
    data.cb = conditions.cb;

    data.activity_past = 'xxx';
    data.n_activities_past = '12345';
    data.activity_past_freq = '12345';
    data.activity_past_cert = '12345';

    data.activity_future = 'xxx';
    data.n_activities_future = '12345';
    data.activity_future_freq = '12345';
    data.activity_future_cert = '12345';

    data.statement1_content = statement1.content;
    data.statement1_defoucus = pagefocus_statement1.defocus;
    data.statement1_refoucus = pagefocus_statement1.refocus;
    data.statement1_defocusduration = pagefocus_statement1.durationsum;
    data.statement1_length = statement1.length;
    data.statement1_elapsed = statement1.elapsed;

    data.statement2_content = statement2.content;
    data.statement2_defoucus = pagefocus_statement2.defocus;
    data.statement2_refoucus = pagefocus_statement2.refocus;
    data.statement2_defocusduration = pagefocus_statement2.durationsum;
    data.statement2_length = statement2.length;
    data.statement2_elapsed = statement2.elapsed;

    console.log(data);
}
