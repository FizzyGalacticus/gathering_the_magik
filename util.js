function getPage(url, idName) {
	$(idName).load(url); 
}

/*FILL TEST PAGE*/
getPage('https://projects.cs.uaf.edu/redmine/projects/cs371_f15_gathering_the_magik/repository/revisions/master/raw/README', '#test');