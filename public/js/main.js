function changePlaceholders() {
  $(document).ready(function() {

    $("form :input[type=text],form :input[type=password]").each(function(index, elem){
      var fieldCaption = $(elem).parents(".field").prev(".fieldCaption");
      $(elem).attr("placeholder", fieldCaption.html());
    });
  });
}

function removeAllFieldCaptions () {
  $(document).ready(function() {
    $(".fieldCaption").remove();
  });
}

function appendForgotPassword() {
  $(document).ready(function() {
    var p_login = $("form :input[value=p_login]");
    p_login.before("<a href='#' id='forgot_password' class='need-help'>Forgot Password?</a>");
  });
}

function addIds() {
  $(document).ready(function() {
    var emailField = $(".field").has('input[type=text]');
    emailField.attr("id", "emailfield");
    var pswdField = $(".field").has('input[type=password]');
    pswdField.attr("id", "passwordfield");
    var chbxField = $(".field").has('input[type=checkbox]');
    chbxField.attr("id", "checkboxfield");
    var submit = $("input[type=submit]");
    submit.attr("id", "submitbutton");
    var chbx = $("#checkboxfield input[type=checkbox]");
    chbx.attr("id", "chbx");
  });
}


function wrapCheckboxText() {
  $(document).ready(function(){
    var elem = $("input[type=checkbox]")[0].nextSibling;
    $(elem).wrap("<label id='lblforrememberme' for='chbx'></label>");
  });
}


function customizeLoginButton() {
  $(document).ready(function() {
    $("input[type=submit]").attr("value", "Log In");
    $("input[type=submit]").attr("class", "btn-secondary");
  });
}

function wrapInRow() {
  $(document).ready(function() {
    $(".login-container h3").next(".login-container p").andSelf().wrapAll(
      "<div id='first_row'  class='row'></div>");
    $("#emailfield").next("#passwordfield").andSelf().wrapAll(
      "<div id='second_row'  class='row'></div>");
    $("#checkboxfield").next('#forgot_password').andSelf().wrapAll(
      "<div id='helprow' class='row'></div>"
    );
    $("form input[name=act]").next("form input[type=submit]").andSelf().wrapAll(
      "<div id='fourthrow'></div>"
    );
  });
}

function updateButton() {
  $(document).ready(function() {
  function updateContainer() {
    if ($(window).width() > 992) {
      var buttonArea = $("#fourthrow");
      $("#second_row").append(buttonArea);
    } else {
      $("#fourthrow").insertAfter("#helprow");
    }
  }
  updateContainer();
  $(window).on('resize',function(){
    updateContainer();
  });
});
}

changePlaceholders();
removeAllFieldCaptions();
appendForgotPassword();
wrapCheckboxText();
addIds();
customizeLoginButton();
wrapInRow();
updateButton();
