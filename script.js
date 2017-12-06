$(document).ready(function() {
   $("#btnOk").click(function(event) {
		var fname=$("#fname").val();
		if(fname.trim().length<2){
			console.log("menej ako 2");
			$("#errfname").html("Invalid first name.");
		} else {
			$('body > div.table > table > tbody > tr:nth-child(2) > td:nth-child(1)').html( $('#fname').val() );
		}
		
		var lname=$("#lname").val();
		if(lname.trim().length<2){
			$("#errlname").html("Invalid last name.");
		} else {
			$('body > div.table > table > tbody > tr:nth-child(2) > td:nth-child(2)').html( $('#lname').val() );
		}
		 
		var date = new Date($('#birthdate').val());
		var newdate = new Date();
		
		$('body > div.table > table > tbody > tr:nth-child(2) > td:nth-child(3)').html( newdate.getFullYear() - date.getFullYear() );		
   });

   /*
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
   */
});
