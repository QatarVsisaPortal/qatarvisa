
function getFees(visaNumber)
{
	try
	{
		var obj = new Object() ; 	
	 	var url = "/VisaFeeWeb/VisaFee?action=calc_fee"   ;
	 	
	 	url +="&visa_num=" + visaNumber ;
	 	if( LanguageType.toUpperCase() == "ENG" )
	 		url +="&lang=en"   ;
	 	//alert(param);
	 	//window.open(url) ;
	 	var ajax = new AJAXInteraction(url, validateFeesCallback,"checkFees",obj); 
	 	ajax.doGet();
	}
	catch(e)
	{
		alert(e.description);
	}
}
function payFees()
{
		if( document.getElementById("feesForm") )
		{
			document.getElementById("feesForm").submit() ;
		}	
}
function validateFeesCallback(response,actionType,obj)
 {
 	 try
 	 {
 	 	//alert(response);  
 	 	var mainFees = -1; 	
 	 	var error 		= response.match(/<msg>(.*?)<\/msg>/);
 	 	var feeAmount   = response.match(/<fee>(.*?)<\/fee>/);
 	 	var spo_id   = response.match(/<spo_id>(.*?)<\/spo_id>/);
 	 	//alert(mainFees);
 		var resultValue = "";
 		if( feeAmount != null)
 		{
 			mainFees 	= feeAmount[1] ;
 			resultValue = Math.ceil(mainFees);
 		
 		}
 		
 		var message = "" ;
 		//alert(resultValue);
 		if( resultValue > 0 )
 		{
 			//mainFees = (resultValue+100)+".00" ; ;
 			if( LanguageType.toUpperCase() == "ENG" )
 				message = " Total Fees   " + mainFees + " QR" ;
 			else
 				message = " «·—”‹‹Ê„ «·„Õ ”»… ⁄·Ï ”„… «·œŒÊ·   " + mainFees + " —Ì«· ﬁÿ—Ì" ; 
 			//message +="<input id='feesButton' type='button' onclick='javaScript:payFees();' value=' Õ’Ì· «·—”Ê„' >" ;
 			
 			if(document.getElementById("tdFeesBtn"))
 				document.getElementById("tdFeesBtn").style.display= "" ;		
 			
 			if(document.getElementById("fee_amt"))
 				document.getElementById("fee_amt").value = mainFees ;
 			
 		}
 		else if( resultValue == 0 )
 		{
 			if( LanguageType.toUpperCase() == "ENG" )
 			{
 				message = " Visa is Exempted from fees, please wait ......" ;
 				
 				if( document.getElementById("blink_text") )
 					document.getElementById("blink_text").innerHTML = "Visa Ready to be printed" ;
 					
 			}
 			else
 			{
				if( document.getElementById("blink_text") )
 					document.getElementById("blink_text").innerHTML = "”„… «·œŒÊ· Ã«Â“… ··ÿ»«⁄…" ;
  				
 				message = "”„… «·œŒÊ· „⁄›«… „‰ «·—”Ê„ «·—Ã«¡ «·«‰ Ÿ«— .......  " ; 
 			}
 			
 			if(document.getElementById("fee_amt"))
 				document.getElementById("fee_amt").value = resultValue ;
 			
 			payFees() ;

 		}	
 		else
 		{
 			
 			if(error != null)
			{
				//alert(error[1]);
				message = error[1] ;
				
				if( LanguageType.toUpperCase() == "ENG" )
	 			{
	 				if( document.getElementById("blink_text") )
	 				{
	 					document.getElementById("blink_text").innerHTML = message ;
	 					message = "Visa canít be printed" ;
	 				}
	 					
	 			}
	 			else
	 			{
	 				if( document.getElementById("blink_text") )
	 				{
	 					document.getElementById("blink_text").innerHTML = message ;
	 					message = "·« Ì„ﬂ‰ ÿ»«⁄… ”„… «·œŒÊ·" ;
	 				}
	 			}				
			}
			else
			{
				alert("·« ÌÊÃœ —”«·…");
				
			}
 		}
 		
 		if( document.getElementById("feesId") )
 		{
 			document.getElementById("feesId").innerHTML = message ;
 		}
 		
 		if( spo_id != null )
 		{
 			//alert(spo_id[1]);
 			if( document.getElementById("spo_id") )
 				document.getElementById("spo_id").value = spo_id[1]	 ;
 		}	
 	 }
 	 catch(e)
 	 {
 	 	 
 	 }
 		
}
function AJAXInteraction(url,callback,actionType,id) {

    var doReq = init();
    doReq.onreadystatechange = processRequest;
        
    function init() {
		return  newXMLHttpRequest() ;  
    }
    
    function processRequest () {
      // readyState of 4 signifies request is complete
      if (doReq.readyState == 4) {
	// status of 200 signifies sucessful HTTP call
        if (doReq.status == 200) {
          if (callback) callback(doReq.responseText,actionType,id);
        }
      }
    }

    this.doGet = function() {
      // make a HTTP GET request to the URL asynchronously
      doReq.open("GET", url, true);
      doReq.send(null);
    }
    this.doPost = function() {
      // make a HTTP GET request to the URL asynchronously
      doReq.open("POST", url, true);
      doReq.send(null);
    }   
    this.doPost = function(param) {
        // make a HTTP GET request to the URL synchronously
        //alert(param);
        doReq.open("POST", url, false);
     // Specify that the body of the request contains form data
        doReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");        
        doReq.send(param);
      }       
}
/*
 * Returns a new XMLHttpRequest object, or false if this browser
 * doesn't support it
 */
function newXMLHttpRequest() {

  var xmlreq = false;

  if (window.XMLHttpRequest) {

    // Create XMLHttpRequest object in non-Microsoft browsers
    xmlreq = new XMLHttpRequest();

  } else if (window.ActiveXObject) {

    // Create XMLHttpRequest via MS ActiveX
    try {
      // Try to create XMLHttpRequest in later versions
      // of Internet Explorer

      xmlreq = new ActiveXObject("Msxml2.XMLHTTP");

    } catch (e1) {

      // Failed to create required ActiveXObject

      try {
        // Try version supported by older versions
        // of Internet Explorer

        xmlreq = new ActiveXObject("Microsoft.XMLHTTP");

      } catch (e2) {

        // Unable to create an XMLHttpRequest with ActiveX
      }
    }
  }

  return xmlreq;
}