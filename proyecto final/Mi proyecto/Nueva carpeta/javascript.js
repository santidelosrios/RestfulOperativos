
function sendFile(){
	var selectFile = $("#file_upload")[0].files[0];
	console.log(selectFile)
	var read = new FileReader();
	read.readAsBinaryString(selectFile);
	read.onloadend = function(){
	    console.log(read.result);
	}

	//Envia data por POST
	$.post( "/sendFile", function( data ) {	  
	  console.log(data)
	});
}
