var enable_download = true;
var first_upload_status = true;
var first_decrypt_status = true;
var cookieName = "OrbisSavePath";
var myIndex = -1;
var myParent = -1;

function SCAuth()
{
    $('#main').load('auth/main.jsp?applet=3', function()
    {
	authAccess(0, 0);
    });
}

function authProgress(message) {
	
	var language = $('html').attr('lang');

	if(language == 'en'){
		if (message == 'validate_password' || message == 'validate password') {
			message = "Please enter a valid PIN";
		} else if (message == 'loading_applet' || message == 'loading applet') {
				message = "Please Wait..";
		} else if (message == 'incorrect_password' || message == 'incorrect password') {
				message = "Please enter a valid PIN";
		} else if (message == 'card_removed' || message == 'card removed' || message == 'Invalid card') {
				message = "Please insert a valid smart card";
		} else if (message == 'waiting_card' || message == 'please insert your smartcard' || message == 'insert smartcard reader or your smartcard') {
				message = "Please insert smart card";
		}else if (message == 'Authentication_Failed' || message == 'Unknown Error during Authentication' || message == 'authentication token empty' ) {
				message = " Please enter a valid PIN";
		}else if (message == 'user authenticated'){
			message= '';
		}
		}

		if(language == 'ar') {
		if (message == 'validate_password' || message == 'validate password') {
			message = "الرجاء ادخال الرقم السرى للبطاقة";			
		} else if (message == 'loading_applet' || message == 'loading applet') {
				message = "الرجاء الانتظار";
		} else if (message == 'incorrect_password' || message == 'incorrect password') {
				message = "الرجاء ادخال الرقم السرى للبطاقة بشكل صحيح ";
		} else if (message == 'card_removed' || message == 'card removed' || message == 'Invalid card') {
				message = "تم سحب البطاقة";
		} else if (message == 'waiting_card' || message == 'please insert your smartcard' || message == 'insert smartcard reader or your smartcard') {
				message = "الرجاء ادخال البطاقة";
		}else if (message == 'Authentication_Failed' || message == 'Unknown Error during Authentication' || message == 'authentication token empty' ) {
				message = "الرجاء ادخال الرقم السرى للبطاقة بشكل صحيح ";
		}else if (message == 'user authenticated'){
			message= '';
		}
		}		
		document.getElementById("auth-result").innerHTML = message;
	}

function login() {
//	alert('Inside login()');
	var pin = document.getElementById("pinInput").value;
	if (pin != '') {
		//alert('Inside login() pin not null' + 'password--->' + pin);

		authProgress("loading_applet");
		var applet = document.getElementById("AuthApplet");
	//	alert('Inside login() applet--->' + applet);
		try {
			var authenticated = applet.isAuthenticated(pin);
		//	alert("loading_applet===>" + authenticated);
			authProgress(applet.getMessage());
			if (authenticated == true) {
			//	alert("inside if===>" + authenticated);
				var token = applet.getTokenSignature();
			//	alert("loading_applet token===>" + token);
				var qid = applet.getQid();
			//	alert("loading_applet qid===>" + qid);
				var userType = applet.getUserType();
			//	alert("loading_applet userType===>" + userType);
				authenticationReady(authenticated, 0, '', '', qid,token, userType);
			} else {

				authProgress(applet.getMessage());
			}
		} catch (e) {
			console.log('e : ' + e);
			//alert(e);
		}
	} else {
		//alert('Inside login() pin is null');
		authProgress("validate_password");
	}
}

function checkEnter(event) {
	if (event.keyCode == 13) {
		login();
	}
}


function authenticationReady(authenticated, authType, certPath, password, qid, encAuthToken, userType)
{
  //console.log(encAuthToken);
    if (authenticated)
    {
    	//$("#dynamic_section h5").replaceWith("<h5>Successfully Authenticated!</h5>");
    	//document.getElementById("auth-result").innerHTML = "";
		document.getElementById("qid").value = qid;
		document.getElementById("authType").value = authType;
		document.getElementById("userType").value = userType;
		document.getElementById("encAuthToken").value = encAuthToken;			
		smartcardAction.submit();
    }
    else
    {
	//$("#dynamic_section h5").html("<h5>Authentication Failed</h5>");
   // document.getElementById("auth-result").innerHTML = "Authentication Failed innerHTML";
	alert("Authentication_Failed");
	authProgress("Authentication_Failed");
	//window.location = 'auth.jsp';
    }
}


function authAccess(action, authType)
{
    switch (action)
    {
    case 0:
	 console.log("blocking");
	/*$.blockUI(
	{
	    message : '<h5><img src="images/loading.gif" /> Loading...</h5>',
	    overlayCSS :
	    {
		opacity : 0
	    },
	    css :
	    {
		border : 'none',
		top : $("#applet-result").offset().top + 24 + 'px',
		left : $("#applet-result").offset().left + (($("#applet-result").width() - 50) / 2) + 'px',
		width : '50px',
		height : '24px'
	    }
	});*/
	break;
    case 1:
    	console.log('unblocking......');
	//$.unblockUI();
	//if (authType == 0)
	//{
	    //$("#applet").before("<h4>Please Insert Your SmartCard</h4>");
	    //$("#applet").before("<h5>Keep your smartcard inserted until logout</h5>");
	//}
	break;
    }
}


function logout()
{
    $.ajax(
    {
	url : '/AuthTest/GetFileServlet',
	type : 'POST',
	data :
	{
	    action : 2
	},
	error : function(response)
	{
	    $("#download_status h5").html("Error: Could not logout");
	},
	success : function(response)
	{
	    window.location = '/AuthTest/index.jsp';
	}
    });
}