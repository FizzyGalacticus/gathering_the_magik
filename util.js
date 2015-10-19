var premium = false;

function getPage(id) {
	var mainUrl = 'resources/pages/';
	var mainUrl = mainUrl + id + '.html';

	$('#' + id).load(mainUrl);
}

var keystrokes = "";
$(document).on("keypress", function(e) {
	keytyped = String.fromCharCode(e.which);
	console.log("Key pressed: " + keytyped);
	e.preventDefault();

	keystrokes = keystrokes + keytyped;
	if(keystrokes.length > 6) {
		keystrokes = keystrokes.substring(1,7);
	}

	if(keystrokes == "imawesome") {
		alert("Woohoo! You're a premium user!");
		premium = true;
	}
});