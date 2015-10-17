function getPage(id) {
	alert('Boo!');
	var mainUrl = 'resources/pages/';
	var mainUrl = mainUrl + id +'.html';

	alert('Trying to stuff contents of ' + mainUrl + ' into div: ' + id);
	$('#' + id).load(mainUrl);

}