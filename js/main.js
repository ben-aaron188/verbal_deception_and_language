// globals
var data_array = [];
var data_statement1;
var unid;
var repetition_count = 0;
var conditions;
var timer_ms1 = 60000; //90000
var timer_ms2 = 300;
var time_langtask1 = 90000;
var quiz_order = [0, 1, 2, 3, 4, 5, 6, 7];
var min_char = 80;

function add_input_listener(classname) {
    classname.each(function() {
        if ($(this).is(":visible")) {
            $(this).on("input", function() {
                $(this).prop('moved', true);
            });
            // console.log("added listener to " + this.id);
        }
    });
}


// task flow
$(document).ready(function() {
    init_data();
    getIP();
    var text = introduction;
    $('body').prepend('<div id="intro1" class="main_instructions_">' + text + '</div>' + buttons1);
    $("#intro1").show();
    $("#back").hide();
    // $("#next").attr('onclick', 'to_informed_consent()');
    $("#next").attr('onclick', 'to_main_instructions1()').hide();
    get_unid();
});

// function to_informed_consent() {
//     $(".simple_button").hide();
//     $("#next").show();
//     conditions = get_cond();
//     $("#back").hide();
//     var text = ic;
//     $('body').prepend('<div id="informed_consent" class="main_instructions_">' + text + '</div>');
//     simple_transition_2($(".main_instructions_"), $("#informed_consent"));
//     $("#next").attr('onclick', 'to_main_instructions1()');
// }

function to_main_instructions1() {
    $(".simple_button").hide();
    conditions = get_cond();
    var text;
    if (conditions.cond_lang === 0) {
        text = instructions_general1_nl;
    } else if (conditions.cond_lang == 1) {
        text = instructions_general1_en;
    }
    $("#next").show();
    $("#back").hide();
    $('body').prepend('<div id="main_instructions1" class="main_instructions_">' + text + '</div>');
    simple_transition_2($(".main_instructions_"), $("#main_instructions1"));
    $("#next").attr('onclick', 'to_main_instructions2()');
    $("#back").attr('onclick', 'to_informed_consent()');
}

function to_main_instructions2() {
    var text;
    if (conditions.cond_lang === 0) {
        text = instructions_general2_nl;
    } else if (conditions.cond_lang == 1) {
        text = instructions_general2_en;
    }
    $('body').prepend('<div id="main_instructions2" class="main_instructions_">' + text + '</div>');
    simple_transition_2($(".main_instructions_"), $("#main_instructions2"));
    $("#next").attr('onclick', 'to_main_instructions6()');
    $("#back").attr('onclick', 'to_main_instructions1()');
}


function to_main_instructions6() {
    var text;
    var menu1;
    var menu2;
    if (conditions.cond_lang === 0) {
        if (conditions.time === 0) {
            text = instructions_nextweekend_nl;
            menu1 = '<div id="activity_future" class="text3">' +
                'Welk van de volgende activiteiten ga je dit weekend doen?' +
                '<select id="activity_future_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_future_non" class="text3">' +
                'Welk van de volgende activiteiten ga je zeker niet doen dit weekend? Kies ten minste drie opties.' +
                '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
        } else if (conditions.time == 1) {
            text = instructions_pastweekend_nl;
            menu1 = '<div id="activity_future" class="text3">' +
                'Welk van de volgende activiteiten heb je afgelopen weekend gedaan?' +
                '<select id="activity_future_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_future_non" class="text3">' +
                'Welk van de volgende activiteiten heb je niet gedaan afgelopen weekend?' +
                '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
        }
    } else if (conditions.cond_lang == 1) {
        if (conditions.time === 0) {
            text = instructions_nextweekend_en;
            menu1 = '<div id="activity_future" class="text3">' +
                'Which of the following activities are going to do this weekend?' +
                '<select id="activity_future_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_future_non" class="text3">' +
                'Which of the following activities are you definitely not going to do next weekend? Select at least three options.' +
                '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
        } else if (conditions.time == 1) {
            text = instructions_pastweekend_en;
            menu1 = '<div id="activity_past" class="text3">' +
                'Which of the following acitivities did you do last weekend?' +
                '<select id="activity_past_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_past_non" class="text3">' +
                'Which of the following activities did you not do last weekend?' +
                '<select id="activity_past_non_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
        }
    }
    setTimeout(function() {
        populate_select_from_json($("#activity_future_sel"), conditions.cond_lang);
        populate_select_from_json($("#activity_future_non_sel"), conditions.cond_lang);
    }, 100);
    $('body').prepend('<div id="main_instructions6" class="main_instructions_">' + text + menu1 + menu2 + '</div>');
    simple_transition_2($(".main_instructions_"), $("#main_instructions6"));
    $("#next").attr('onclick', 'to_main_instructions7()');
    $("#back").attr('onclick', 'to_main_instructions2()');
}

function to_main_instructions6_proxy() {
    var text;
    var menu1;
    var menu2;
    if (conditions.cond_lang === 0) {
        if (conditions.time === 0) {
            text = instructions_nextweekend_nl;
            menu1 = '<div id="activity_future" class="text3">' +
                'Welk van de volgende activiteiten ga je dit weekend doen?' +
                '<select id="activity_future_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_future_non" class="text3">' +
                'Welk van de volgende activiteiten ga je zeker niet doen dit weekend? Kies ten minste drie opties.' +
                '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
        } else if (conditions.time == 1) {
            text = instructions_pastweekend_nl;
            menu1 = '<div id="activity_future" class="text3">' +
                'Welk van de volgende activiteiten heb je afgelopen weekend gedaan?' +
                '<select id="activity_future_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_future_non" class="text3">' +
                'Welk van de volgende activiteiten heb je niet gedaan afgelopen weekend?' +
                '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
        }
    } else if (conditions.cond_lang == 1) {
        if (conditions.time === 0) {
            text = instructions_nextweekend_en;
            menu1 = '<div id="activity_future" class="text3">' +
                'Which of the following activities are going to do this weekend?' +
                '<select id="activity_future_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_future_non" class="text3">' +
                'Which of the following activities are you definitely not going to do next weekend? Select at least three options.' +
                '<select id="activity_future_non_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
        } else if (conditions.time == 1) {
            text = instructions_pastweekend_en;
            menu1 = '<div id="activity_past" class="text3">' +
                'Which of the following acitivities did you do last weekend?' +
                '<select id="activity_past_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
            menu2 = '<div id="activity_past_non" class="text3">' +
                'Which of the following activities did you not do last weekend?' +
                '<select id="activity_past_non_sel" class="select_menu_2" multiple>' +
                '</select>' +
                '</div>';
        }
    }
    setTimeout(function() {
        populate_select_from_json($("#activity_future_sel"), conditions.cond_lang);
        populate_select_from_json($("#activity_future_non_sel"), conditions.cond_lang);
    }, 100);
    $('body').prepend('<div id="main_instructions6" class="main_instructions_">' + text + menu1 + menu2 + '</div>');
    simple_transition_2($(".main_instructions__"), $("#main_instructions6"));
    $("#next").attr('onclick', 'to_main_instructions7()');
    $("#back").attr('onclick', 'to_main_instructions2()');
}


function to_main_instructions7() {
    if (check_multi_select_3(conditions.cond_lang, 4) === true) {
        if (find_duplicates_in_array() === true) {
            var items_for_rating;
            var items_for_rating_3;
            var table_rows;
            var a;
            var text;
            if (conditions.cond_lang === 0) {
                if (conditions.time === 0) {
                    items_for_rating = collect_selected('future', 'do');
                    text = slider_text_nextweekend_do_nl;
                } else if (conditions.time == 1) {
                    items_for_rating = collect_selected('past', 'do');
                    text = slider_text_pastweekend_do_nl;
                }
            } else if (conditions.cond_lang == 1) {
                if (conditions.time === 0) {
                    items_for_rating = collect_selected('future', 'do');
                    text = slider_text_nextweekend_do_en;
                } else if (conditions.time == 1) {
                    items_for_rating = collect_selected('past', 'do');
                    text = slider_text_pastweekend_do_en;
                }
            }

            $('body').prepend('<div id="main_instructions7" class="main_instructions__">' + text + '</div>');
            if (items_for_rating.length > 2) {
                var items_for_rating_3_proxy = shuffle(items_for_rating);
                items_for_rating_3 = items_for_rating_3_proxy.slice(0, 3);
            } else {
                items_for_rating_3 = items_for_rating;
            }
            $(items_for_rating_3).each(function(index, val) {
                if (conditions.time === 0) {
                    a = generate_table_row(index, val, 'future', conditions.cond_lang, 'do');
                    $('#main_instructions7').append(a);
                } else if (conditions.time == 1) {
                    a = generate_table_row(index, val, 'past', conditions.cond_lang, 'do');
                    $('#main_instructions7').append(a);
                }
            });
            activate_stretch();
            simple_transition_2($(".main_instructions_"), $("#main_instructions7"));
            add_input_listener($(".slider_io_slider"));
            $("#next").attr('onclick', 'to_main_instructions7a()');
            $("#back").attr('onclick', 'to_main_instructions6_proxy()').show();
        }
    }
}

function to_main_instructions7_proxy() {
    // if (check_multi_select_2(conditions.cond_lang) === true) {
    if (find_duplicates_in_array() === true) {
        var items_for_rating;
        var items_for_rating_3;
        var table_rows;
        var a;
        var text;
        if (conditions.cond_lang === 0) {
            if (conditions.time === 0) {
                items_for_rating = collect_selected('future', 'do');
                text = slider_text_nextweekend_do_nl;
            } else if (conditions.time == 1) {
                items_for_rating = collect_selected('past', 'do');
                text = slider_text_pastweekend_do_nl;
            }
        } else if (conditions.cond_lang == 1) {
            if (conditions.time === 0) {
                items_for_rating = collect_selected('future', 'do');
                text = slider_text_nextweekend_do_en;
            } else if (conditions.time == 1) {
                items_for_rating = collect_selected('past', 'do');
                text = slider_text_pastweekend_do_en;
            }
        }
        $('body').prepend('<div id="main_instructions7" class="main_instructions__">' + text + '</div>');
        if (items_for_rating.length > 2) {
            var items_for_rating_3_proxy = shuffle(items_for_rating);
            items_for_rating_3 = items_for_rating_3_proxy.slice(0, 3);
        } else {
            items_for_rating_3 = items_for_rating;
        }
        $(items_for_rating_3).each(function(index, val) {
            if (conditions.time === 0) {
                a = generate_table_row(index, val, 'future', conditions.cond_lang, 'do');
                $('#main_instructions7').append(a);
            } else if (conditions.time == 1) {
                a = generate_table_row(index, val, 'past', conditions.cond_lang, 'do');
                $('#main_instructions7').append(a);
            }
        });
        activate_stretch();
        simple_transition_2($(".main_instructions__"), $("#main_instructions7"));
        add_input_listener($(".slider_io_slider"));
        $("#next").attr('onclick', 'to_main_instructions7a()');
        $("#back").attr('onclick', 'to_main_instructions6_proxy()').show();
    }
    // }
}


function to_main_instructions7a() {
    if (check_slider_with_listener($(".slider_io_slider")) === true) {
        var items_for_rating;
        var items_for_rating_3;
        var table_rows;
        var a;
        var text;
        if (conditions.cond_lang === 0) {
            if (conditions.time === 0) {
                items_for_rating = collect_selected('future', 'notdo');
                text = slider_text_nextweekend_notdo_nl;
            } else if (conditions.time == 1) {
                items_for_rating = collect_selected('past', 'notdo');
                text = slider_text_pastweekend_notdo_nl;
            }

        } else if (conditions.cond_lang == 1) {
            if (conditions.time === 0) {
                items_for_rating = collect_selected('future', 'notdo');
                text = slider_text_nextweekend_notdo_en;
            } else if (conditions.time == 1) {
                items_for_rating = collect_selected('past', 'notdo');
                text = slider_text_pastweekend_notdo_en;
            }
        }
        if (items_for_rating.length > 2) {
            var items_for_rating_3_proxy = shuffle(items_for_rating);
            items_for_rating_3 = items_for_rating_3_proxy.slice(0, 3);
        } else {
            items_for_rating_3 = items_for_rating;
        }
        $('body').prepend('<div id="main_instructions7a" class="main_instructions__">' + text + '</div>');

        $(items_for_rating_3).each(function(index, val) {
            if (conditions.time === 0) {
                a = generate_table_row(index, val, 'future', conditions.cond_lang, 'notdo');
                $('#main_instructions7a').append(a);
            } else if (conditions.time == 1) {
                a = generate_table_row(index, val, 'past', conditions.cond_lang, 'notdo');
                $('#main_instructions7a').append(a);
            }
        });
        activate_stretch();
        simple_transition_2($(".main_instructions__"), $("#main_instructions7a"));
        add_input_listener($(".slider_io_slider"));
        $("#next").attr('onclick', 'to_text_input_instructions1()');
        $("#back").attr('onclick', 'to_main_instructions7_proxy()');
    }
}

function to_text_input_instructions1() {
    if (check_slider_with_listener($(".slider_io_slider")) === true) {
        var text;
        if (conditions.cond_lang === 0) {
            if (conditions.cond_ver === 0) {
                text = instructions_truthful_future_nl;
            } else if (conditions.cond_ver == 1) {
                text = instructions_deceptive_future_nl;
            }
        } else if (conditions.cond_lang == 1) {
            if (conditions.cond_ver === 0) {
                text = instructions_truthful_future_en;
            } else if (conditions.cond_ver == 1) {
                text = instructions_deceptive_future_en;
            }
        }
        // !!// check: always gives specific option
        instructive = '';
        if (conditions.time === 0) {
            instructive = select_manipulation('future', conditions.cond_lang);
        } else if (conditions.time == 1) {
            instructive = select_manipulation('past', conditions.cond_lang);
        }
        // if (conditions.cond_ver === 0) {
        //     instructive_final = instructive.option_normal;
        // } else if (conditions.cond_ver == 1) {
        //     instructive_final = instructive.option_specific;
        // }
        var instruction_span = '<span id="instructive_span">' + instructive + '</span>';
        $('body').prepend('<div id="text_input_instructions_1" class="main_instructions_">' + text + instruction_span + '</div>');
        simple_transition_2($(".main_instructions__"), $("#text_input_instructions_1"));
        $("#back").hide();
        $("#next").attr('onclick', 'to_model_statement1()');
    }
}

function to_model_statement1() {
    quiz_order = shuffle(quiz_order);
    var text;
    var modelstatement;
    if (conditions.cond_lang === 0) {
        text = instructions_modelstatement_nl;
        modelstatement = modelstatement_nl;
    } else if (conditions.cond_lang == 1) {
        text = instructions_modelstatement_en;
        modelstatement = modelstatement_en;
    }
    $('body').prepend('<div id="model_statement1" class="main_instructions_">' + text + modelstatement + '</div>');
    simple_transition_2($(".main_instructions_"), $("#model_statement1"));
    $("#next").attr('onclick', 'to_quiz_1()').hide();
    setTimeout(function() {
        $("#next").show();
    }, timer_ms1);
}

function to_model_statement1_proxy() {
    quiz_order = shuffle(quiz_order);
    var text;
    var modelstatement;
    if (conditions.cond_lang === 0) {
        text = instructions_modelstatement_nl;
        modelstatement = modelstatement_nl;
    } else if (conditions.cond_lang == 1) {
        text = instructions_modelstatement_en;
        modelstatement = modelstatement_en;
    }
    $('body').prepend('<div id="model_statement1" class="main_instructions_">' + text + modelstatement + '</div>');
    simple_transition_2($(".main_instructions_"), $("#model_statement1"));
    $("#next").attr('onclick', 'to_quiz_1()').hide();
    setTimeout(function() {
        $("#next").show();
    }, timer_ms2);
}


// QUIZ questions
// !!!!!!
function to_quiz_1() {
    var param_id = 1;
    var param_number = quiz_order[0];
    var param_language = conditions.cond_lang;
    var quiz_menu = make_quiz_question(param_id, param_number, param_language);
    $('body').prepend('<div id="quiz_div_1" class="main_instructions_">' + quiz_menu + '</div>');
    simple_transition_2($(".main_instructions_"), $("#quiz_div_1"));
    $("#next").attr('onclick', 'to_quiz_2()');
    $("#back").hide();
}

function to_quiz_2() {
    if (check_fields($(".select_menu_")) === true) {
        if (check_quiz_answer(1, quiz_order[0], conditions.cond_lang) === true) {
            var param_id = 2;
            var param_number = quiz_order[1];
            var param_language = conditions.cond_lang;
            var quiz_menu = make_quiz_question(param_id, param_number, param_language);
            $('body').prepend('<div id="quiz_div_2" class="main_instructions_">' + quiz_menu + '</div>');
            simple_transition_2($(".main_instructions_"), $("#quiz_div_2"));
            $("#next").attr('onclick', 'to_quiz_3()');
        }
    }
}

function to_quiz_3() {
    if (check_fields($(".select_menu_")) === true) {
        if (check_quiz_answer(2, quiz_order[1], conditions.cond_lang) === true) {
            var param_id = 3;
            var param_number = quiz_order[2];
            var param_language = conditions.cond_lang;
            var quiz_menu = make_quiz_question(param_id, param_number, param_language);
            $('body').prepend('<div id="quiz_div_3" class="main_instructions_">' + quiz_menu + '</div>');
            simple_transition_2($(".main_instructions_"), $("#quiz_div_3"));
            $("#next").attr('onclick', 'to_quiz_4()');
        }
    }
}

function to_quiz_4() {
    if (check_fields($(".select_menu_")) === true) {
        if (check_quiz_answer(3, quiz_order[2], conditions.cond_lang) === true) {
            var param_id = 4;
            var param_number = quiz_order[3];
            var param_language = conditions.cond_lang;
            var quiz_menu = make_quiz_question(param_id, param_number, param_language);
            $('body').prepend('<div id="quiz_div_4" class="main_instructions_">' + quiz_menu + '</div>');
            simple_transition_2($(".main_instructions_"), $("#quiz_div_4"));
            // $("#next").attr('onclick', 'to_text_input_instructions1()');
            // $("#next").attr('onclick', 'to_statement_input1()');
            $("#next").attr('onclick', 'to_pre_input_reminder()');
        }
    }
}

function to_pre_input_reminder() {
    if (check_quiz_answer(4, quiz_order[3], conditions.cond_lang) === true) {
        var text;
        if (conditions.cond_lang === 0) {
            if (conditions.cond_ver === 0) {
                text = pre_input_truthful_nl;
            } else if (conditions.cond_ver == 1) {
                text = pre_input_deceptive_nl;
            }
        } else if (conditions.cond_lang == 1) {
            if (conditions.cond_ver === 0) {
                text = pre_input_truthful_en;
            } else if (conditions.cond_ver == 1) {
                text = pre_input_deceptive_en;
            }
        }
        var instruction_span = '<span id="instructive_span2">' + instructive + '</span>';
        $('body').prepend('<div id="pre_input_instructions" class="main_instructions_">' + text + instruction_span + '</div>');
        simple_transition_2($(".main_instructions_"), $("#pre_input_instructions"));
        $("#next").attr('onclick', 'to_statement_input1()');
    }
}

function to_statement_input1() {
    var text;
    if (conditions.cond_lang === 0) {
        text = instructions_inputfield_nl;
    } else if (conditions.cond_lang == 1) {
        text = instructions_inputfield_en;
    }
    var input_field = '<textarea type="text" rows="10" cols="80" class="text_input1" id="statement1" placehoder="your answer"></textarea>';
    $('body').prepend('<div id="statement_input1" class="main_instructions_">' + text + input_field + '</div>');
    start_timer();
    record_deletes();
    simple_transition_2($(".main_instructions_"), $("#statement_input1"));
    $("#next").attr('onclick', 'to_manipulation_check()');
}

function to_manipulation_check() {
    if (validate_text($("#statement1"), min_char, 'both', conditions.cond_lang) === true) {
        recorded_deletes = deletions_arr.length;
        statement1_main = collect_statement($("#statement1"));
        var text;
        var slider;
        if (conditions.cond_lang === 0) {
            text = manipulation_check_nl;
            slider_a = '<div id="manip_check" class="table_row_div">' +
                '<span class="manipulation_check_span" style="left: 50%;">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">Wat waren je instructies voorafgaand aan het schrijven van je verhaal?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="manipulation_check1_val" value="50" min="0" max="100" step="5" oninput="set_manipulation_check1_slider_value()">' +
                '<output class="slider_io_output" id="manipulation_check1_output">beweeg de slider</output>' +
                '<div class="slider_io_output_labels stretch">(waarheid) -  -  -  (liegen)</div> ' +
                '</div>' +
                '</span>' +
                '</div>';
            slider_b = '<div id="manip_check" class="table_row_div">' +
                '<span class="manipulation_check_span" style="left: 50%;">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">Hoe waarachtig was jouw verhaal?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="manipulation_check2_val" value="50" min="0" max="100" step="5" oninput="set_manipulation_check2_slider_value()">' +
                '<output class="slider_io_output" id="manipulation_check2_output">beweeg de slider</output>' +
                '<div class="slider_io_output_labels stretch">(helemaal niet) -  -  -  (volledig)</div> ' +
                '</div>' +
                '</span>' +
                '</div>';
            slider_c = '<div id="manip_check" class="table_row_div">' +
                '<span class="manipulation_check_span" style="left: 50%;">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">Hoe gemotiveerd was je om een overtuigend verhaal te schrijven?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="manipulation_check3_val" value="50" min="0" max="100" step="5" oninput="set_manipulation_check3_slider_value()">' +
                '<output class="slider_io_output" id="manipulation_check3_output">beweeg de slider</output>' +
                '<div class="slider_io_output_labels stretch">(helemaal niet) -  -  -  (absoluut)</div> ' +
                '</div>' +
                '</span>' +
                '</div>';
            slider_d = '<div id="manip_check" class="table_row_div">' +
                '<span class="manipulation_check_span" style="left: 50%;">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">In hoeverre vond je het moeilijk om een overtuigend verhaal te schrijven?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="manipulation_check4_val" value="50" min="0" max="100" step="5" oninput="set_manipulation_check4_slider_value()">' +
                '<output class="slider_io_output" id="manipulation_check4_output">beweeg de slider</output>' +
                '<div class="slider_io_output_labels stretch">(helemaal niet) -  -  -  (absoluut)</div> ' +
                '</div>' +
                '</span>' +
                '</div>';
            slider_e = '<div id="manip_check" class="table_row_div">' +
                '<span class="manipulation_check_span" style="left: 50%;">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">Geef alsjeblieft aan hoeveel mentale inspanning het je kostte om een overtuigend verhaal te schrijven.</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="manipulation_check5_val" value="50" min="0" max="100" step="5" oninput="set_manipulation_check5_slider_value()">' +
                '<output class="slider_io_output" id="manipulation_check5_output">beweeg de slider</output>' +
                '<div class="slider_io_output_labels stretch">(heel weinig) -  -  -  (heel veel)</div> ' +
                '</div>' +
                '</span>' +
                '</div>';
        } else if (conditions.cond_lang == 1) {
            text = manipulation_check_en;
            slider_a = '<div id="manip_check" class="table_row_div">' +
                '<span class="manipulation_check_span" style="left: 50%;">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">How were you instructed to write your statement?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="manipulation_check1_val" value="50" min="0" max="100" step="5" oninput="set_manipulation_check1_slider_value()">' +
                '<output class="slider_io_output" id="manipulation_check1_output">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(truthful) -  -  -  (deceptive)</div> ' +
                '</div>' +
                '</span>' +
                '</div>';
            slider_b = '<div id="manip_check" class="table_row_div">' +
                '<span class="manipulation_check_span" style="left: 50%;">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">How much of your statement is based on truthful elements?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="manipulation_check2_val" value="50" min="0" max="100" step="5" oninput="set_manipulation_check2_slider_value()">' +
                '<output class="slider_io_output" id="manipulation_check2_output">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(nothing) -  -  -  (all of it)</div> ' +
                '</div>' +
                '</span>' +
                '</div>';
            slider_c = '<div id="manip_check" class="table_row_div">' +
                '<span class="manipulation_check_span" style="left: 50%;">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">How motivated were you to write a convincing statement?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="manipulation_check3_val" value="50" min="0" max="100" step="5" oninput="set_manipulation_check3_slider_value()">' +
                '<output class="slider_io_output" id="manipulation_check3_output">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(not at all) -  -  -  (absolutely)</div> ' +
                '</div>' +
                '</span>' +
                '</div>';
            slider_d = '<div id="manip_check" class="table_row_div">' +
                '<span class="manipulation_check_span" style="left: 50%;">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">To what extent did you find it difficult to write a convincing statement?</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="manipulation_check4_val" value="50" min="0" max="100" step="5" oninput="set_manipulation_check4_slider_value()">' +
                '<output class="slider_io_output" id="manipulation_check4_output">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(not at all) -  -  -  (absolutely)</div> ' +
                '</div>' +
                '</span>' +
                '</div>';
            slider_e = '<div id="manip_check" class="table_row_div">' +
                '<span class="manipulation_check_span" style="left: 50%;">' +
                '<div class="slider_io">' +
                '<span id="slider_instr">Please rate your mental effort required to write a convincing statement.</span> ' +
                '<input type="range" class="slider_io_slider select_menu" id="manipulation_check5_val" value="50" min="0" max="100" step="5" oninput="set_manipulation_check5_slider_value()">' +
                '<output class="slider_io_output" id="manipulation_check5_output">move the slider</output>' +
                '<div class="slider_io_output_labels stretch">(very low) -  -  -  (very high)</div> ' +
                '</div>' +
                '</span>' +
                '</div>';
        }
        $('body').prepend('<div id="manipulation_check" class="main_instructions_">' + text + '</div>');
        $("#manipulation_check").append(slider_a);
        $("#manipulation_check").append(slider_b);
        $("#manipulation_check").append(slider_c);
        $("#manipulation_check").append(slider_d);
        $("#manipulation_check").append(slider_e);
        activate_stretch();
        add_input_listener($(".slider_io_slider"));
        simple_transition_2($(".main_instructions_"), $("#manipulation_check"));
        $("#next").attr('onclick', 'to_demographics1()');
    }
}


function to_demographics1() {
    if (check_slider_with_listener($(".slider_io_slider")) === true) {
        var transition_text;
        if (conditions.cond_lang === 0) {
            transition_text = transition_nl;
            simple_transition($("#manipulation_check"), $("#demographics1_nl"));
            $("#demographics1_en").hide();
        } else if (conditions.cond_lang == 1) {
            transition_text = transition_en;
            simple_transition($("#manipulation_check"), $("#demographics1_en"));
            $("#demographics1_nl").hide();
        }
        $("<h2></h2>").text(transition_text).appendTo($('body'));
        $("#next").attr('onclick', 'to_demographics2()');
        $("#back").attr('onclick', 'to_main_instructions2()').hide();
        define_keys($("#age_sel_nl"), 'number', 2);
        define_keys($("#age_sel_en"), 'number', 2);
    }
}

function to_demographics2() {
    if (check_fields($(".select_menu")) === true) {
        $("h2").remove();
        if (has_second_language() === false) {
            $("#lang2_en").hide();
            $("#lang2_nl").hide();
        }
        if (conditions.cond_lang === 0) {
            simple_transition($("#demographics1_nl"), $("#demographics2_nl"));
            $("#demographics2_en").hide();
        } else if (conditions.cond_lang == 1) {
            simple_transition($("#demographics1_en"), $("#demographics2_en"));
            $("#demographics2_nl").hide();
        }
        $("#next").attr('onclick', 'to_lextale()');
    }
}


function to_lextale() {
    if (check_fields($(".select_menu")) === true) {
        statement1_main = collect_statement($("#statement1"));
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
        if (conditions.cond_lang === 0) {
            simple_transition($("#demographics2_nl"), $("#lextale1"));
        } else if (conditions.cond_lang == 1) {
            simple_transition($("#demographics2_en"), $("#lextale1"));
        }
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
    init_language_task1_2($("#tbwordprod"), time_langtask1);
}

function to_outro() {
    unblock_copy_pasting();
    var outro_dom;
    if (conditions.cond_lang === 0) {
        outro_dom = outro_nl;
    } else if (conditions.cond_lang == 1) {
        outro_dom = outro_en;
    }

    var credits_dom = credits;

    simple_transition($("#langtask1"), $("#outro"));
    $('body').prepend('<div id="outro" class="main_instructions_">' + outro_dom + '</div>' + credits_dom);
    $("#partcode").text(unid);
    $("#next").show();
    $("#next").text('SEND');
    $("#next").attr('onclick', 'send_to_server()');
}

function get_data() {
    var bilingual_bool;
    var age;
    var gender;
    var origin;
    var education;
    var lang1;
    var lang2;
    if (conditions.cond_lang === 0) {
        bilingual_bool = $("#bilingual_sel_nl").val();
        age = $("#age_sel_nl").val();
        gender = $("#gender_sel_nl").val();
        origin = $("#origin_sel_nl").val();
        education = $("#education_sel_nl").val();
        lang1 = $("#lang1_sel_nl").val();
        lang2 = $("#lang2_sel_nl").val();
    } else if (conditions.cond_lang == 1) {
        bilingual_bool = $("#bilingual_sel_en").val();
        age = $("#age_sel_en").val();
        gender = $("#gender_sel_en").val();
        origin = $("#origin_sel_en").val();
        education = $("#education_sel_en").val();
        lang1 = $("#lang1_sel_en").val();
        lang2 = $("#lang2_sel_en").val();
    }
    data.ip = clientip;
    data.browsername = $.browser.name;
    data.browserversion = $.browser.version;
    data.ts_time = moment().format('LTS');
    data.ts_date = moment().format('l');
    data.unid = unid;
    data.unidin = $("#unidin").val();
    data.crowdf = $("#crowdf").val();
    data.gender = gender;
    data.age = age;
    data.education = education;
    data.origin = origin;
    data.bilingual_sel = bilingual_bool;
    data.lang1_sel = lang1;
    data.lang2_sel = lang2;
    data.cond_lang = conditions.cond_lang;
    data.cond_ver = conditions.cond_ver;
    data.time = conditions.time;

    data.user_email = $("#crowdf").val();

    data.pp_name_store = param_pp_name;
    data.pp_id_store = param_pp_id;
    data.user_id_store = param_user_id;
    data.prj_id_store = param_prj_id;


    data.manipulation_check1 = $("#manipulation_check1_val").val();
    data.manipulation_check2 = $("#manipulation_check2_val").val();
    data.manipulation_check3 = $("#manipulation_check3_val").val();
    data.manipulation_check4 = $("#manipulation_check4_val").val();
    data.manipulation_check5 = $("#manipulation_check5_val").val();

    data.activity = instructive;
    data.n_activities = n_activities;

    data.selected_activities = selected_activities;

    data.length_prompt_n = length_prompt;
    data.language_prompt_n = language_prompt;
    data.ms_prompt_n = ms_prompt;

    data.statement1_content = statement1_main.content;
    data.statement1_defoucus = statement1_main.pagefocus.defocus;
    data.statement1_refoucus = statement1_main.pagefocus.refocus;
    data.statement1_defocusduration = statement1_main.pagefocus.durationsum;
    data.statement1_length = statement1_main.length;
    data.statement1_elapsed = statement1_main.elapsed;
    data.statement1_deletes = statement1_main.deletes;

    data.wordprod = $("#tbwordprod").val();
    data.wordprod_length = $("#tbwordprod").val().split(" ").length;
    // console.log(data);
}

function get_data_now() {
    data.ip = clientip;
    data.browsername = $.browser.name;
    data.browserversion = $.browser.version;
    data.ts_time = moment().format('LTS');
    data.ts_date = moment().format('l');
    data.unid = unid;
    data.pp_name_store = param_pp_name;
    data.pp_id_store = param_pp_id;
    data.user_id_store = param_user_id;
    data.prj_id_store = param_prj_id;
}
