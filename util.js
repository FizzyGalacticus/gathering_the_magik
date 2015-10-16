function getPage(id, url) {
	$('#' + id).load(url);
	alert("Looking for " + url + " to put in id: " + id); 
}

/*FILL TEST PAGE*/
