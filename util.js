var baseURL = "https://projects.cs.uaf.edu/redmine/projects/cs371_f15_gathering_the_magik/repository/revisions/master/raw/";
var premium = false;
var keystrokes = "";

function getPage(id) {
	var mainUrl = 'resources/pages/';
	var mainUrl = mainUrl + id + '.html';

	$('#' + id).load(mainUrl);
	resizeBorder();
}

function setHead(head) {
	document.head.innerHTML = head;
}

function getActiveTabPane() {
	var panes = document.getElementsByClassName('tab-pane');

	for (var i = panes.length - 1; i >= 0; i--) {
		if (panes[i].className.indexOf('active') > -1) {
			return panes[i];
		};
	};
}

function resizeBorder() {
	var borderDiv = $('#border');
	var newWidth = ((borderDiv.width() / 50) | 0);

	// var newHeight = $('#'+getActiveTabPane().id).height();

	borderDiv.css('border-width', newWidth + 'px');
	// $('#border').css('height', newHeight + 'vh');
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
	// document.write('');
	// document.close();
	resetBase();

	$.ajax({
	    url : (baseURL + "index.html"),
	    async:false,
	    success : function(result){
	    	$('html').html(result);
			// document.write(result);
		} 
	});

	resizeBorder();
}