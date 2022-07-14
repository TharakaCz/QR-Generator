 var qrcode = new QRCode(document.getElementById("qr_area"), {
        width : 250,
        height : 250
    });

function generate(){
    var elText = document.getElementById('data');
	
	if (!elText.value) {
		alert("Input a text");
		elText.focus();
		return;
	}
	
	
}

function relord(){
	this.location.reload();
}

function clean(){
	document.getElementById('data').value = "";
}
