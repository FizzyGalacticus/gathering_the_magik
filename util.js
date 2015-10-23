var premium = false;
var keystrokes = "";

function getPage(id) {
	var mainUrl = 'https://projects.cs.uaf.edu/redmine/projects/cs371_f15_gathering_the_magik/repository/revisions/master/raw/resources/pages/';
	var mainUrl = mainUrl + id + '.html';

	$('#' + id).load(mainUrl);
}

function setBody(body) {
	document.body.innerHTML = body;
}

function setHead(head) {
	document.head.innerHTML = head;
}

$(document).on("keypress", function(e) {
	keytyped = String.fromCharCode(e.which);
	console.log("Key pressed: " + keytyped);
	e.preventDefault();

	keystrokes = keystrokes + keytyped;
	if(keystrokes.length > 9) {
		keystrokes = keystrokes.substring(1,10);
	}

	if(keystrokes === "imawesome") {
		alert("Woohoo! You're a premium member!");
		premium = true;
	}
});

function init() {
	$.ajax({
	    url : "https://projects.cs.uaf.edu/redmine/projects/cs371_f15_gathering_the_magik/repository/revisions/test/raw/index.html",
	    async:false,
	    success : function(result){
			setBody(result);
		} 
	});
}