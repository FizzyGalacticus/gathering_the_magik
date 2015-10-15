function getPage(url, idName) {
	window.alert(url);
	window.alert(idName);
	$(idName).load(url); 
}