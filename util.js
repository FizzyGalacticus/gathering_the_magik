var premium = false;
var keystrokes = "";

function getPage(id) {
	var mainUrl = 'https://projects.cs.uaf.edu/redmine/projects/cs371_f15_gathering_the_magik/repository/revisions/master/raw/resources/pages/';
	var mainUrl = mainUrl + id + '.html';

	$('#' + id).load(mainUrl);
}

function setHead(head) {
	document.head.innerHTML = head;
}

function resizeBorder() {
	var borderDiv = $('#border');
	var newWidth = (borderDiv.width() / 20);

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
	base.setAttribute('href','https://projects.cs.uaf.edu/redmine/projects/cs371_f15_gathering_the_magik/repository/revisions/master/raw/');
}

function init() {
	document.write('');
	document.close();
	resetBase();

	$.ajax({
	    url : "https://projects.cs.uaf.edu/redmine/projects/cs371_f15_gathering_the_magik/repository/revisions/test/raw/index.html",
	    async:false,
	    success : function(result){
			document.write(result);
		} 
	});

	resizeBorder();
}