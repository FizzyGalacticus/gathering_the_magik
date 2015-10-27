var premium = false;
var keystrokes = "";

function getPage(id) {
	var mainUrl = 'http://www.dustindodson.ninja/gathering_the_magik/resources/pages/';
	var mainUrl = mainUrl + id + '.html';

	$('#' + id).load(mainUrl);
}

function setHead(head) {
	document.head.innerHTML = head;
}

function resizeBorder() {
	var borderDiv = $('#border');
	var newWidth = ((borderDiv.width() / 50) | 0);

	borderDiv.css("border-width", newWidth + "px");
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

window.onresize = function(event) {
	resizeBorder();
};

function resetBase() {
	var base = document.createElement('base');
	base.setAttribute('href','http://www.dustindodson.ninja/gathering_the_magik/');
}

function init() {
	document.write('');
	document.close();
	resetBase();

	$.ajax({
	    url : "https://projects.cs.uaf.edu/redmine/projects/cs371_f15_gathering_the_magik/repository/revisions/master/raw/index.html",
	    async:false,
	    success : function(result){
			document.write(result);
		} 
	});

	resizeBorder();
}
