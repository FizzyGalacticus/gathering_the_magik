var baseURL = "https://projects.cs.uaf.edu/redmine/projects/cs371_f15_gathering_the_magik/repository/revisions/theme/raw/";
var premium = false;
var keystrokes = "";

function getPage(id, checkForAuthorization) {
	var mainUrl = 'resources/pages/';

	if(checkForAuthorization) {
		if(premium) {
			mainUrl = mainUrl + id + '.html';
		}
		else {
			mainUrl = mainUrl + 'unauthorized.html';
		}
	}
	else {
		mainUrl = mainUrl + id + '.html';
	}

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
	base.setAttribute('href', baseURL);
}

function init() {
	document.write('');
	document.close();
	resetBase();

	$.ajax({
	    url : (baseURL + "index.html"),
	    async:false,
	    success : function(result){
			document.write(result);
		} 
	});

	resizeBorder();
}

function calculateContributions() {
	var classNames = ['dustin','dylan','josh','scott'];
	var elements;
	var total = 0;

	for(var j = 0; j < classNames.length; i++) {
		elements = document.getElementsByClassName(classNames[j]);
		for(var i = 0; i < elements.length; i++) {
			var value = elements[i].innerHTML;
			if (value === '?') continue;

			value = parseInt(value.replace('%'));
			total = total + value;
		}

		totalElement = document.getElementById(classNames[j] + '-total');
		totalElement.innerHTML = (total + '%');
		total = 0;
	}
}