function getPage(id, url) {
	$('#' + id).load(url); 
}

/*FILL TEST PAGE*/
getPage('analysis', 'https://projects.cs.uaf.edu/redmine/projects/cs371_f15_gathering_the_magik/repository/revisions/test/raw/analysis.html');
getPage('contributions', 'https://projects.cs.uaf.edu/redmine/projects/cs371_f15_gathering_the_magik/repository/revisions/test/raw/contributions.html');
getPage('sources', 'https://projects.cs.uaf.edu/redmine/projects/cs371_f15_gathering_the_magik/repository/revisions/test/raw/sources.html');