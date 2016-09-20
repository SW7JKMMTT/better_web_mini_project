function ll() {
	if(this.readyState == 4 && this.status == 200) {
		var list = document.getElementById("cucklist");
		while (list.firstChild) {
			list.removeChild(list.firstChild);
		}
		var obj = JSON.parse(this.responseText);
		obj.forEach(function(elem) {
			var node = document.createElement("li");
			var textnode = document.createTextNode(elem.title);
			node.appendChild(textnode);
			list.appendChild(node);
		});
	}
}

window.onload = function(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = ll
xhttp.open("get", "todo/api", true);
xhttp.send();

var p = new XMLHttpRequest();

p.onreadystatechange = ll

var form = document.getElementById("cuckform");
var tit_le = form.elements["title"]
form.addEventListener("submit", function(evt){
	console.log("AS");
	console.log(tit_le.value);
	p.open("POST", "todo/api", true);
	p.setRequestHeader('Content-Type', 'application/json')
	p.send(JSON.stringify({title: tit_le.value}));
	console.log("AS");
	evt.preventDefault();
});
};
