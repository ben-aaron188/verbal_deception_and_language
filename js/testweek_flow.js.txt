/**
 * @author contact: b.a.r.kleinberg@uva.nl
 */

 var final_url = 'placeholder';
 var param_pp_name = 'placeholder_pp_name';
 var param_pp_id = 'placeholder_pp_id';
 var param_user_id = 'placeholder_user_id';
 var param_prj_id = 'placeholder_prj_id';

 // testweek box

 // get url parameters
 // credits: http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
 $.urlParam = function(name) {
     var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
     if (results === null) {
         return null;
     } else {
         return results[1] || 0;
     }
 };

 function get_url_paramaters() {
     param_pp_name = $.urlParam('pp_name');
     param_pp_id = $.urlParam('pp_id');
     param_user_id = $.urlParam('usr_id');
     param_prj_id = $.urlParam('prj_id');
 }

// create redirect url
 function get_redirect_url() {
     get_url_paramaters();
     var url_string;
     if (param_pp_name === null || param_pp_id === null || param_user_id === null || param_prj_id === null) {
         url_string = "https://www.lab.uva.nl/lab";
     } else {
         url_string = "https://www.lab.uva.nl/test/tst_performance.php?prj_id=" +
             param_prj_id +
             // "&user_id=" +
             "&usr_id=" +
             param_user_id;
     }
     final_url = url_string;
    //  use final_url for redirection
     console.log(final_url);
 }
