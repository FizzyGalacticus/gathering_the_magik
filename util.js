// var listener = new window.keypress.Listener();
var premium = false;

function getPage(id) {
	var mainUrl = 'resources/pages/';
	var mainUrl = mainUrl + id + '.html';

	$('#' + id).load(mainUrl);
}

// listener.sequence_combo("i m a w e s o m e", function() {
// 	premium = true;
// 	alert("Woohoo! You're a premium user!");
// });

var keystrokes = "";
$(document).on("keypress", function(e) {
	keytyped = String.fromCharCode(e.which);
	console.log("Key pressed: " + keytyped);
	e.preventDefault();

	keystrokes = keystrokes + keytyped;
	if(keystrokes.length > 9) {
		keystrokes = keystrokes.substring(1,10);
	}

	if(keystrokes === "imawesome") {
		alert("Woohoo! You typed in the secret code!");
	}
});
