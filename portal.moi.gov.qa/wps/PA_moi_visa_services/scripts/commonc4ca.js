var SelectedId;SelectedId = "";
var LanguageType ="ar";
// common.js
document.oncontextmenu=clickContextmenu;
document.onkeydown = onKeyDownFun;
function clickContextmenu()
{
   return true;
}
// newFunction
function onKeyDownFun() {

	try
	{	
		if( (event.keyCode == 116 || event.keyCode == 8 ) ) // 116 for F5 8 for backspace 
		{
			 window.event.keyCode=0;
			 window.event.returnValue=false;
		}	
	
		if( window.event.srcElement && window.event.srcElement.type == "text" ) 
		{
			window.event.returnValue = true;
		}
		//alert(event.keyCode);	
	}
	catch(e)
	{
	
	}
}

function allowPastNumberOnly(){
	 var INTEGER_ALLOWED_CHARS =  /^[0-9]/;
	var fieldValue;
	
	fieldValue  =( clipboardData.getData("Text"));
	if (INTEGER_ALLOWED_CHARS.test(fieldValue) ) {
		return true;
	}else{
		return false;
	}
	
}
function isEmail(str) {
  // are regular expressions supported?
  var supported = 0;
  	if (window.RegExp) {
    	var tempStr = "a";
    	var tempReg = new RegExp(tempStr);
    	if (tempReg.test(tempStr)) supported = 1;
	}
	if (!supported) 
    	return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
  	var r1 = new RegExp("(@.*@)|(\\.\\.)|(@\\.)|(^\\.)");
  	var r2 = new RegExp("^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$");
  	return (!r1.test(str) && r2.test(str));
}
function Trim(siString) 
{
	if(siString == null || siString == "" )
		return "" ;
    return lTrim(rTrim(siString))
}
function lTrim(strValue)
{
	var LTRIMrgExp = /^\s */;
	return strValue.replace(LTRIMrgExp, '');
}// function lTrim

function rTrim(strValue)
{
	var RTRIMrgExp = /\s *$/;
	return strValue.replace(RTRIMrgExp, '');
}// function rTrim

function IsDigiteService()
{
	var bReturnValue = false;
	//alert(event.keyCode);
	// if the entered character is digit  
	 
	
	if( ((event.keyCode >= 48) && (event.keyCode <= 57)) ){
		bReturnValue = true;}
	else if(event.keyCode == 13){
		submitInputFormVisaApproval();
		
	}
		
	return bReturnValue;
}

function toUpperValue(obj)
{
	var stringVal = obj.value;
	stringVal = stringVal.toUpperCase();
	obj.value = stringVal;
}

function IsDigitRP()
{
	var bReturnValue = false;
	try
	{
		if( event.keyCode == 13 && document.getElementById("inputForm")  )
		{
		 
				submitInputForm();
				 
			
		}
		// if the entered character is digit   
		if( ((event.keyCode >= 48) && (event.keyCode <= 57)) )
			bReturnValue = true;
		// 
	}
	catch(e)
	{
		bReturnValue = true;	
	}
	
	return bReturnValue;
}

function IsDigit()
{
	var bReturnValue = false;
	try
	{
		if( event.keyCode == 13 && document.getElementById("inputForm")  )
		{
			if( checkvalues() )
			{
				document.getElementById("inputForm").submit();
				return true;
			}
		}
		// if the entered character is digit   
		if( ((event.keyCode >= 48) && (event.keyCode <= 57)) )
			bReturnValue = true;
		// 
	}
	catch(e)
	{
		bReturnValue = true;	
	}
	
	return bReturnValue;
}



function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}
var dtCh= "/";
var minYear=1900;
var maxYear=2100;
function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}
function isDate(dtStr){
	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	var strYear=dtStr.substring(0,pos1)
	var strMonth=dtStr.substring(pos1+1,pos2)
	var strDay=dtStr.substring(pos2+1)
	var strMessage = "" ;
	strYr=strYear
	
	//alert(LanguageType)     ;
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)
	if (pos1==-1 || pos2==-1){
		strMessage = LanguageType.toUpperCase() == "EN" ? "Date should be in this format yyyy/mm/dd" : " yyyy/mm/dd íÌÈ ÇÏÎÇá ÇáÊÇÑíÎ Úáì ÇáÔßá   " ;
		alert(strMessage)
		return false
	}
	if (strMonth.length<1 || month<1 || month>12){
		
		strMessage = LanguageType.toUpperCase() == "EN" ? "Please Enter valid Month" : "ÇáÑÌÇÁ ÇÏÎÇá ÇáÔåÑ ÈÔßá ÕÍíÍ" ;
		alert(strMessage)
		
		return false
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		strMessage = LanguageType.toUpperCase() == "EN" ? "Please Enter valid Day" : "ÇáÑÌÇÁ ÇÏÎÇá Çáíæã ÈÔßá ÕÍíÍ" ;
		alert(strMessage)
		return false
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		strMessage = LanguageType.toUpperCase() == "EN" ? "Please Enter valid year between 1900-2100" : "ÇáÑÌÇÁ ÇÏÎÇá ÇÑÈÚÉ ÃÑŞÇã Èíä 1900 æ 2100" ;
		alert(strMessage)
		return false
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		strMessage = LanguageType.toUpperCase() == "EN" ? "Please Enter valid Date" : "ÇáÑÌÇÁ ÇÏÎÇá ÇáÊÇÑíÎ ÈÔßá ÕÍíÍ" ;
		alert(strMessage)
		return false ;
	}
	return true
}
function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}
function isBeforeTodayDate(year,month,day)
{
	try
	{
		var myDate = new Date() ;
		myDate.setFullYear(year,month,day) ;
		var today = new Date() ;
		if( myDate > today )
		{
		  //alert("Today is before" + year+"-" + month + "-" + day );
		  return false ;
		} 
		else
		{
		  //alert("Today is after "  + year+"-" + month + "-" + day)	;
		  return true ;
		  
		 } 
	
	}
	catch(e)  
	{
		alert(e.description) ;
	}
	
	return true ;
	  
}
function autoComplete (field, select, property, forcematch) {
	var found = false;
	for (var i = 0; i < select.options.length; i++) {
	if (select.options[i][property].toUpperCase().indexOf(field.value.toUpperCase()) == 0) {
		found=true; break;
		}
	}
	if (found) { select.selectedIndex = i; }else { }
	
	if (field.createTextRange) {
		if (forcematch && !found) {
			field.value=field.value.substring(0,field.value.length-1); 
			return;
			}
		var cursorKeys ="8;46;37;38;39;40;33;34;35;36;45;";
		if (cursorKeys.indexOf(event.keyCode+";") == -1) {
			var r1 = field.createTextRange();
			var oldValue = r1.text;
			var newValue = found ? select.options[i][property] : oldValue;
			if (newValue != field.value) {
				field.value = newValue;
				var rNew = field.createTextRange();
				rNew.moveStart('character', oldValue.length) ;
				rNew.select();
				}
			}
		}
	}

