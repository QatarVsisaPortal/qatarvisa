function moveFocus()
{
	var obj = event.srcElement ;//document.getElementById(objName) ;
	
	if( event.keyCode == 9 || event.keyCode == 16) return true;
	
	if(obj)
	{
		var objName = obj.name ;
		if( obj.value.length == obj.maxLength )
		{
			
			 if( objName=="part1" && document.getElementById("part2") && (document.getElementById("part2").value == "" || document.getElementById("part2").value.length != document.getElementById("part2").maxLength) )
			 {
			 	document.getElementById("part2").focus();
			 }	
			 else if( objName=="part1" && document.getElementById("part3") && document.getElementById("part3").value == "" )
			 {
			 	document.getElementById("part3").focus();
			 }			 
			 else if( objName=="part2" && document.getElementById("part1") && document.getElementById("part1").value == "" )
			 {
			 	document.getElementById("part1").focus();
			 }
			 else if( objName=="part2" && document.getElementById("part3") && document.getElementById("part3").value == "" )
			 {
			 	document.getElementById("part3").focus();
			 }	
			 else if( objName=="part3" && document.getElementById("part2") && document.getElementById("part2").value == "" )
			 {
			 	document.getElementById("part2").focus();
			 }	
			 else if( objName=="part3" && document.getElementById("part1") && document.getElementById("part1").value == "" )
			 {
			 	document.getElementById("part1").focus();
			 }			 			 		 
		}
	}	
}


function showHideVisaNo(selectedIdVal)
{
	if( selectedIdVal == "visaNo" )
	{
		hidePaspNo() ;
		showVisaNo();		
	}
	else 
	{hideVisaNo() ;
		showPaspNo() ;
		
	}
}
function getBrowserName() {
    var name = "Unknown";
    if(navigator.userAgent.indexOf("MSIE")!=-1){
        name = "MSIE";
    }
    else if(navigator.userAgent.indexOf("Firefox")!=-1){
        name = "Firefox";
    }
    else if(navigator.userAgent.indexOf("Opera")!=-1){
        name = "Opera";
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1){
        name = "Chrome";
    }
    else if(navigator.userAgent.indexOf("Safari")!=-1){
        name = "Safari";
    }
    return name;   
}


function convertToUppercase(evnt) {
	var browser = getBrowserName();
	if(browser=="MSIE"){
	var charCode =  event.keyCode;
	
	if(charCode == 13){
		if(checkvaluesWithoutMessages()){
		document.VisaApproval.submit();
		}
		
	} else if(charCode>=97 && charCode<=122){
		charCode=charCode-32;			
		event.keyCode=charCode;			
	}
	
	}else{
		var charCode =  event.charCode;
		
		if(charCode == 13){
			if(checkvaluesWithoutMessages()){
			document.VisaApproval.submit();
			}
			
		} else if(charCode>=97 && charCode<=122){
			charCode=charCode-32;			
			event.charCode=charCode;			
		}
		
		
	}
	
	
	return true;
}

function convertToUppercaseeServices(evnt) {
	var browser = getBrowserName();
	if(browser=="MSIE"){
	var charCode =  event.keyCode;
	
	if(charCode == 13){
		if(checkvaluesWithoutMessages()){
			document.VisaApproval.submit();
			}
		
	} else if(charCode>=97 && charCode<=122){
		charCode=charCode-32;			
		event.keyCode=charCode;			
	}
	
	}else{
		var charCode =  event.charCode;
		
		if(charCode == 13){
			if(checkvaluesWithoutMessages()){
				document.VisaApproval.submit();
				 
				}
		} else if(charCode>=97 && charCode<=122){
			charCode=charCode-32;			
			event.charCode=charCode;			
		}
		
		
	}
	
	
	return;
}



function showPaspNo()
{
	if( document.getElementById("PasspNo") )
	{
		document.getElementById("PasspNo").readOnly = false ;
		document.getElementById("PasspNo").disabled = false ;
		document.getElementById("PasspNo").className = "TxtClass" ;
		document.getElementById("PasspNo").focus();
		
	}		
}
function hidePaspNo()
{
	if( document.getElementById("PasspNo") )
	{
		document.getElementById("PasspNo").readOnly = true ;
		document.getElementById("PasspNo").disabled = true ;
		document.getElementById("PasspNo").className = "TxtDisabledClass" ;
		
	}		
}
function showPaspNoNew()
{
	if( document.getElementById("PasspNo") )
	{
		document.getElementById("PasspNo").readOnly = false ;
		document.getElementById("PasspNo").disabled = false ;
		$("#PasspNo").removeClass ("disabled-text") ;
		document.getElementById("PasspNo").focus();
		
	}		
}
function hidePaspNoNew()
{
	if( document.getElementById("PasspNo") )
	{
		document.getElementById("PasspNo").readOnly = true ;
		document.getElementById("PasspNo").disabled = true ;
		$("#PasspNo").addClass ("disabled-text") ;
		
	}		
}
function showVisaNo()
{
	if( document.getElementById("visaNo") )
	{
		document.getElementById("visaNo").readOnly = false ;
		document.getElementById("visaNo").disabled = false ;
		document.getElementById("visaNo").className = "TxtClass" ;
		document.getElementById("visaNo").focus();
		
	}		
}

function showVisaNoNew()
{
	if( document.getElementById("visaNo") )
	{
		document.getElementById("visaNo").readOnly = false ;
		document.getElementById("visaNo").disabled = false ;
		$("#visaNo").removeClass("disabled-text") ;
		document.getElementById("visaNo").focus();
		
	}		
}

function hideVisaNoNew()
{
	if( document.getElementById("visaNo") )
	{
		document.getElementById("visaNo").readOnly = true ;
		document.getElementById("visaNo").disabled = true ;
		$("#visaNo").addClass ("disabled-text") ;
		
	}		
}

function hideVisaNo()
{
	if( document.getElementById("visaNo") )
	{
		document.getElementById("visaNo").readOnly = true ;
		document.getElementById("visaNo").disabled = true ;
		document.getElementById("visaNo").className = "TxtDisabledClass" ;
		
	}		
}

function showHideDate(selectedIdVal)
{
	if( selectedIdVal == "qidNo" )
	{
		hideDate() ;
		showQidNo();		
	}
	else 
	{
		showDate() ;
		hideQidNo() ;
	}
}


function showDate()
{
		if(document.getElementById("_imgCalender"))   	
		{
			document.getElementById("_imgCalender").readOnly = false ;
			document.getElementById("_imgCalender").disabled = false ;
			
		}
 		if(document.getElementById("year"))   	
		{
			document.getElementById("year").readOnly = false ;
			document.getElementById("year").disabled = false ;
			document.getElementById("year").className = "TxtClass" ;
			
		}
 		if(document.getElementById("month"))   	
		{
			document.getElementById("month").readOnly = false ;
			document.getElementById("month").disabled = false ;
			document.getElementById("month").className = "TxtClass" ;
			
		}
 		if(document.getElementById("day"))   	
		{
			document.getElementById("day").readOnly = false ;
			document.getElementById("day").disabled = false ;
			document.getElementById("day").className = "TxtClass" ;
			document.getElementById("day").focus();
		}		
}





function hideDate()
{
 		if(document.getElementById("_imgCalender"))   	
		{
			document.getElementById("_imgCalender").readOnly = true ;
			document.getElementById("_imgCalender").disabled = true ;
			
		}
 		if(document.getElementById("applicationDate"))   	
		{
			//document.getElementById("applicationDate").readOnly = true ;
			//document.getElementById("applicationDate").disabled = true ;
			//document.getElementById("applicationDate").className = "TxtDisabledClass" ;
		}	
 		if(document.getElementById("year"))   	
		{
			document.getElementById("year").readOnly = true ;
			document.getElementById("year").disabled = true ;
			document.getElementById("year").className = "TxtDisabledClass" ;
			//document.getElementById("year").value ="" ;
			
		}
 		if(document.getElementById("month"))   	
		{
			document.getElementById("month").readOnly = true ;
			document.getElementById("month").disabled = true ;
			document.getElementById("month").className = "TxtDisabledClass" ;
			//document.getElementById("month").value = "" ;
		}
 		if(document.getElementById("day"))   	
		{
			document.getElementById("day").readOnly = true ;
			document.getElementById("day").disabled = true ;
			document.getElementById("day").className = "TxtDisabledClass" ;
			//document.getElementById("day").value = "" ;
			
		}
}
function showQidNo()
{
	if( document.getElementById("qidNo") )
	{
		document.getElementById("qidNo").readOnly = false ;
		document.getElementById("qidNo").disabled = false ;
		document.getElementById("qidNo").className = "TxtClass" ;
		document.getElementById("qidNo").focus();
		
	}		
}
function showHideDateNew()
{
	if(document.getElementById("radioByQid").checked)
	 { 
		hideDateNew() ;
		showQidNoNew();		
	}
	else 
	{
		showDateNew() ;
		hideQidNoNew() ;
	}
}
function showDateNew()
{
	if(document.getElementById("applicationDate"))   	
	{
			 $("#applicationDate").removeClass("disabled-text");
		 
		 document.getElementById("applicationDate").disabled = false ;
	}
	if(document.getElementById("DateIcon"))   	
	{
		 $("#DateIcon").removeClass("hidden");
	 
	}	
		
//		if(document.getElementById("Datelabel"))   	
//	{
//		 $("#Datelabel").removeClass("disabled");
//		 
//	
//		
//	}

		
//		if(document.getElementById("DateRadio"))   	
//	{
//		
//		document.getElementById("DateRadio").disabled = false ;
//		
//	}
	    
}

function hideDateNew()
{
 		if(document.getElementById("applicationDate"))   	
		{
 			 $("#applicationDate").addClass("disabled-text");
 			document.getElementById("applicationDate").value = "";
			 document.getElementById("applicationDate").disabled = true ;
		}
 		if(document.getElementById("DateIcon"))   	
		{
 		 $("#DateIcon").addClass("hidden");
		 
		}
 		
// 		if(document.getElementById("Datelabel"))   	
//		{
//			 $("#Datelabel").addClass("disabled");
//			 
//		
//			
//		}
 		
 		
// 		if(document.getElementById("radioByDate"))   	
//		{
//			
//			document.getElementById("radioByDate").disabled = true ;
//			
//		}
// 		
  
}

function showQidNoNew()
{
	
	if(document.getElementById("qidNo"))   	
		{
			 $("#qidNo").removeClass("disabled-text");
			 
		 document.getElementById("qidNo").disabled = false ;
		 document.getElementById("qidNo").readOnly = false ;
		 //document.getElementById("qidNo").focus();
		}
			
		
//		if(document.getElementById("Qidlabel"))   	
//		{
//		 $("#Qidlabel").removeClass("disabled");
//		}
//		 
//		
//		if(document.getElementById("radioByQid"))   	
//		{
//		
//		document.getElementById("radioByQid").disabled = false ;
//		
//		}
	
	 
}

function hideQidNoNew()
{
	
	if(document.getElementById("qidNo"))   	
		{
			 $("#qidNo").addClass("disabled-text");
			 
		document.getElementById("qidNo").value = "";
		document.getElementById("qidNo").disabled = true ;
		document.getElementById("qidNo").readOnly = true ;
		}
			
		
//		if(document.getElementById("Qidlabel"))   	
//		{
//		 $("#Qidlabel").addClass("disabled");
//		}
		 
		
//		if(document.getElementById("radioByQid"))   	
//		{
//		
//		document.getElementById("radioByQid").disabled = true ;
//		
//		}
	
	 
}

function hideQidNo()
{
	if( document.getElementById("qidNo") )
	{
		document.getElementById("qidNo").readOnly = true ;
		document.getElementById("qidNo").disabled = true ;
		document.getElementById("qidNo").className = "TxtDisabledClass" ;
		
	}		
}


function showHideItems()
{
   
  //_HpbHideObj('dateRow');
    var selected = event.srcElement.value;//document.VisaApproval.kind.value;
    if( selected == "visit" )
    {
		hideDate() ;	
		hideQidNo() ;
		if( document.getElementById("radioByDate") )
		{
			document.getElementById("radioByDate").disabled = true ;
			document.getElementById("radioByDate").checked = false ;
		}	
		if( document.getElementById("radioByQid") )
		{
			document.getElementById("radioByQid").disabled = true ;
			document.getElementById("radioByQid").checked = false ;
		}			
    }
    else if(selected=="residency")
    {
    	
 			
		if( document.getElementById("radioByDate")    )
		{		if( document.getElementById("radioByQid")    )
				{
			
			document.getElementById("radioByDate").disabled = false ;
			document.getElementById("radioByQid").disabled = false ;
						if(document.getElementById("radioByDate").checked == true)
						{
							showDate() ;
							hideQidNo();
							document.getElementById("radioByDate").checked = true ;
					
							}
						else if(document.getElementById("radioByQid").checked == true ){
								hideDate() ;
								showQidNo();
								document.getElementById("radioByQid").checked = true ;
							}
						else{
							showDate() ;
							hideQidNo();
							document.getElementById("radioByDate").checked = true ;
						}
			
			
				}
		}	
    }
}


function showHideItemsNew()
{
  //_HpbHideObj('dateRow');
    var selected = document.getElementById("kindVisit").checked ;//document.VisaApproval.kind.value;
    if( selected )
    {
    	 
		hideDateNew() ;	
		hideQidNoNew() ;
		if( document.getElementById("Nationality") )
		{
			document.getElementById("Nationality").disabled = false ;
		}
		
		if( document.getElementById("radioByDate") )
		{
			document.getElementById("radioByDate").disabled = true ;
			 
			
		}	
		if(document.getElementById("Qidlabel"))   	
		{
		 $("#Qidlabel").addClass("disabled");
		}
		if( document.getElementById("radioByQid") )
		{
			document.getElementById("radioByQid").disabled = true ;
		 
		}	
		if(document.getElementById("Datelabel"))   	
		{
		 $("#Datelabel").addClass("disabled");
		}
		
		document.getElementById("applicationDate").value = "";
		document.getElementById("qidNo").value = "";
    }
    else if( document.getElementById("kindPerm").checked)
    {
    	if( document.getElementById("Nationality") )
		{
    		document.getElementById("Nationality").disabled = true ;
			document.getElementById("Nationality").value = "000" ;
		}
    	
    	if( document.getElementById("radioByDate")    )
		{		if( document.getElementById("radioByQid")    )
				{
			
			document.getElementById("radioByDate").disabled = false ;
			document.getElementById("radioByQid").disabled = false ;
						if(document.getElementById("radioByDate").checked )
						{
							showDateNew() ;
							hideQidNoNew();
					
							}
					
						else if(document.getElementById("radioByQid").checked){
								hideDateNew() ;
								showQidNoNew();
							 
							}
						else{
							$('#radioByDate').radio('check');  
							showDateNew() ;
							hideQidNoNew();
							$('#radioByDate').radio('check');  
						}
						if(document.getElementById("Datelabel"))   	
						{
						 $("#Datelabel").removeClass("disabled");
						}
						if(document.getElementById("Qidlabel"))   	
						{
						 $("#Qidlabel").removeClass("disabled");
						}
			
				}
		}	
    }
}


function showHideItemsEnquiryNew()
{
  //_HpbHideObj('dateRow');
    var selected = document.getElementById("radioByPaspNo").checked ; 
    if( selected )
    {
    	hideVisaNoNew() ;
		showPaspNoNew() ;
    	 
    		
     
    }
    else if( document.getElementById("radioByVisaNo").checked)
    {
    	
    	hidePaspNoNew() ;
		showVisaNoNew();	
    }
}
function checkvalues()
{
	
		var dateValue = document.VisaApproval.applicationDate;
		var strMessage = "" ;
		if (document.VisaApproval.part1.value=="" || document.VisaApproval.part1.value.length != 2) 
		{
			strMessage = LanguageType.toUpperCase() == "ENG" ? "Please,Enter the first part correctly" : "ÇáÑÌÇÁ ÇÏÎÇá ÇáÌÒÁ ÇáÃæá ÈÔßá ÕÍíÍ" ;
			alert(strMessage) ;
			document.VisaApproval.part1.focus();
			return false;
		}
		else if (document.VisaApproval.part2.value=="" || document.VisaApproval.part2.value.length != 4) 
		{
			strMessage = LanguageType.toUpperCase() == "ENG" ? "Please,Enter the second part correctly" : "ÇáÑÌÇÁ ÇÏÎÇá ÇáÌÒÁ ÇáËÇäí ÈÔßá ÕÍíÍ" ;
			alert(strMessage) ;
			document.VisaApproval.part2.focus();
			return false;
		}
		else if (document.VisaApproval.part3.value=="" || document.VisaApproval.part3.value.length != 6) 
		{
			strMessage = LanguageType.toUpperCase() == "ENG" ? "Please,Enter the Third part correctly" : "ÇáÑÌÇÁ ÇÏÎÇá ÇáÌÒÁ ÇáËÇáË ÈÔßá ÕÍíÍ" ;
			alert(strMessage) ;
			document.VisaApproval.part3.focus();
			return false;
		}
		else if (document.VisaApproval.kindPerm.checked )
		{
			if( document.VisaApproval.radioByQid && document.VisaApproval.radioByDate.checked )
			{
				if( document.VisaApproval.year && document.VisaApproval.month && document.VisaApproval.day)
				{
					var dayStr 		= document.VisaApproval.day.value ;
					var monthStr 	= document.VisaApproval.month.value ;
					
					if( dayStr.length == 1 )
						dayStr = "0" + dayStr ;
					if( monthStr.length == 1 )
						monthStr = "0" + monthStr ;
					
					document.VisaApproval.month.value = monthStr ;
					document.VisaApproval.day.value = dayStr ;
					
					dateValue.value = document.VisaApproval.year.value + "/" + document.VisaApproval.month.value + "/" + document.VisaApproval.day.value ;
				}
	
				if( dateValue.value.length != 10 )
				{
					strMessage = LanguageType.toUpperCase() == "ENG" ? "Please,Enter Valid Date" : "ÇáÑÌÇÁ ÇÏÎÇá ÇáÊÇÑíÎ ÈÔßá ÕÍíÍ" ;
					alert(strMessage) ;
					if( !document.VisaApproval.year )
						dateValue.focus();
					else
						document.VisaApproval.year.focus();
					
					dateValue.value = "" ;		
					return false;
				}
				else if( !isDate(dateValue.value) )
				{
					if( !document.VisaApproval.year )
						dateValue.focus();
					else
						document.VisaApproval.year.focus();
					
					dateValue.value = "" ;	
					return false ;
				}
			}
			else 
			{
				dateValue.value = "" ;
				var qidNoVal = Trim(document.VisaApproval.qidNo.value) ;
				if( qidNoVal == "" )
				{
					strMessage = LanguageType.toUpperCase() == "ENG" ? "Please,Enter Qatari Id Number" : "ÇáÑÌÇÁ ÇÏÎÇá ÇáÑÞã ÇáÔÎÕí ÈÔßá ÕÍíÍ" ;
					alert(strMessage) ;
					document.VisaApproval.qidNo.focus();
					return false;		
				}
				else if( qidNoVal.length != 11 )
				{
					strMessage = LanguageType.toUpperCase() == "ENG" ? "QID should be 11 digits" : "ÇáÑÌÇÁ ÇÏÎÇá ÇáÑÞã ÇáÔÎÕí ÈÔßá ÕÍíÍ" ;
					alert(strMessage) ;
					document.VisaApproval.qidNo.focus();
					return false;			
				}				
			}	
		}
		
		
		toUpperValue(document.VisaApproval.part1);
		toUpperValue(document.VisaApproval.part2);
		toUpperValue(document.VisaApproval.part3);
		
		if( document.VisaApproval.kindVisit.checked )
			dateValue.value = "" ;
		return true;
}
function checkvalueseService(lang)
{
	
		var dateValue = document.VisaApproval.applicationDate;
		var strMessage = "" ;
		if (document.VisaApproval.part1.value=="" || document.VisaApproval.part1.value.length != 2) 
		{
			strMessage = lang.toUpperCase() == "EN" ? "Please,Enter the first part correctly" : "ÇáÑÌÇÁ ÇÏÎÇá ÇáÌÒÁ ÇáÃæá ÈÔßá ÕÍíÍ" ;
			alert(strMessage) ;
			document.VisaApproval.part1.focus();
			return false;
		}
		else if (document.VisaApproval.part2.value=="" || document.VisaApproval.part2.value.length != 4) 
		{
			strMessage =  lang.toUpperCase() == "EN"  ? "Please,Enter the second part correctly" : "ÇáÑÌÇÁ ÇÏÎÇá ÇáÌÒÁ ÇáËÇäí ÈÔßá ÕÍíÍ" ;
			alert(strMessage) ;
			document.VisaApproval.part2.focus();
			return false;
		}
		else if (document.VisaApproval.part3.value=="" || document.VisaApproval.part3.value.length != 6) 
		{
			strMessage =  lang.toUpperCase() == "EN"  ? "Please,Enter the Third part correctly" : "ÇáÑÌÇÁ ÇÏÎÇá ÇáÌÒÁ ÇáËÇáË ÈÔßá ÕÍíÍ" ;
			alert(strMessage) ;
			document.VisaApproval.part3.focus();
			return false;
		}
	
		else if (document.VisaApproval.kindPerm.checked )
		{
			if( document.VisaApproval.radioByQid && document.VisaApproval.radioByDate.checked )
			{
				if( document.VisaApproval.year && document.VisaApproval.month && document.VisaApproval.day)
				{
					var dayStr 		= document.VisaApproval.day.value ;
					var monthStr 	= document.VisaApproval.month.value ;
					
					if( dayStr.length == 1 )
						dayStr = "0" + dayStr ;
					if( monthStr.length == 1 )
						monthStr = "0" + monthStr ;
					
					document.VisaApproval.month.value = monthStr ;
					document.VisaApproval.day.value = dayStr ;
					
					dateValue.value = document.VisaApproval.year.value + "/" + document.VisaApproval.month.value + "/" + document.VisaApproval.day.value ;
				}
	
				if( dateValue.value.length != 10 )
				{
					strMessage =  lang.toUpperCase() == "EN"  ? "Please,Enter Valid Date" : "ÇáÑÌÇÁ ÇÏÎÇá ÇáÊÇÑíÎ ÈÔßá ÕÍíÍ" ;
					alert(strMessage) ;
					if( !document.VisaApproval.year )
						dateValue.focus();
					else
						document.VisaApproval.year.focus();
					
					dateValue.value = "" ;		
					return false;
				}
				else if( !isDate(dateValue.value) )
				{
					if( !document.VisaApproval.year )
						dateValue.focus();
					else
						document.VisaApproval.year.focus();
					
					dateValue.value = "" ;	
					return false ;
				}
			}
			else 
			{
				dateValue.value = "" ;
				var qidNoVal = Trim(document.VisaApproval.qidNo.value) ;
				if( qidNoVal == "" )
				{
					strMessage =  lang.toUpperCase() == "EN"  ? "Please,Enter Qatari Id Number" : "ÇáÑÌÇÁ ÇÏÎÇá ÇáÑÞã ÇáÔÎÕí ÈÔßá ÕÍíÍ" ;
					alert(strMessage) ;
					document.VisaApproval.qidNo.focus();
					return false;		
				}
				else if( qidNoVal.length != 11 )
				{
					strMessage =  lang.toUpperCase() == "EN"  ? "QID should be 11 digits" : "ÇáÑÌÇÁ ÇÏÎÇá ÇáÑÞã ÇáÔÎÕí ÈÔßá ÕÍíÍ" ;
					alert(strMessage) ;
					document.VisaApproval.qidNo.focus();
					return false;			
				}				
			}	
		}
		
		toUpperValue(document.VisaApproval.part1);
		toUpperValue(document.VisaApproval.part2);
		toUpperValue(document.VisaApproval.part3);
		
		if( document.VisaApproval.kindVisit.checked ) {
			
			if( document.all.VisaApproval.Nationality && document.all.VisaApproval.Nationality.value == "000" )
			{
			 	strMessage = lang.toUpperCase() == "EN"  ? "Please choose the Nationality" : "ÇáÑÌÇÁ ÇÎÊíÇÑ ÇáÌäÓíÉ " ;
			 	alert(strMessage) ;
				document.all.VisaApproval.Nationality.focus();
				return false;
			}
			
			dateValue.value = "" ;
		}
		
		  if (document.VisaApproval.captchaResponse.value=="" || document.VisaApproval.captchaResponse.value.length != 3) 
		{
			strMessage =  lang.toUpperCase() == "EN"  ? "Please,Enter the Verification code correctly" : "ÇáÑÌÇÁ ÇÏÎÇá ÑãÒ ÇáÊÍÞÞ ÈÔßá ÕÍíÍ" ;
			alert(strMessage) ;
			document.VisaApproval.captchaResponse.focus();
			return false;
		}
		
		return true;
}
function checkvaluesWithoutMessages()
{
	
		var dateValue = document.VisaApproval.applicationDate;
		var strMessage = "" ;
		if (document.VisaApproval.part1.value=="" || document.VisaApproval.part1.value.length != 2) 
		{
			document.VisaApproval.part1.focus();
			return false;
		}
		else if (document.VisaApproval.part2.value=="" || document.VisaApproval.part2.value.length != 4) 
		{
			document.VisaApproval.part2.focus();
			return false;
		}
		else if (document.VisaApproval.part3.value=="" || document.VisaApproval.part3.value.length != 6) 
		{
			document.VisaApproval.part3.focus();
			return false;
		}
		else if (document.VisaApproval.kindPerm.checked )
		{
			if( document.VisaApproval.radioByQid && document.VisaApproval.radioByDate.checked )
			{
				if( document.VisaApproval.year && document.VisaApproval.month && document.VisaApproval.day)
				{
					var dayStr 		= document.VisaApproval.day.value ;
					var monthStr 	= document.VisaApproval.month.value ;
					
					if( dayStr.length == 1 )
						dayStr = "0" + dayStr ;
					if( monthStr.length == 1 )
						monthStr = "0" + monthStr ;
					
					document.VisaApproval.month.value = monthStr ;
					document.VisaApproval.day.value = dayStr ;
					
					dateValue.value = document.VisaApproval.year.value + "/" + document.VisaApproval.month.value + "/" + document.VisaApproval.day.value ;
				}
	
				if( dateValue.value.length != 10 )
				{
					
					if( !document.VisaApproval.year )
						dateValue.focus();
					else
						document.VisaApproval.year.focus();
					
					dateValue.value = "" ;		
					return false;
				}
				else if( !isDate(dateValue.value) )
				{
					if( !document.VisaApproval.year )
						dateValue.focus();
					else
						document.VisaApproval.year.focus();
					
					dateValue.value = "" ;	
					return false ;
				}
			}
			else 
			{
				dateValue.value = "" ;
				var qidNoVal = Trim(document.VisaApproval.qidNo.value) ;
				if( qidNoVal == "" )
				{
				
					document.VisaApproval.qidNo.focus();
					return false;		
				}
				else if( qidNoVal.length != 11 )
				{
					
					document.VisaApproval.qidNo.focus();
					return false;			
				}				
			}	
		}
		
		
		toUpperValue(document.VisaApproval.part1);
		toUpperValue(document.VisaApproval.part2);
		toUpperValue(document.VisaApproval.part3);
		
		if( document.VisaApproval.kindVisit.checked )
			dateValue.value = "" ;
		return true;
}




function onChangeDate()
{
	//dateSelected,monthSelected,yearSelected
	monthSelected++;
	if( monthSelected <= 9 )
		monthSelected = "0" + monthSelected ;

	if( dateSelected <= 9 )
		dateSelected = "0" + dateSelected ;
		
	if( document.getElementById("year") )
		document.getElementById("year").value = yearSelected ;
	if( document.getElementById("month") )
		document.getElementById("month").value = monthSelected ;
	if( document.getElementById("day") )
		document.getElementById("day").value = dateSelected ;
	
}
function viewVisaResults(applicationNumber,selectedValue)
{
	var urlForward = "/VisaApplications/Actions?action=getPaginationResult&applicationNumber=" + applicationNumber + "&language=" +( LanguageType.toUpperCase() == "ENG" ? "English" : "" ) ;
	var strMessage = "" ;
	if( selectedValue == "underProcess" )
	{
		urlForward +="&showPrinted=false" ;
		strMessage = LanguageType.toUpperCase() == "ENG" ? "Visa Under Process" : "ÇáÓãÇÊ ÇáÊí ÊÍÊ ÇáÅÌÑÇÁ" ;
		if( document.getElementById("showPrinted") )
			document.getElementById("showPrinted").value = "false" ;
	}	
	else
	{
		urlForward +="&showPrinted=true" ;
		strMessage = LanguageType.toUpperCase() == "ENG" ? "Visa Ready For Print" : "ØÈÇÚÉ ÇáÓãÇÊ" ;
		if( document.getElementById("showPrinted") )
			document.getElementById("showPrinted").value = "true" ;
	}
	
	if( document.getElementById("tdLabel") )	
	{
		document.getElementById("tdLabel").innerText = strMessage ;
	}
					
	
	if( document.getElementById("iFrameResults") )
	{
		document.getElementById("iFrameResults").src = urlForward;
	}
	
}

function checkAlphaNumeric(evnt) {
	var strText = evnt;
	var result = true;
	for (var i = 0; i < strText.length; i++) 
	{    str = strText.charAt(i);
		strCode = strText.charCodeAt(i);
	
	if( (( strCode >= 48 && strCode <= 57 ) || (strCode >= 65 && strCode <= 90)  || (strCode >= 97 && strCode <= 122))){
		
		result =true;
	  }else{
			
		  result =false;
		  break;
			
		}
	}
	
	
	return result;
	}




function checkVisaEnquiry()
{ 
	if( document.all.VisaEnquiryForm )
	{
		if(document.getElementById("radioByVisaNo").checked == true){
		if( document.all.VisaEnquiryForm.visaNo && Trim(document.all.VisaEnquiryForm.visaNo.value) == "" || (document.all.VisaEnquiryForm.visaNo.value).length < 12 )
		{
			strMessage = LanguageType.toUpperCase() == "ENG" ? "The Number of Visa character is 12 digit" : "ÇáÑÌÇÁ ÅÏÎÇá ÑÞã ÊÃÔíÑÉ ãßæä ãä 12 ÑÞã" ;
			alert(strMessage) ;			
			document.all.VisaEnquiryForm.visaNo.focus();
			return false;
		}else  if(isNaN(Trim(document.all.VisaEnquiryForm.visaNo.value)))
		{ 
		 	strMessage = LanguageType.toUpperCase() == "ENG" ? "Only Numbers are allowed" : "ÇáÑÌÇÁ ÇÏÎÇá ÇÑÞÇã ÝÞØ" ;
		 	alert(strMessage) ;
		    document.all.VisaEnquiryForm.visaNo.focus();
			return false;
		}
		
		}else {
			if( document.all.VisaEnquiryForm.PasspNo && Trim(document.all.VisaEnquiryForm.PasspNo.value) == "" )
			{
				strMessage = LanguageType.toUpperCase() == "ENG" ? "Please Enter the Passport No " : "ÇáÑÌÇÁ ÅÏÎÇá ÑÞã ÌæÇÒ ÇáÓÝÑ" ;
				alert(strMessage) ;			
				document.all.VisaEnquiryForm.PasspNo.focus();
				return false;
			}else if(!checkAlphaNumeric(document.all.VisaEnquiryForm.PasspNo.value) ){
				
				strMessage = LanguageType.toUpperCase() == "ENG" ? "Please Enter a valid the Passport No " : "ÇáÑÌÇÁ ÅÏÎÇá ÑÞã ÌæÇÒ ÇáÓÝÑ ÈÇáÔßá ÇáÕÍíÍ" ;
				alert(strMessage) ;			
				document.all.VisaEnquiryForm.PasspNo.focus();
				return false;
			}
			else if( (document.all.VisaEnquiryForm.PasspNo.value).length <4){
				
				strMessage = LanguageType.toUpperCase() == "ENG" ? "Please Enter a valid the Passport No " : "ÇáÑÌÇÁ ÅÏÎÇá ÑÞã ÌæÇÒ ÇáÓÝÑ ÈÇáÔßá ÇáÕÍíÍ" ;
				alert(strMessage) ;			
				document.all.VisaEnquiryForm.PasspNo.focus();
				return false;
			}
			
		}
		
		
		
		 if( document.all.VisaEnquiryForm.Nationality && document.all.VisaEnquiryForm.Nationality.value == "000" )
		{
		 	strMessage = LanguageType.toUpperCase() == "ENG" ? "Please choose the Nationality" : "ÇáÑÌÇÁ ÇÎÊíÇÑ ÇáÌäÓíÉ " ;
		 	alert(strMessage) ;
			document.all.VisaEnquiryForm.Nationality.focus();
			return false;
		}
 
	}
	return true;		
}





function checkVisaEnquiryeService(lang)
{ 
	if( document.all.VisaEnquiryForm )
	{
		if(document.getElementById("radioByVisaNo").checked == true){
		if( document.all.VisaEnquiryForm.visaNo && Trim(document.all.VisaEnquiryForm.visaNo.value) == "" || (document.all.VisaEnquiryForm.visaNo.value).length < 12 )
		{
			strMessage = lang.toUpperCase() == "EN"  ? "The Number of Visa character is 12 digit" : "ÇáÑÌÇÁ ÅÏÎÇá ÑÞã ÊÃÔíÑÉ ãßæä ãä 12 ÑÞã" ;
			alert(strMessage) ;			
			document.all.VisaEnquiryForm.visaNo.focus();
			return false;
		}else  if(isNaN(Trim(document.all.VisaEnquiryForm.visaNo.value)))
		{ 
		 	strMessage = lang.toUpperCase() == "EN"  ? "Only Numbers are allowed" : "ÇáÑÌÇÁ ÇÏÎÇá ÇÑÞÇã ÝÞØ" ;
		 	alert(strMessage) ;
		    document.all.VisaEnquiryForm.visaNo.focus();
			return false;
		}
		
		}else {
			if( document.all.VisaEnquiryForm.PasspNo && Trim(document.all.VisaEnquiryForm.PasspNo.value) == "" )
			{
				strMessage = lang.toUpperCase() == "EN"  ? "Please Enter the Passport No " : "ÇáÑÌÇÁ ÅÏÎÇá ÑÞã ÌæÇÒ ÇáÓÝÑ" ;
				alert(strMessage) ;			
				document.all.VisaEnquiryForm.PasspNo.focus();
				return false;
			}else if(!checkAlphaNumeric(document.all.VisaEnquiryForm.PasspNo.value) ){
				
				strMessage = lang.toUpperCase() == "EN"  ? "Please Enter a valid the Passport No " : "ÇáÑÌÇÁ ÅÏÎÇá ÑÞã ÌæÇÒ ÇáÓÝÑ ÈÇáÔßá ÇáÕÍíÍ" ;
				alert(strMessage) ;			
				document.all.VisaEnquiryForm.PasspNo.focus();
				return false;
			}
			else if( (document.all.VisaEnquiryForm.PasspNo.value).length <4){
				
				strMessage = lang.toUpperCase() == "EN"  ? "Please Enter a valid the Passport No " : "ÇáÑÌÇÁ ÅÏÎÇá ÑÞã ÌæÇÒ ÇáÓÝÑ ÈÇáÔßá ÇáÕÍíÍ" ;
				alert(strMessage) ;			
				document.all.VisaEnquiryForm.PasspNo.focus();
				return false;
			}
			
		}
		
		
		
		 if( document.all.VisaEnquiryForm.Nationality && document.all.VisaEnquiryForm.Nationality.value == "000" )
		{
		 	strMessage = lang.toUpperCase() == "EN"  ? "Please choose the Nationality" : "ÇáÑÌÇÁ ÇÎÊíÇÑ ÇáÌäÓíÉ " ;
		 	alert(strMessage) ;
			document.all.VisaEnquiryForm.Nationality.focus();
			return false;
		}
		 /* if (document.all.VisaEnquiryForm.captchaResponse.value=="" || document.all.VisaEnquiryForm.captchaResponse.value.length != 3) 
			{
				strMessage =  lang.toUpperCase() == "EN"  ? "Please,Enter the Verification code correctly" : "ÇáÑÌÇÁ ÇÏÎÇá ÑãÒ ÇáÊÍÞÞ ÈÔßá ÕÍíÍ" ;
				alert(strMessage) ;
				document.VisaApproval.captchaResponse.focus();
				return false;
			}*/
 
	}
	return true;		
}

