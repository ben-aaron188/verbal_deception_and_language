var slider_moved_array = [];

function check_fields(classname) {
    class_values = [];
    score = 0;
    classname.each(function() {
        if ($(this).is(":visible")) {
            // if($(this).attr('type') == 'text'){
            $(this).each(function() {
                class_values.push($(this).val().length);
                score = $.inArray(0, class_values);
            });
            // }
        }
    });
    if (score > -1) {
        alert("Please answer all questions.");
        score = 0;
    } else {
        return true;
    }
}

function check_multi_select() {
    class_values = [];
    score = 0;
    $(".select_menu_2").each(function() {
        if ($(this).is(":visible")) {
            $(".select_menu_2 option:selected").each(function() {
                class_values.push($(this).text().length);
                score = $.inArray(0, class_values);
            });
        }
    });
    if (score > -1) {
        alert("Select at least one option");
        score = 0;
    } else {
        return true;
    }
}


function check_choice(classname) {
    class_values = [];
    score = 0;
    classname.each(function() {
        if ($(this).is(":visible")) {
            // if ($(this).attr('type') == 'text') {
            $(this).each(function() {
                class_values.push($(this).val().length);
                score = $.inArray(0, class_values);
            });
            // }
        }
    });
    if (score > -1) {
        alert("Please write down your answer.");
        score = 0;
    } else {
        return true;
    }
}


function has_second_language() {
    if ($("#bilingual_sel").val() == "1") {
        return true;
    } else {
        return false;
    }
}

function define_keys(ID, allowedInput, allowedMax) {
    if (allowedInput == "number") {
        ID.keypress(function(e) {
            var code = e.keyCode || e.which;
            if (code != 8 && code !== 0 && (code < 48 || code > 57)) {
                return false;
            }
        });
    } else if (allowedInput == "text") {
        ID.keypress(function(e) {
            var code = e.keyCode || e.which;
            if (code > 32 && (code < 65 || code > 90) &&
                (code < 97 || code > 122)) {
                return false;
            }
        });
    }
}

function twoletters() {
    var output = "";
    var choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 2; i++)
        output += choices.charAt(Math.floor(Math.random() * choices.length));
    return output;
}

function shuffle(array) {
    var newarr = [];
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        newarr[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return newarr;
}

function init_data() {
    data = {};
}

function simple_transition(current_div, next_div) {
    current_div.hide(function() {
        next_div.show();
    });
}

function send_to_server() {
    if (check_fields($(".select_menu")) === true) {
        get_data();
        $("#DATA").val(JSON.stringify(data));
        $("#submit").click();
    }
}

function getIP() {
    $.get("http://ipinfo.io", function(response) {
        window.clientip = response.ip;
    }, "jsonp");
}

function check_slider(classname) {
    class_values = [];
    score = 0;
    classname.each(function() {
        if ($(this).is(":visible")) {
            class_values.push($(this).val().length);
            score = $.inArray(15, class_values);
        }
    });
    if (score != -1) {
        // language check
        alert("Please move the sliders to indicate the frequency of doing the activity and your certainty that you will do it.");
        score = 0;
    } else {
        return true;
    }
}

function get_unid() {
    // if (val_score === 0) {
        unid = twoletters() + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9);
    // } else {
//     unid = twoletters() + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + "_" +val_score;
    // }
}

// source" http://stackoverflow.com/questions/5976289/stretch-text-to-fit-width-of-div
$.fn.stretch_text = function() {
    var elmt = $(this),
        cont_width = elmt.width(),
        txt = elmt.html(),
        one_line = $('<span class="stretch_it">' + txt + '</span>'),
        nb_char = elmt.text().length,
        spacing = cont_width / nb_char,
        txt_width;

    elmt.html(one_line);
    txt_width = one_line.width();

    if (txt_width < cont_width) {
        var char_width = txt_width / nb_char,
            ltr_spacing = spacing - char_width + (spacing - char_width) / nb_char;

        one_line.css({
            'letter-spacing': ltr_spacing
        });
    } else {
        one_line.contents().unwrap();
        elmt.addClass('justify');
    }
};

// new function from previous study
function validate_text(ID, desiredLength, test_kind) {
    // text_validation = false;
    if (test_kind == 'both') {
        if (check_text(ID, desiredLength) === true) {
            if (check_input(ID) === true) {
                text_validation = true;
                // alert('text validated');
                return true;
            }
        }
    } else if (test_kind == 'length') {
        if (check_text(ID, desiredLength) === true) {
            text_validation = true;
            // alert('text validated');
            return true;
        }
    } else if (test_kind == 'content') {
        if (check_input(ID) === true) {
            text_validation = true;
            // alert('text validated');
            return true;
        }
    }
}

function check_input(ID) {
    keywords = ["the", "to", "in", "at", "with", "by", "of", "a", "an", "from", "on", "there", "here", "I", "you", "they", "we", "us", "is", "it"];
    tester_array = [];
    tester2 = 0;
    textin = ID.val().toLowerCase().split(" ");
    $.each(keywords, function(index, val) {
        tester = $.inArray(val, textin);
        if (tester < 0) {
            tester2 = 0;
        } else {
            tester2 = 1;
        }
        tester_array.push(tester2);
    });
    checksum_tester = sum(tester_array);
    if ((checksum_tester / textin.length) < 0.025) {
        alert("Please use real English words and sentences in your answer. You will not be able to proceed otherwise. We cannot validate your participation without serious participation.");
    } else {
        return true;
    }
}

function check_text(ID, desiredLength) {
    var raw = ID.val().toLowerCase().replace(/ /g, '');
    if (raw.length < desiredLength) {
        alert("Please use at least " + desiredLength + " characters to answer this questions.");
    } else {
        return true;
    }
}

function sum(arr) {
    var r = 0;
    $.each(arr, function(i, v) {
        r += v;
    });
    return r;
}

function record_elapsed_start(ID) {
    elapsed = 0;
    ID.keypress(function(e) {
        time1 = now();
    });
}

function record_elapsed_end(ID) {
    time2 = now();
    elapsed = time2 - time1;
}


function get_length(ID) {
    lengthtext = ID.val().toLowerCase().split(" ");
    id_length = lengthtext.length;
    // return id_length;
}

function record_deletes(ID) {
    var listen = true;
    deletions_arr = [];
    ID.keydown(function(e) {
        if (listen === true) {
            var code = e.keyCode || e.which;
            if (code == 8) {
                deletions_arr.push(1);
            }
        }
    });
}

function set_certainty_slider_value(number) {
    var input = "#activity" + number + "_certainty";
    var output = "#certainty_output_" + number;
    $(output).val($(input).val() + '%');
}

function set_frequency_slider_value(number) {
    var input = "#activity" + number + "_frequency";
    var output = "#frequency_output_" + number;
    $(output).val($(input).val() + '%');
}

function activate_stretch() {
    $('.stretch').each(function() {
        $(this).stretch_text();
    });
}

function randomdigit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_cond() {
    var cond_lang = 2;
    // 0: Dutch
    // 1: English
    var cond_ver = 2;
    // 0: truthful
    // 1: deceptive
    var cb = 2;
    if ($("#lang1_sel").val() != 'nl') {
        cond_lang = 1;
        cond_ver = randomdigit(0, 1);
        cb = randomdigit(0, 1);
    } else {
        cond_lang = randomdigit(0, 1);
        cond_ver = randomdigit(0, 1);
        cb = randomdigit(0, 1);
    }
    var conds = {
        'cond_lang': cond_lang,
        'cond_ver': cond_ver,
        'cb': cb
    };
    return conds;
}

function select_manipulation(temporality) {
    var selected_obj;
    var selected_obj_;
    var candidate_objects;
    if (conditions.cond_ver === 0) {
        candidate_objects = collect_non_selected(temporality);
        selected_obj = shuffle(candidate_objects)[0];
    } else if (conditions.cond_ver == 1) {
        var obj_array = [];
        var single_obj = {};
        var sel_val;
        var sel_freq;
        var sel_cert;
        $(".table_row_div").each(function(index, val) {
            sel_val = $(this).children().eq(0).text();
            sel_freq = $(this).children().eq(1).children().children().eq(1).val();
            sel_cert = $(this).children().eq(2).children().children().eq(1).val();
            single_obj = {
                'sel_val': sel_val,
                'sel_freq': sel_freq - 0,
                'sel_cert': sel_cert - 0,
                'sel_freq_inv': 100 - sel_freq,
                'combined': (sel_cert - 0) + (100 - sel_freq)
            };
            obj_array.push(single_obj);
        });
        selected_obj_ = obj_array.reduce((max, single) => max.combined > single.combined ? max : single);
        selected_obj = selected_obj_.sel_val;
    }
    return selected_obj;
}

function generate_table_row(number, item, temporality) {
    var table_row;
    if (temporality == 'future') {
        table_row = '<div id="p' + number + '" class="table_row_div">' +
            '<span id="activity' + number + ' ">' + item + '</span>' +
            '<span class="activity_span">' +
            '<div class="slider_io">' +
            '<span id="slider_instr">FREQUENCY?</span> ' +
            '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value(' + number + ')">' +
            '<output class="slider_io_output" id="frequency_output_' + number + '">move the slider</output>' +
            '</div>' +
            '</span>' +
            '<span class="certainty_span">' +
            '<div class="slider_io">' +
            '<span id="slider_instr">CERTAINTY?</span> ' +
            '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_certainty" value="50" min="0" max="100" step="5" oninput="set_certainty_slider_value(' + number + ')">' +
            '<output class="slider_io_output" id="certainty_output_' + number + '">move the slider</output>' +
            '</div>' +
            '</span></div>';
    } else if (temporality == 'past') {
        table_row = '<div id="p' + number + '" class="table_row_div">' +
            '<span id="activity' + number + ' ">' + item + '</span>' +
            '<span class="activity_span">' +
            '<div class="slider_io">' +
            '<span id="slider_instr">FREQUENCY?</span> ' +
            '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value(' + number + ')">' +
            '<output class="slider_io_output" id="frequency_output_' + number + '">move the slider</output>' +
            '</div>' +
            '</span>' +
            '</div>';
    }
    return table_row;
}

function collect_selected(temporality) {
    var selected_items = [];
    if (temporality == 'past') {
        $("#activity_past option:selected").each(function() {
            selected_items.push($(this).text());
        });
    } else if (temporality == 'future') {
        $("#activity_future option:selected").each(function() {
            selected_items.push($(this).text());
        });
    }
    return selected_items;
}

function collect_non_selected(temporality) {
    var selected_items = [];
    if (temporality == 'past') {
        $("#activity_past option").each(function() {
            if (!$(this).is(':selected')) {
                selected_items.push($(this).text());
            }
        });
    } else if (temporality == 'future') {
        $("#activity_future option").each(function() {
            if (!$(this).is(':selected')) {
                selected_items.push($(this).text());
            }
        });
    }
    return selected_items;
}

var now = (function() {
    var performance = window.performance || {};
    performance.now = (function() {
        return performance.now ||
            performance.webkitNow ||
            performance.msNow ||
            performance.oNow ||
            performance.mozNow ||
            function() {
                return new Date().getTime();
            };
    })();
    return performance.now();
});
