
var tryButton = document.getElementById("try");
var stopButton = document.getElementById("stop");

tryButton.addEventListener("click", startNewTest, false);
stopButton.addEventListener("click", stopTest, false);

var testInProcess = false;


function startNewTest() {
	var packetSize = parseInt(document.getElementById("packsize").value);
	var intervalLength = parseInt(document.getElementById("interval").value);
	
//	check input	
	if (isNaN(packetSize)) {
		console.log("Not integer!");
		return
	} 
	if (isNaN(intervalLength)) {
		console.log("Not integer!");
		return
	}	
	document.getElementById("packsize").value = packetSize;
	document.getElementById("interval").value = intervalLength;

//	turn everything on
	testInProcess = true;
	
}


function stopTest() {
	if(testInProcess) {
		testInProcess = false;
	}
}