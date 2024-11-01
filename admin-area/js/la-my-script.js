var defaultColors = {
	Newopname_txt: '#0078c0',
	Newopconv_txt: '#0078c0',
	Newvstrname_txt: '#0078c0',
	Newvstrconv_txt: '#0078c0',
	ChatDiv_bg: '#f3f2f2',
	preFormPanelHeadText_bg: '#0078c0',
	"header-text-id_txt": '#ffffff',
	preFormPanelHeadBtn_txt: '#ffffff',
	txtMessageWin_bg: '#ffffff',
	txtMessageWin_txt: '#000000',
	btnSendMap_bg: '#0078c0',
	btnSendMap_txt: '#ffffff'
};

var changeColors = {
	Newopname_txt: '#0078c0',
	Newopconv_txt: '#0078c0',
	Newvstrname_txt: '#0078c0',
	Newvstrconv_txt: '#0078c0',
	ChatDiv_bg: '#f3f2f2',
	preFormPanelHeadText_bg: '#0078c0',
	"header-text-id_txt": '#ffffff',
	preFormPanelHeadBtn_txt: '#ffffff',
	txtMessageWin_bg: '#ffffff',
	txtMessageWin_txt: '#000000',
	btnSendMap_bg: '#0078c0',
	btnSendMap_txt: '#ffffff'
};


(function ($) {
  $(function () {
    $('.my-input-class').wpColorPicker({
	change: function(){
		changeColor(window.jQuery(this).val(),window.jQuery(this).attr('id'));
	},
	palettes: false
	});
  });
  
  function changeColor(col,id){
	  	changeColors[id] = col;
		$("#styling_json").val(JSON.stringify(changeColors));
		$("#styling").val('<style>#ChatDiv{background-color:'+ changeColors.ChatDiv_bg  +' !important;}#Newopconv{color:'+ changeColors.Newopconv_txt +' !important;}#Newopname{color:'+ changeColors.Newopname_txt +' !important;}#Newvstrconv{color:'+ changeColors.Newvstrconv_txt +'; !important}#Newvstrname{color:'+ changeColors.Newvstrname_txt +' !important;}#preFormPanelHeadText{background-color:'+ changeColors.preFormPanelHeadText_bg +' !important;}#header-text-id{color:'+ changeColors["header-text-id_txt"] +' !important;}#preFormPanelHeadBtn{color:'+ changeColors.preFormPanelHeadBtn_txt +' !important;}#txtMessageWin{background-color:'+ changeColors.txtMessageWin_bg +' !important;}#txtMessageWin{background-color:'+ changeColors.txtMessageWin_bg +' !important;color:'+ changeColors.txtMessageWin_txt +' !important;}#btnSendMap{background-color:'+ changeColors.btnSendMap_bg +' !important;color:'+ changeColors.btnSendMap_txt +' !important;}</style>');
		if(id.indexOf('_bg') != -1){
			window.jQuery("#"+id.replace("_bg","")).css("background-color",col);
		}else{
			window.jQuery("#"+id.replace("_txt","")).css("color",col);
		}
	}
	
}(jQuery));

var uploadid = '';
jQuery(document).ready(function($){
	$('#upload-online-btn,#upload-offline-btn,#upload-minimize-btn').click(function(e) {
		e.preventDefault();
		uploadid  = jQuery(this).attr('id');
		var image = wp.media({ 
			title: 'Upload Image',
			// mutiple: true if you want to upload multiple files at once
			multiple: false
		}).open()
		.on('select', function(e){
			// This will return the selected image from the Media Uploader, the result is an object
			var uploaded_image = image.state().get('selection').first();
			// We convert uploaded_image to a JSON object to make accessing it easier
			// Output to the console uploaded_image
			//console.log(uploaded_image);
			var image_url = uploaded_image.toJSON().url;
			// Let's assign the url value to the input field
			$('#'+uploadid+'_preview').attr('src',image_url);
			$('#'+uploadid+'_url').val(image_url);
		});
	});
});

(function($){
	$('#sUserForm #submit').mouseover(function(){
		$('#toolTip').fadeIn(300)//.css('display','block');		
		}).mouseout(function(){
			$('#toolTip').fadeOut(300)//.css('display','none');
			
			});
	
	})(jQuery);
	
	(function ($) {
	/*$("#submit-new-user").click(function () {
		var WGWindowLoader = {
			keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
			//_chatURL : "http://development.maavratech.com/VisitorServiceXMPPNew/ChatService.svc/",
			cdn : 'greeterware.com/Dashboard/cwgen/scripts/',
			WGEncode : function (input) {
				var output = "";
				var chr1,
				chr2,
				chr3;
				var enc1,
				enc2,
				enc3,
				enc4;
				var i = 0;

				do {
					chr1 = input.charCodeAt(i++);
					chr2 = input.charCodeAt(i++);
					chr3 = input.charCodeAt(i++);

					enc1 = chr1 >> 2;
					enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
					enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
					enc4 = chr3 & 63;

					if (isNaN(chr2)) {
						enc3 = enc4 = 64;
					} else if (isNaN(chr3)) {
						enc4 = 64;
					}

					output = output + WGWindowLoader.keyStr.charAt(enc1) + WGWindowLoader.keyStr.charAt(enc2) +
						WGWindowLoader.keyStr.charAt(enc3) + WGWindowLoader.keyStr.charAt(enc4);
				} while (i < input.length);

				return output;
			}
		};
		$("#reqMsg").css("visibility", "hidden");

		var Email = $('#txtEmail').val();
		var Display = $('#txtDspPName').val();
		var firstName = $('#txtfstName').val();
		var lastName = $('#txtlstName').val();
		var password = $('#txtpassword').val();
		var Cnfrmpassword = $('#txtCnfrmpassword').val();
		var companyName = $('#txtCmpName').val();
		var phoneNO = $('#txtphoneNO').val();
		var DomainName = $('#txtDomainName').val();
		var dataToEncode = DomainName.replace(/http:\/\/|www\.|http:\/\/www\.|https:\/\/|https:\/\/www\./ig, '');
		if (dataToEncode.match(/\/$/)) {}
		else {
			dataToEncode = dataToEncode + "/";
		}
		var objs = '{' +
			'"Email"' + ':"' + Email + '",' +
			'"Display"' + ':"' + Display + '",' +
			'"firstName"' + ':"' + firstName + '",' +
			'"lastName"' + ':"' + lastName + '",' +
			'"companyName"' + ':"' + companyName + '",' +
			'"password"' + ':"' + password + '",' +
			'"phoneNO"' + ':"' + phoneNO + '",' +
			'"DomainName"' + ':"' + DomainName + '",' +
			'"AccountId"' + ':"' + WGWindowLoader.WGEncode(dataToEncode) + '"' +
			'}';
		dataToEncode = companyName + "/" + dataToEncode;
		console.log(dataToEncode);
		console.log('WGWindowLoader.WGEncode(dataToEncode)', WGWindowLoader.WGEncode(dataToEncode));
		//$('#txtDomainName').val();

		$.ajax({
			type : "POST",
			url : "http://greeterware.com/SingleFileDB/AjaxMethods.aspx/ADashBoardSignUpUser",
			data : '{' +
			'"Email"' + ':"' + Email + '",' +
			'"Display"' + ':"' + Display + '",' +
			'"firstName"' + ':"' + firstName + '",' +
			'"lastName"' + ':"' + lastName + '",' +
			'"companyName"' + ':"' + companyName + '",' +
			'"password"' + ':"' + password + '",' +
			'"phoneNO"' + ':"' + phoneNO + '",' +
			'"DomainName"' + ':"' + DomainName + '",' +
			'"AccountId"' + ':"' + WGWindowLoader.WGEncode(dataToEncode) + '"' +
			'}',
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			crossDomain : true,
			success : function (msg) {

				$('#btnSignup').hide();
				$("#reqMsg").css("visibility", "visible");
				$("#reqMsg").html(msg.d);
				$("#reqMsg").css("color", "#35B5EB");
				if (msg.d == "You have been registered successfully. Please check your Email.") {
					$("#reqMsg").css("color", "#35B5EB");

					$('#txtEmail').val('');
					$('#txtDspPName').val('');
					$('#txtfstName').val('');
					$('#txtlstName').val('');
					$('#txtpassword').val('');
					$('#txtCnfrmpassword').val('');
					$('#txtCmpName').val('');
					$('#txtphoneNO').val('');
					$('#txtDomainName').val('');

				} else {

					$("#reqMsg").css("color", "red");

				}

			},

			error : function (x, e) {
				console.log("The call to the server side failed. " + x.responseText);
			}
		}).error(function (jqXHR, textStatus, errorThrown) {
            $('#value1').text(jqXHR.responseText || textStatus);
        });

	});*/
})(jQuery);
/*
function validat(requiredElements) {
    var reqMsg = ""; for (a = 0; a < requiredElements.length; a++) {
        isSet = jQuery("#" + requiredElements[a]).val().length > 0; var cvar = jQuery("#" + requiredElements[a]).val(); if (cvar == "www.domain.com") isSet = false; if (!isSet) {
            html = '<div  class="ui-state-error ui-corner-all" style="padding: 7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;">Please fill the required fields' + "</span></p>" +
            "</div>"; jQuery("#" + requiredElements[a]).css("border", "1px solid red"); reqMsg = html
        } else jQuery("#" + requiredElements[a]).css("border", "1px solid #D1E5EE")
    } if (reqMsg != "") { jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#reqMsg").html(reqMsg); jQuery("#AddreqMsg").html(html); jQuery("#reqMsgPassword").html(html); jQuery("#reqMsg").css("color", "red"); jQuery("#reqMsg").css("height", "40px"); return false } else { jQuery("#reqMsg").html(""); return true }
}
function validatPassword(requiredElements) {
    var reqMsg = ""; for (a = 0; a < requiredElements.length; a++) {
        isSet = jQuery("#" + requiredElements[a]).val().length > 0; if (!isSet) {
            html = '<div  class="ui-state-error ui-corner-all" style="padding: 7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;">Please fill the required fields' + "</span></p>" + "</div>"; jQuery("#" + requiredElements[a]).css("border", "1px solid red"); reqMsg =
            html
        } else jQuery("#" + requiredElements[a]).css("border", "1px solid #D1E5EE")
    } if (reqMsg != "") { jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#reqMsgPassword").html(reqMsg); jQuery("#AddreqMsg").html(html); jQuery("#EditreqMsg").html(html); jQuery("#reqMsgPassword").css("color", "red"); jQuery("#reqMsgPassword").css("height", "40px"); return false } else { jQuery("#reqMsgPassword").html(""); return true }
}
function validatSelect(requiredElements) {
    var reqMsg = ""; jQuery("#ctl00_MainContent_ControlsWebUCManageUsers_WebUCDashBoardUsers1_WebUCAddDashBoardUser1_ddlCompanyName").val(); for (a = 0; a < requiredElements.length; a++) {
        if (jQuery("#" + requiredElements[a]).val() == "0") isSet = false; else isSet = true; if (!isSet) {
            html = '<div  class="ui-state-error ui-corner-all" style="padding: 7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;">Please fill the required fields' +
            "</span></p>" + "</div>"; jQuery("#" + requiredElements[a]).css("border", "1px solid red"); reqMsg = html
        } else jQuery("#" + requiredElements[a]).css("border", "1px solid #D1E5EE")
    } if (reqMsg != "") { jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#reqMsg").html(reqMsg); jQuery("#reqMsg").css("color", "red"); jQuery("#reqMsg").css("height", "40px"); return false } else { jQuery("#reqMsg").html(""); return true }
}
function resetCssOfFields(requiredElements) { var reqMsg = ""; for (a = 0; a < requiredElements.length; a++) { jQuery("#" + requiredElements[a]).css("border", "1px solid #D1E5EE"); jQuery("#" + requiredElements[a]).val("") } jQuery("#reqMsg").html(""); jQuery("#AddreqMsg").html(""); jQuery("#EditreqMsg").html(""); jQuery("#reqMsg").css("height", "0px"); jQuery("#AddreqMsg").css("border", "0px") } function validateLogin() { reqElements = new Array("user_name", "password"); if (validat(reqElements)) return true; else return false }
validateValuesArray = function (_class) {
    var reqMsg = ""; ar = []; size = jQuery("." + _class).size(); if (size > 0) size = 1; else size = size; for (a = 0; a < size; a++) { isSet = jQuery("." + _class).eq(a).val().length > 0; if (!isSet) { jQuery("." + _class).eq(a).css("border", "1px solid red"); reqMsg = "please fill the required fields" } else jQuery("." + _class).eq(a).css("border", "none") } if (reqMsg != "") { jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#reqMsg").html(reqMsg); jQuery("#reqMsg").css("color", "red"); jQuery("#reqMsg").css("height", "40px"); return false } else {
        jQuery("#reqMsg").html("");
        return true
    }
}; function isNumberKey(evt) { var charCode = evt.which ? evt.which : event.keyCode; if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) return false; return true }
function validateDispalyName(DisplayName) {
    var reg = /^[A-Za-z0-9.]*jQuery/; var address = document.getElementById(DisplayName).value; if (reg.test(address) == false) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> invalid DisplayName' + "</span></p>" + "</div>"; jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#reqMsg").html(html); jQuery("#" + DisplayName +
        "").css("border", "1px solid red"); jQuery("#" + DisplayName + "").focus(); return false
    } return true
} function isCharKey(evt) { var charCode = evt.which ? evt.which : event.keyCode; if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) return true; else return false; return true }
function validate(email) { var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})jQuery/; var address = document.getElementById(email).value; if (reg.test(address) == false) { jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#" + email + "").focus(); return false } return true }
function validateDomain(Domain) {
    if (Domain == "txtAdLink" || Domain == "txtEditAdLink") { var address = document.getElementById(Domain).value; if (address == "") return true } var urlregex = new RegExp("^(http|https|ftp)://([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&amp;%jQuery-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(/(jQuery|[a-zA-Z0-9.,?'\\+&amp;%jQuery#=~_-]+))*jQuery"); var address =
    document.getElementById(Domain).value; if (address.substring(0, 3) === "www") address = "http://" + address; if (!urlregex.test(address)) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Invalid URL. Sample Url:www.Domain.com' + "</span></p>" + "</div>"; jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#reqMsg").html(html); jQuery("#AddreqMsg").html(html);
        jQuery("#EditreqMsg").html(html); jQuery("#" + Domain + "").css("border", "1px solid red"); jQuery("#" + Domain + "").focus(); return false
    } return true
}
function validatePhone(Phone) {
    var reg = /^0|[1-9]\d*jQuery/; var addressPhone = document.getElementById(Phone).value; if (reg.test(addressPhone) == false) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Only digits' + "</span></p>" + "</div>"; jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#reqMsg").html(html); jQuery("#" + Phone + "").css("border",
        "1px solid red"); jQuery("#" + Phone + "").focus(); return false
    } return true
}
function checkCharLen() {
    if (jQuery("#txtpassword").val().length >= 6 && jQuery("#txtpassword").val().length <= 15) return true; else {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> minimun atleast 6 character' + "</span></p>" + "</div>"; jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#reqMsg").html(html); jQuery("#txtpassword").css("border", "1px solid red");
        jQuery("#txtpassword").focus(); return false
    }
}
function validateName(Name) {
    var reg = /^[a-zA-Z\s]+jQuery/; var address = document.getElementById(Name).value; if (reg.test(address) == false) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> invalid Name' + "</span></p>" + "</div>"; jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#reqMsg").html(html); jQuery("#" + Name + "").css("border", "1px solid red");
        jQuery("#" + Name + "").focus(); return false
    } return true
} function isNumber(field) { var re = /^[a-zA-Z\s]+jQuery/; if (!re.test(field.value)) { html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> invalid Name' + "</span></p>" + "</div>"; jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#reqMsg").html(html) } }
function matchPassword(a, b) { if (jQuery("#" + a + "").val() == jQuery("#" + b + "").val()) { jQuery("#" + b + "").css("border", "1px solid #D1E5EE"); jQuery("#" + a + "").css("border", "1px solid #D1E5EE"); return true } else { jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#" + a + "").css("border", "1px solid red"); jQuery("#" + b + "").css("border", "1px solid red"); return false } } function showDialogerror() { jQuery("#dialog-processing").dialog({ height: 140, show: { effect: "fadeIn", duration: 5E3 }, modal: true }) }
function closeDialogerror() { jQuery("#dialog-processing").dialog("close") } showError = function (errorMessage) { html = '<div style="padding: 0 .7em;" class="ui-state-error ui-corner-all">' + '<p><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + errorMessage + "</p>" + "</div>"; jQuery("#error").html(html) };
showErrorMsg = function (errorMessage, id) { html = '<div style="padding: 0 .7em;" class="ui-state-error ui-corner-all">' + '<p><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + errorMessage + "</p>" + "</div>"; jQuery("#" + id).html(html) };
function preSnapRoom() { jQuery("#preSnapRoom").html(""); var ABalanceDialog = jQuery("#preSnapRoom").load("homepage/presnaproom.php"); ABalanceDialog.dialog({ modal: true, position: [400, 100 - jQuery(window).scrollTop()], width: 550, height: "auto", resizable: false, close: function (event, ui) { } }) }
checksnaproom = function () { if (jQuery("#userTime").val() > 0) showSnapRoom(); else { jQuery("#accountAndBalance").html(""); var ABalanceDialog = jQuery("#accountAndBalance").load("homepage/accountandbalance.php"); ABalanceDialog.dialog({ modal: true, position: [400, 100 - jQuery(window).scrollTop()], width: 550, height: "auto", resizable: false }) } };
function ValidateFields(requiredElements, ErrorDiv) {
    var reqMsg = ""; for (a = 0; a < requiredElements.length; a++) {
        isSet = jQuery("#" + requiredElements[a]).val().length > 0; if (!isSet) {
            html = '<div  class="ui-state-error ui-corner-all" style="padding: 7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;">Please fill the required fields' + "</span></p>" + "</div>"; jQuery("#" + requiredElements[a]).css("border", "1px solid red");
            reqMsg = html
        } else jQuery("#" + requiredElements[a]).css("border", "1px solid #D1E5EE")
    } if (reqMsg != "") { jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#" + ErrorDiv).html(reqMsg); jQuery("#" + ErrorDiv).show(); jQuery("#" + ErrorDiv).css("height", "30px"); return false } else { jQuery("#" + ErrorDiv).html(""); return true }
}
function ResetCssOfFields(requiredElements, ErrorDiv) { var reqMsg = ""; for (a = 0; a < requiredElements.length; a++) { jQuery("#" + requiredElements[a]).css("border", "1px solid #D1E5EE"); jQuery("#" + requiredElements[a]).val("") } jQuery("#" + ErrorDiv).hide() }
function ValidatePassword(Name, ErrorDiv) {
    if (jQuery("#" + Name).val().length >= 6 && jQuery("#" + Name).val().length <= 15) return true; else {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Password should have between 6-15 characters' + "</span></p>" + "</div>"; jQuery("#" + ErrorDiv).show(); jQuery("#" + ErrorDiv).html(html); jQuery("#" + Name).css("border", "1px solid #FF0000");
        jQuery("#" + ErrorDiv).css("height", "30px"); jQuery("html, body").animate({ scrollTop: 10 }, "fast"); return false
    }
}
function ValidateSelect(requiredElements, ErrorDiv) {
    var isSet = true; for (a = 0; a < requiredElements.length; a++) if (jQuery("#" + requiredElements[a]).val() == "0") { isSet = false; jQuery("#" + requiredElements[a]).css("border", "1px solid red") } else jQuery("#" + requiredElements[a]).css("border", "1px solid #D1E5EE"); if (!isSet) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding: 7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;">Please Select the required fields' +
        "</span></p>" + "</div>"; jQuery("#" + ErrorDiv).html(html); jQuery("#" + ErrorDiv).show(); jQuery("#" + ErrorDiv).css("height", "30px"); return false
    } else { jQuery("#" + ErrorDiv).html(""); return true }
}
function ValidateName(Name, ErrorDiv) {
    var reg = /^[a-zA-Z\s]+jQuery/; var address = document.getElementById(Name).value; if (reg.test(address) == false) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Invalid Name.' + "</span></p>" + "</div>"; jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#" + ErrorDiv).html(html); jQuery("#" + ErrorDiv).show(); jQuery("#" +
        Name + "").css("border", "1px solid red"); jQuery("#" + Name + "").focus(); return false
    } return true
}
function ValidateDispalyName(DisplayName, ErrorDiv) {
    var reg = /^[A-Za-z0-9.]*jQuery/; var address = document.getElementById(DisplayName).value; if (reg.test(address) == false) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Invalid DisplayName.' + "</span></p>" + "</div>"; jQuery("#" + DisplayName + "").css("border", "1px solid red"); jQuery("html, body").animate({ scrollTop: 10 },
        "fast"); jQuery("#" + ErrorDiv).html(html); jQuery("#" + DisplayName).css("border", "1px solid red"); jQuery("#" + ErrorDiv).show(); jQuery("#" + DisplayName + "").focus(); return false
    } return true
}
function ValidateEmail(email, ErrorDiv) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})jQuery/; var address = document.getElementById(email).value; if (reg.test(address) == false) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Invalid Email Address.' + "</span></p>" + "</div>"; jQuery("html, body").animate({ scrollTop: 10 }, "fast");
        jQuery("#" + ErrorDiv).show(); jQuery("#" + ErrorDiv).html(html); jQuery("#" + email + "").css("border", "1px solid red"); jQuery("#" + email + "").focus(); return false
    } return true
}
function ValidateDomain(Domain, ErrorDiv) {
    var urlregex = new RegExp("^(http|https|ftp)://([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&amp;%jQuery-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(/(jQuery|[a-zA-Z0-9.,?'\\+&amp;%jQuery#=~_-]+))*jQuery"); var address =
    document.getElementById(Domain).value; if (address.substring(0, 3) === "www") address = "http://" + address; if (!urlregex.test(address)) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Invalid URL. Sample Url:www.Domain.com' + "</span></p>" + "</div>"; jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#" + ErrorDiv).html(html); jQuery("#" + ErrorDiv).show();
        jQuery("#" + Domain + "").css("border", "1px solid red"); jQuery("#" + Domain + "").focus(); return false
    } return true
}
function ValidatePhone(Phone, ErrorDiv) {
    var reg = /^0|[1-9]\d*jQuery/; var addressPhone = document.getElementById(Phone).value; if (reg.test(addressPhone) == false) {
        html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Only digits Allowed.' + "</span></p>" + "</div>"; jQuery("html, body").animate({ scrollTop: 10 }, "fast"); jQuery("#" + ErrorDiv).html(html); jQuery("#" +
        ErrorDiv).show(); jQuery("#" + Phone + "").css("border", "1px solid red"); jQuery("#" + Phone + "").focus(); return false
    } return true
}
function MatchPassword(a, b, ErrorDiv) {
    if (jQuery("#" + a + "").val() == jQuery("#" + b + "").val()) { jQuery("#" + b + "").css("border", "1px solid #D1E5EE"); jQuery("#" + a + "").css("border", "1px solid #D1E5EE"); return true } else {
        jQuery("html, body").animate({ scrollTop: 10 }, "fast"); html = '<div  class="ui-state-error ui-corner-all" style="padding:7px;height:20px">' + '<p style="font-size:12px; "><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span>' + '<span style="float: left;"> Password not matched.' + "</span></p>" + "</div>";
        jQuery("#" + a + "").css("border", "1px solid red"); jQuery("#" + b + "").css("border", "1px solid red"); jQuery("#" + ErrorDiv).html(html); jQuery("#" + ErrorDiv).show(); return false
    }
};*/