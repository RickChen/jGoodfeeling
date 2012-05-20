/* Author:
Rick Chen
*/
var kkeys = [];
var pin = "13";
$(document).keydown(function(e) {
	kkeys.push(e.keyCode);
	if (kkeys.toString().indexOf(pin) >= 0)
	{
		kkeys = []; 
		if($('._jGoodfeeling_container').length === 0){
	   		$('body').jGoodfeeling();
		}   
	}
}); 




