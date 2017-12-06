$(document).ready(function() {
   $("#btnOk").click(function(event) {
		var fname=$("#fname").val();
		var mozemPridatRiadok = true;
		if(fname.trim().length<2){
			console.log("menej ako 2");
			$("#errfname").html("Invalid first name.");
			mozemPridatRiadok = false;
		}
		
		var lname=$("#lname").val();
		if(lname.trim().length<2){
			$("#errlname").html("Invalid last name.");
			mozemPridatRiadok = false;
		}
		 
		var date = new Date($('#birthdate').val());
		var newdate = new Date();
		
		if (isNaN(parseFloat(newdate.getFullYear() - date.getFullYear())) || !(newdate.getFullYear() > date.getFullYear())) {
				$("#errdate").html("Invalid date.");
				mozemPridatRiadok = false;
		}

		if (mozemPridatRiadok) {
			$( "#PersonInfoTable" ).append( "<tr><td>" + $('#fname').val() + "</td><td>" + $('#lname').val() + "</td><td>" + (newdate.getFullYear() - date.getFullYear()).toString() + "</td></tr>	" );		
			$("#fname").val("");
			$("#lname").val("");
			$("#birthdate").val("mm/dd/yyyy");
			$("#errdate").html("");
		}
	
   });

   
   $("#fname").keyup(function(event) {
     console.log("sss");
     var fname=$("#fname").val();
     if(fname.trim().length>1){
       $("#errfname").html("");
     }

   });
   
   $("#lname").keyup(function(event) {
     var fname=$("#lname").val();
     if(fname.trim().length>1){
       $("#errlname").html("");
     }
   });
   
});
