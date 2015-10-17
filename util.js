function getPage(id) {
	alert('Boo!');
	mainUrl = 'https://projects.cs.uaf.edu/redmine/projects/cs371_f15_gathering_the_magik/repository/revisions/master/raw/resources/pages/';
	mainUrl += (id+'.html');

	alert('Trying to stuff contents of ' + mainUrl + ' into div: ' + id);
	$('#' + id).load(mainUrl);

}