//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}
function expand() {
	if (document.getElementById("expand_icon").value == "1") {
		document.getElementById("expanded_content").style.display="table-row";
		document.getElementById("expand_icon").value = "0";
	} else {
		document.getElementById("expanded_content").style.display="none";
		document.getElementById("expand_icon").value = "1";
	}
 
	return false;
}

function submit_btn_disable() {
	if (document.getElementById("button").disabled == true) {
		document.getElementById("button").disabled= false;
    alert(document.getElementById("button").disabled)
	} else {
		document.getElementById("button").disabled= true;
	}
 
	return false;
}


var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");