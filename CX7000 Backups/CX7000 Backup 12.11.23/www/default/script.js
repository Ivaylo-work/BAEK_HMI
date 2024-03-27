function GetHostname() {
	document.getElementById('server_hostname').innerHTML = window.location.hostname;

	var client = new XMLHttpRequest();
	client.open("GET", document.location, true);
	client.send();

	client.onreadystatechange = function() {
		if(this.readyState == this.HEADERS_RECEIVED) {
			var serverHostname = client.getResponseHeader("ServerHostname");
			if (serverHostname != "") {
				document.getElementById('server_hostname').innerHTML = serverHostname;
			}
		}
	}
}