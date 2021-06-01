/* http://keith-wood.name/datepick.html
   Arabic localisation for jQuery Datepicker.
   Yasir Mukhtar --
  ياسر مختار -- 
*/
(function($) {
	$.datepick.regional['ar'] = {
		/*monthNames: ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'آذار', 'حزيران',
		'تموز', 'آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول'],*/
		/*monthNames:['يناير'، 'فبراير' أبريل '،' مارس '،' مارس '،' يونيو '،' يوليو '،' أغسطس '،' سبتمبر '،' أكتوبر '،' نوفمبر '،' ديسمبر '],*/	
		monthNames:['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],		
		monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		dayNames: [ 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة','السبت'],
		dayNamesShort: [ 'أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة','سبت'],
		dayNamesMin: [ 'أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة','سبت'],
		dateFormat: 'dd-mm-yyyy', firstDay: 0,
		alignment: 'topRight',
		renderer: $.datepick.defaultRenderer,
		prevText: '&#x3c;السابق', prevStatus: 'عرض الشهر السابق',
		prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: '',
		nextText: 'التالي&#x3e;', nextStatus: 'عرض الشهر القادم',
		nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: '',
		currentText: 'اليوم', currentStatus: 'عرض الشهر الحالي',
		todayText: 'اليوم', todayStatus: 'عرض الشهر الحالي',
		clearText: 'مسح', clearStatus: 'امسح التاريخ الحالي',
		closeText: 'إغلاق', closeStatus: 'إغلاق بدون حفظ',
		yearStatus: 'عرض سنة آخرى', monthStatus: 'عرض شهر آخر',
		weekText: 'أسبوع', weekStatus: 'أسبوع السنة',
		dayStatus: 'اختر D, M d', defaultStatus: 'اختر يوم',
		isRTL: true//,
		//minDate:'01-01-1950',maxDate:'31-12-2050',
		//yearRange: "-100:+100"
	};
	$.datepick.regional['en'] = {
			monthNames: ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'],
			monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
			dateFormat: 'dd-mm-yyyy', firstDay: 0,
			alignment: 'topRight',
			renderer: $.datepick.defaultRenderer,
			prevText: '&lt;Prev', // Text for the previous month command
			prevStatus: 'Show the previous month', // Status text for the previous month command
			prevJumpText: '&lt;&lt;', // Text for the previous year command
			prevJumpStatus: 'Show the previous year', // Status text for the previous year command
			nextText: 'Next&gt;', // Text for the next month command
			nextStatus: 'Show the next month', // Status text for the next month command
			nextJumpText: '&gt;&gt;', // Text for the next year command
			nextJumpStatus: 'Show the next year', // Status text for the next year command
			currentText: 'Current', // Text for the current month command
			currentStatus: 'Show the current month', // Status text for the current month command
			todayText: 'Today', // Text for the today's month command
			todayStatus: 'Show today\'s month', // Status text for the today's month command
			clearText: 'Clear', // Text for the clear command
			clearStatus: 'Clear all the dates', // Status text for the clear command
			closeText: 'Close', // Text for the close command
			closeStatus: 'Close the datepicker', // Status text for the close command
			yearStatus: 'Change the year', // Status text for year selection
			monthStatus: 'Change the month', // Status text for month selection
			weekText: 'Wk', // Text for week of the year column header
			weekStatus: 'Week of the year', // Status text for week of the year column header
			dayStatus: 'Select DD, M d, yyyy', // Status text for selectable days
			defaultStatus: 'Select a date', // Status text shown by default
			isRTL: false//,
			//minDate:'01-01-1950',maxDate:'31-12-2050',
			//yearRange: "-100:+100"
		};
	//$.datepick.setDefaults($.datepick.regional['ar']);
})(jQuery);
