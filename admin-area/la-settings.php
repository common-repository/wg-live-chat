<?php if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly ?>
<div class="notific-main-cont"><div class="notific-cont"><span class="notifi-txt"></span><span id="close-btn">&#10060;</span></div></div>
    <div id="form-section">
    	<div id="logo"><img src="<?php echo plugin_dir_url( __FILE__ ); ?>img/wg-logo.png" /></div>
        <div id="logo"><img src="<?php echo plugin_dir_url( __FILE__ ); ?>img/live-chat-wp.png" /></div>
        <div id="tab-section">
        	<ul id="tabs">
            	<li id="create" class="active">CREATE ACCOUNT</li>
                <li id="login">LOGIN</li>
                <div class="clear"></div>
            </ul>
            <div id="forms">
                <div id="create-form" class="LC_FORMS">
                    <div class="wrapper">
                    <form id="signupForm">
                    	<div class="inputSection clr-left" >
                    	<input id="txtfstName" type="text" placeholder="First Name" name="firstName" />
                        </div>
                        <div class="inputSection clr-right" >
                        <input id="txtlstName" type="text" placeholder="Last Name" name="lastName" />
                        </div>
                        <div class="inputSection clr-left">
                        <input id="txtEmail" type="email" placeholder="Email" name="email" />
                        </div>
                        <div class="inputSection clr-right">
                        <input id="txtphoneNO" type="tel" placeholder="Phone" name="phone" />
                        </div>
                        <div class="inputSection clr-left">
                        <input id="txtCmpName" type="text" placeholder="Company" name="company" />
                        </div>
                        <div class="inputSection clr-right" >
                        <input id="txtDomainName" class="website-field" type="text" placeholder="Website URL" name="websiteUrl" />
                        </div>
                        </form>
                        <div class="clear"></div>
						<div id="LoadingImage" style="display: none">
							<img src="<?php echo plugin_dir_url( __FILE__ ); ?>img/default.svg" style="max-width: 40px; margin-top: 15px; float: right; margin-right: 10px;">
						</div>
                        <div id="create-submit" class="btn">SIGN UP</div>
                        <p id="signupResp"></p>
                        <p>Already have an account? <a id="login-anchor">Login</a></p>
                    </div>
                </div>
                <div id="login-form" class="LC_FORMS">
                	<div class="wrapper">
                        <div id="login-submit" class="btn" style="width: 170px;font-size: 14px;"><a href="https://dashboard.liveadmins.net/" style="color:#fff;text-decoration:none" target="_blank" style="background: no-repeat;border: none;box-shadow: unset;">GO TO DASHBOARD</a></div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
<script>
(function ($) {
	$(document).ready(function () {
		$("#login-anchor").click(function () {
			$(".LC_FORMS").hide();
			$("#login-form").show();
			$('#login').addClass('active');
			$('#create').removeClass('active')

		});

		var selector = '#create,#login';
		$(selector).on('click', function () {
			var idClicked = $(this).attr('id');
			$(selector).removeClass('active')
			$(this).addClass('active');
			$(".LC_FORMS").hide();
			$("#" + idClicked + "-form").show();
		});

		/*
		 * Class Name: Validate
		 * Description:  Validates the form on submit click.
		 * Parameters: obj (json), all string id's need to be entered without hash (#)
		 * 	parent = id of the form tag
		 *	submitId = id of the submit button
		 *	IF VALUES NEED TO BE COMPARED IN FORM THEN
		 *		compareFrom = id of the input to compare from
		 *		compareWith = id of the input to compare with
		 * Events:
		 * 	validated : This is triggered when form is properly submitted
		 *	notValidated : This is triggered when the form is imporperly submitted
		 */
		var validate = function (obj) {
			var parent = this;

			function showError(element, msg) {
				$(element).addClass('error');
				$("<span class='errorText'>" + msg
					 + "</span>").
				insertAfter($(element));
			}

			function isValidEmail(element) {
				var res = $(element).val().
					match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
				if (res == null) {
					return false;
				} else {
					return true;
				}
			}

			function isValidPhoneNumber(element) {
				var res = $(element).val().
					match(/\+[0-9]{9,}|[0-9]{9,}/);
				if (res == null) {
					return false;
				} else {
					return true;
				}
			}
			
			function isValidWebsite(element){
				var value = $(element).val();
				var reg = /http:\/\/|www\.|http:\/\/www\.|https:\/\/|https:\/\/www\.|\/.+/ig;
				if(reg.test(value)){
					return false;
				}else if(value.indexOf(" ")> -1 || value.indexOf(",")> -1 || value.indexOf(":")> -1 || value.indexOf(";")> -1){
					return false;
				}else{
					return true;
				}
			}
			function hasSpaces(element){
				var value = $(element).val();
				if(value.indexOf(" ")>-1){
					return true;
				}else{
					return false
				}
			}
			
			function startValidation() {
				var isValidate = true;
				$('.error').removeClass('error');
				$('.errorText').remove();
				$.each($('#' + obj.parent
						 + ' input'), function (i, val) {
					if ($(val).val().trim() == "") {
						showError(val, "Please fill the above given field");
						isValidate = false;
					} else {
						var inputType = $(val).
							attr('type');
						if (inputType == 'email') {
							if (!isValidEmail(val)) {
								showError(val, "Please enter a valid email address");
								isValidate = false;
							}
						}

						if (inputType == 'tel') {
							if (!isValidPhoneNumber(val)) {
								showError(val, "Please enter a valid phone number");
								isValidate = false;
							}
						}
						if($(val).hasClass("website-field")){
							if (!isValidWebsite(val)) {
								showError(val, "Please enter a valid website URL. Example: liveadmins.com");
								isValidate = false;
							}
						}
						if($(val).hasClass("no-space")){
							if (hasSpaces(val)) {
								showError(val, "Please do not enter spaces");
								isValidate = false;
							}
						}
					}
				});

				if (typeof obj.compareFrom
					 != "undefined"
					 && typeof obj.compareWith
					 != "undefined") {
					var pass = $('#'
							 + obj.compareFrom).val();
					var confirmPass = $('#'
							 + obj.compareWith).val();
					if (pass != "" && confirmPass
						 != "") {
						if (pass != confirmPass) {
							showError($('#'
									 + obj.compareFrom), "Password and Confirm Password fields do not match");
							showError($('#'
									 + obj.compareWith), "Password and Confirm Password fields do not match");
							isValidate = false;
						}
					}
				}

				var onValidateEvent =
					new CustomEvent('onValidate');
				this.validated = function () {}
				document.getElementById(obj.parent).
				addEventListener("onValidate", parent.validated, false);

				var onErrorValidateEvent =
					new CustomEvent('onErrorValidate');
				this.notValidated = function () {}
				document.getElementById(obj.parent).
				addEventListener("onErrorValidate", parent.notValidated, false);

				if (isValidate) {
					document.getElementById(obj.parent).
					dispatchEvent(onValidateEvent);
				} else {
					document.getElementById(obj.parent).
					dispatchEvent(onErrorValidateEvent);
				}
			}

			$('#' + obj.submitId).click(function () {
				startValidation();
			});

			$("#" + obj.parent
				 + " input[type='password']").
			keyup(function (event) {
				if (event.keyCode == 13) {
					startValidation();
				}
			});
		};

		var signUpValidate = new validate({
				parent : 'create-form',
				submitId : 'create-submit',
				compareFrom : 'password',
				compareWith : 'confirmPassword'
			});
		signUpValidate.notValidated = function () {
			$(".notific-main-cont").fadeIn();
			$(".notifi-txt").html("Sign up form: Not validated");
		}
		signUpValidate.validated = function () {
			$("#create-submit").css("pointer-events", "none"); 
			$('#loading').html('<img src="<?php echo plugin_dir_url( __FILE__ ); ?>img/default.svg">'); 
			$("#reqMsg").css("visibility", "hidden");

			var Email = $('#txtEmail').val().trim();
			var firstName = $('#txtfstName').val().trim();
			var lastName = $('#txtlstName').val().trim();
			var companyName = $('#txtCmpName').val().trim();
			var phoneNO = $('#txtphoneNO').val().trim();
			var DomainName = $('#txtDomainName').val().trim();
			DomainName = DomainName.replace(/ /g,"");
			DomainName = DomainName.replace(/(http:\/\/|https:\/\/|)(www.)/,"");
			console.log("DomainName",DomainName)
			var dataToEncode = DomainName.replace(/http:\/\/|www\.|http:\/\/www\.|https:\/\/|https:\/\/www\./ig, '');
			if (dataToEncode.match(/\/$/)) {}
			else {
				dataToEncode = dataToEncode + "/";
			}
		
			dataToEncode = companyName + "/" + dataToEncode;
			//$('#txtDomainName').val();
			$("#LoadingImage").show();
			$.ajax({
				type : "POST",
				
				url : "//blue.thelivechatsoftware.com/ChatAppApi/api/contract/addcontract",
				data : JSON.stringify(
					{
					"name":  DomainName ,
					"email": Email ,
					"companyName": companyName ,
					"contactPerson": firstName + ' '+ lastName,
					"phone": phoneNO 
					}
				),
				contentType : "application/json",
				crossDomain : true,
				success : function (data) {
					$("#LoadingImage").hide();
					$("#create-submit").css("pointer-events", "unset");
					var message = data.msg;
					if(!!data.error){
						message = data.msg || 'Error while completing operations';
					}
					if(data.data && !data.error){
						var getID = message.split(",");
							message = getID[0];
							$('#txtEmail,#txtDspPName,#txtfstName,#txtlstName,#txtpassword,#txtCnfrmpassword,#txtCmpName,#txtphoneNO,#txtDomainName').val('');
					}
					$(".notific-main-cont").fadeIn();
					$(".notifi-txt").html("<span class='notifi-txt'>" + message + "</span>");

				},

				error : function (x, e) {
					$("#create-submit").css("pointer-events", "unset"); 
					$(".notific-main-cont").fadeIn();
					console.log(x)
					console.log(e)
					$(".notifi-txt").html("<span class='notifi-txt'>The call to the server side failed. " + x.responseText + "</span>");
				}
			});

		}
		
		$("#close-btn").on("click", function () {
			$(".notific-main-cont").fadeOut();
		});
	});
	
})(window.jQuery);

</script>
