var baseURL;
var premium = false;
var keystrokes = "";

if (document.location.href.indexOf('redmine') > -1) {
	baseURL = "https://projects.cs.uaf.edu/redmine/projects/cs371_f15_gathering_the_magik/repository/revisions/test/raw/";
}
else if(document.location.href.indexOf('www') > -1){
	baseURL = "http://www.dustindodson.ninja/gathering_the_magik/";
}
else {
	baseURL = "http://dustindodson.ninja/gathering_the_magik/";
}

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

	borderDiv.css('border-width', newWidth + 'px');
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
	    	$('html').html(result);
			// document.write(result);
		} 
	});
	
	resetBase();
	getPage('navigation');

	resizeBorder();
}

function calculateContributions() {
	var classNames = ['dustin','dylan','josh','scott'];
	var elements;
	var total = 0;

	for(var j = 0; j < classNames.length; j++) {
		elements = document.getElementsByClassName(classNames[j]);
		for(var i = 0; i < elements.length; i++) {
			var value = elements[i].innerHTML;
			value = value.replace(/[%?]/gi, '');
			if (value.length) total = total + parseInt(value);
		}

		totalElement = document.getElementById(classNames[j] + '-total');
		totalElement.innerHTML = (total/elements.length + '%');
		total = 0;
	}
}

resetBase();	
getPage('navigation');
getPage('home');

window.onresize();