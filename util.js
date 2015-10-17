function getPage(id) {
	var mainUrl = 'resources/pages/';
	var mainUrl = mainUrl + id + '.html';

	$('#' + id).load(mainUrl);
}