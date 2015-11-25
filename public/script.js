var thedata = "";
var selectFile; 
var reader;
var sending = function sendFile(){
	selectFile = $("#file_upload")[0].files[0];
	reader = new FileReader();
	reader.onload = function(event) {
	    var contents = event.target.result;
	    console.log("File contents: " + contents);
	};
	reader.onerror = function(event) {
	    console.error("File could not be read! Code " + event.target.error.code);
	};

	reader.readAsText(selectFile);
 }
function askACK(){
	$.ajax({
		type:"GET",
		url: "/ack",
		dataType:"json",
		success: function (msg){
			console.log(msg);
			var mensaje = "archivos ejectuados: ";
			for(var i=0;i<msg.length;i++){
				mensaje+=msg[i].name + " ";
			}
		}
	});
}
function sendpost(){
	console.log(reader.result);
	thedata = reader.result; 
	var sendInfo  = {
           data: thedata
       };
	var data = sending();
	     $.ajax({
           type: "POST",
           url: "/sendFile",
           dataType: "json",
           data: sendInfo,
           success: function (msg) {
               if (msg) {
                   console.log("Somebody" + name + " was added in list !");
                 
                   //location.reload(true);
               } else {
                   alert("Cannot add to list !");
               }
           }
       });
	console.log(thedata);
}
