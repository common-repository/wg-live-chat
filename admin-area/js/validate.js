function validat(requiredElements) {
    var reqMsg = ""; for (a = 0; a < requiredElements.length; a++) {
        isSet = $("#" + requiredElements[a]).val().length > 0; var cvar = $("#" + requiredElements[a]).val(); if (cvar == "www.domain.com") isSet = false; if (!isSet) {
            html = '<div  class="ui-state-error ui-corner-all" style="padding: 7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;">Please fill the required fields' + "</span></p>" +
            "</div>"; $("#" + requiredElements[a]).css("border", "1px solid red"); reqMsg = html
        } else $("#" + requiredElements[a]).css("border", "1px solid #D1E5EE")
    } if (reqMsg != "") { $("html, body").animate({ scrollTop: 10 }, "fast"); $("#reqMsg").html(reqMsg); $("#AddreqMsg").html(html); $("#reqMsgPassword").html(html); $("#reqMsg").css("color", "red"); $("#reqMsg").css("height", "40px"); return false } else { $("#reqMsg").html(""); return true }
}
function validatPassword(requiredElements) {
    var reqMsg = ""; for (a = 0; a < requiredElements.length; a++) {
        isSet = $("#" + requiredElements[a]).val().length > 0; if (!isSet) {
            html = '<div  class="ui-state-error ui-corner-all" style="padding: 7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;">Please fill the required fields' + "</span></p>" + "</div>"; $("#" + requiredElements[a]).css("border", "1px solid red"); reqMsg =
            html
        } else $("#" + requiredElements[a]).css("border", "1px solid #D1E5EE")
    } if (reqMsg != "") { $("html, body").animate({ scrollTop: 10 }, "fast"); $("#reqMsgPassword").html(reqMsg); $("#AddreqMsg").html(html); $("#EditreqMsg").html(html); $("#reqMsgPassword").css("color", "red"); $("#reqMsgPassword").css("height", "40px"); return false } else { $("#reqMsgPassword").html(""); return true }
}
function validatSelect(requiredElements) {
    var reqMsg = ""; $("#ctl00_MainContent_ControlsWebUCManageUsers_WebUCDashBoardUsers1_WebUCAddDashBoardUser1_ddlCompanyName").val(); for (a = 0; a < requiredElements.length; a++) {
        if ($("#" + requiredElements[a]).val() == "0") isSet = false; else isSet = true; if (!isSet) {
            html = '<div  class="ui-state-error ui-corner-all" style="padding: 7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;">Please fill the required fields' +
            "</span></p>" + "</div>"; $("#" + requiredElements[a]).css("border", "1px solid red"); reqMsg = html
        } else $("#" + requiredElements[a]).css("border", "1px solid #D1E5EE")
    } if (reqMsg != "") { $("html, body").animate({ scrollTop: 10 }, "fast"); $("#reqMsg").html(reqMsg); $("#reqMsg").css("color", "red"); $("#reqMsg").css("height", "40px"); return false } else { $("#reqMsg").html(""); return true }
}
function resetCssOfFields(requiredElements) { var reqMsg = ""; for (a = 0; a < requiredElements.length; a++) { $("#" + requiredElements[a]).css("border", "1px solid #D1E5EE"); $("#" + requiredElements[a]).val("") } $("#reqMsg").html(""); $("#AddreqMsg").html(""); $("#EditreqMsg").html(""); $("#reqMsg").css("height", "0px"); $("#AddreqMsg").css("border", "0px") } function validateLogin() { reqElements = new Array("user_name", "password"); if (validat(reqElements)) return true; else return false }
validateValuesArray = function (_class) {
    var reqMsg = ""; ar = []; size = $("." + _class).size(); if (size > 0) size = 1; else size = size; for (a = 0; a < size; a++) { isSet = $("." + _class).eq(a).val().length > 0; if (!isSet) { $("." + _class).eq(a).css("border", "1px solid red"); reqMsg = "please fill the required fields" } else $("." + _class).eq(a).css("border", "none") } if (reqMsg != "") { $("html, body").animate({ scrollTop: 10 }, "fast"); $("#reqMsg").html(reqMsg); $("#reqMsg").css("color", "red"); $("#reqMsg").css("height", "40px"); return false } else {
        $("#reqMsg").html("");
        return true
    }
}; function isNumberKey(evt) { var charCode = evt.which ? evt.which : event.keyCode; if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) return false; return true }
function validateDispalyName(DisplayName) {
    var reg = /^[A-Za-z0-9.]*$/; var address = document.getElementById(DisplayName).value; if (reg.test(address) == false) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> invalid DisplayName' + "</span></p>" + "</div>"; $("html, body").animate({ scrollTop: 10 }, "fast"); $("#reqMsg").html(html); $("#" + DisplayName +
        "").css("border", "1px solid red"); $("#" + DisplayName + "").focus(); return false
    } return true
} function isCharKey(evt) { var charCode = evt.which ? evt.which : event.keyCode; if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) return true; else return false; return true }
function validate(email) { var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; var address = document.getElementById(email).value; if (reg.test(address) == false) { $("html, body").animate({ scrollTop: 10 }, "fast"); $("#" + email + "").focus(); return false } return true }
function validateDomain(Domain) {
    if (Domain == "txtAdLink" || Domain == "txtEditAdLink") { var address = document.getElementById(Domain).value; if (address == "") return true } var urlregex = new RegExp("^(http|https|ftp)://([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&amp;%$-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(/($|[a-zA-Z0-9.,?'\\+&amp;%$#=~_-]+))*$"); var address =
    document.getElementById(Domain).value; if (address.substring(0, 3) === "www") address = "http://" + address; if (!urlregex.test(address)) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Invalid URL. Sample Url:www.Domain.com' + "</span></p>" + "</div>"; $("html, body").animate({ scrollTop: 10 }, "fast"); $("#reqMsg").html(html); $("#AddreqMsg").html(html);
        $("#EditreqMsg").html(html); $("#" + Domain + "").css("border", "1px solid red"); $("#" + Domain + "").focus(); return false
    } return true
}
function validatePhone(Phone) {
    var reg = /^0|[1-9]\d*$/; var addressPhone = document.getElementById(Phone).value; if (reg.test(addressPhone) == false) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Only digits' + "</span></p>" + "</div>"; $("html, body").animate({ scrollTop: 10 }, "fast"); $("#reqMsg").html(html); $("#" + Phone + "").css("border",
        "1px solid red"); $("#" + Phone + "").focus(); return false
    } return true
}
function checkCharLen() {
    if ($("#txtpassword").val().length >= 6 && $("#txtpassword").val().length <= 15) return true; else {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> minimun atleast 6 character' + "</span></p>" + "</div>"; $("html, body").animate({ scrollTop: 10 }, "fast"); $("#reqMsg").html(html); $("#txtpassword").css("border", "1px solid red");
        $("#txtpassword").focus(); return false
    }
}
function validateName(Name) {
    var reg = /^[a-zA-Z\s]+$/; var address = document.getElementById(Name).value; if (reg.test(address) == false) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> invalid Name' + "</span></p>" + "</div>"; $("html, body").animate({ scrollTop: 10 }, "fast"); $("#reqMsg").html(html); $("#" + Name + "").css("border", "1px solid red");
        $("#" + Name + "").focus(); return false
    } return true
} function isNumber(field) { var re = /^[a-zA-Z\s]+$/; if (!re.test(field.value)) { html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> invalid Name' + "</span></p>" + "</div>"; $("html, body").animate({ scrollTop: 10 }, "fast"); $("#reqMsg").html(html) } }
function matchPassword(a, b) { if ($("#" + a + "").val() == $("#" + b + "").val()) { $("#" + b + "").css("border", "1px solid #D1E5EE"); $("#" + a + "").css("border", "1px solid #D1E5EE"); return true } else { $("html, body").animate({ scrollTop: 10 }, "fast"); $("#" + a + "").css("border", "1px solid red"); $("#" + b + "").css("border", "1px solid red"); return false } } function showDialogerror() { $("#dialog-processing").dialog({ height: 140, show: { effect: "fadeIn", duration: 5E3 }, modal: true }) }
function closeDialogerror() { $("#dialog-processing").dialog("close") } showError = function (errorMessage) { html = '<div style="padding: 0 .7em;" class="ui-state-error ui-corner-all">' + '<p><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + errorMessage + "</p>" + "</div>"; $("#error").html(html) };
showErrorMsg = function (errorMessage, id) { html = '<div style="padding: 0 .7em;" class="ui-state-error ui-corner-all">' + '<p><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + errorMessage + "</p>" + "</div>"; $("#" + id).html(html) };
function preSnapRoom() { $("#preSnapRoom").html(""); var ABalanceDialog = $("#preSnapRoom").load("homepage/presnaproom.php"); ABalanceDialog.dialog({ modal: true, position: [400, 100 - $(window).scrollTop()], width: 550, height: "auto", resizable: false, close: function (event, ui) { } }) }
checksnaproom = function () { if ($("#userTime").val() > 0) showSnapRoom(); else { $("#accountAndBalance").html(""); var ABalanceDialog = $("#accountAndBalance").load("homepage/accountandbalance.php"); ABalanceDialog.dialog({ modal: true, position: [400, 100 - $(window).scrollTop()], width: 550, height: "auto", resizable: false }) } };
function ValidateFields(requiredElements, ErrorDiv) {
    var reqMsg = ""; for (a = 0; a < requiredElements.length; a++) {
        isSet = $("#" + requiredElements[a]).val().length > 0; if (!isSet) {
            html = '<div  class="ui-state-error ui-corner-all" style="padding: 7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;">Please fill the required fields' + "</span></p>" + "</div>"; $("#" + requiredElements[a]).css("border", "1px solid red");
            reqMsg = html
        } else $("#" + requiredElements[a]).css("border", "1px solid #D1E5EE")
    } if (reqMsg != "") { $("html, body").animate({ scrollTop: 10 }, "fast"); $("#" + ErrorDiv).html(reqMsg); $("#" + ErrorDiv).show(); $("#" + ErrorDiv).css("height", "30px"); return false } else { $("#" + ErrorDiv).html(""); return true }
}
function ResetCssOfFields(requiredElements, ErrorDiv) { var reqMsg = ""; for (a = 0; a < requiredElements.length; a++) { $("#" + requiredElements[a]).css("border", "1px solid #D1E5EE"); $("#" + requiredElements[a]).val("") } $("#" + ErrorDiv).hide() }
function ValidatePassword(Name, ErrorDiv) {
    if ($("#" + Name).val().length >= 6 && $("#" + Name).val().length <= 15) return true; else {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Password should have between 6-15 characters' + "</span></p>" + "</div>"; $("#" + ErrorDiv).show(); $("#" + ErrorDiv).html(html); $("#" + Name).css("border", "1px solid #FF0000");
        $("#" + ErrorDiv).css("height", "30px"); $("html, body").animate({ scrollTop: 10 }, "fast"); return false
    }
}
function ValidateSelect(requiredElements, ErrorDiv) {
    var isSet = true; for (a = 0; a < requiredElements.length; a++) if ($("#" + requiredElements[a]).val() == "0") { isSet = false; $("#" + requiredElements[a]).css("border", "1px solid red") } else $("#" + requiredElements[a]).css("border", "1px solid #D1E5EE"); if (!isSet) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding: 7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;">Please Select the required fields' +
        "</span></p>" + "</div>"; $("#" + ErrorDiv).html(html); $("#" + ErrorDiv).show(); $("#" + ErrorDiv).css("height", "30px"); return false
    } else { $("#" + ErrorDiv).html(""); return true }
}
function ValidateName(Name, ErrorDiv) {
    var reg = /^[a-zA-Z\s]+$/; var address = document.getElementById(Name).value; if (reg.test(address) == false) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Invalid Name.' + "</span></p>" + "</div>"; $("html, body").animate({ scrollTop: 10 }, "fast"); $("#" + ErrorDiv).html(html); $("#" + ErrorDiv).show(); $("#" +
        Name + "").css("border", "1px solid red"); $("#" + Name + "").focus(); return false
    } return true
}
function ValidateDispalyName(DisplayName, ErrorDiv) {
    var reg = /^[A-Za-z0-9.]*$/; var address = document.getElementById(DisplayName).value; if (reg.test(address) == false) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Invalid DisplayName.' + "</span></p>" + "</div>"; $("#" + DisplayName + "").css("border", "1px solid red"); $("html, body").animate({ scrollTop: 10 },
        "fast"); $("#" + ErrorDiv).html(html); $("#" + DisplayName).css("border", "1px solid red"); $("#" + ErrorDiv).show(); $("#" + DisplayName + "").focus(); return false
    } return true
}
function ValidateEmail(email, ErrorDiv) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; var address = document.getElementById(email).value; if (reg.test(address) == false) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Invalid Email Address.' + "</span></p>" + "</div>"; $("html, body").animate({ scrollTop: 10 }, "fast");
        $("#" + ErrorDiv).show(); $("#" + ErrorDiv).html(html); $("#" + email + "").css("border", "1px solid red"); $("#" + email + "").focus(); return false
    } return true
}
function ValidateDomain(Domain, ErrorDiv) {
    var urlregex = new RegExp("^(http|https|ftp)://([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&amp;%$-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(/($|[a-zA-Z0-9.,?'\\+&amp;%$#=~_-]+))*$"); var address =
    document.getElementById(Domain).value; if (address.substring(0, 3) === "www") address = "http://" + address; if (!urlregex.test(address)) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Invalid URL. Sample Url:www.Domain.com' + "</span></p>" + "</div>"; $("html, body").animate({ scrollTop: 10 }, "fast"); $("#" + ErrorDiv).html(html); $("#" + ErrorDiv).show();
        $("#" + Domain + "").css("border", "1px solid red"); $("#" + Domain + "").focus(); return false
    } return true
}
function ValidatePhone(Phone, ErrorDiv) {
    var reg = /^0|[1-9]\d*$/; var addressPhone = document.getElementById(Phone).value; if (reg.test(addressPhone) == false) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Only digits Allowed.' + "</span></p>" + "</div>"; $("html, body").animate({ scrollTop: 10 }, "fast"); $("#" + ErrorDiv).html(html); $("#" +
        ErrorDiv).show(); $("#" + Phone + "").css("border", "1px solid red"); $("#" + Phone + "").focus(); return false
    } return true
}
function MatchPassword(a, b, ErrorDiv) {
    if ($("#" + a + "").val() == $("#" + b + "").val()) { $("#" + b + "").css("border", "1px solid #D1E5EE"); $("#" + a + "").css("border", "1px solid #D1E5EE"); return true } else {
        $("html, body").animate({ scrollTop: 10 }, "fast"); html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Password not matched.' + "</span></p>" + "</div>";
        $("#" + a + "").css("border", "1px solid red"); $("#" + b + "").css("border", "1px solid red"); $("#" + ErrorDiv).html(html); $("#" + ErrorDiv).show(); return false
    }
};