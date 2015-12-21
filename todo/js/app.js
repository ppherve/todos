$(document).ready(function(){

	$("form").on("submit",function(event){
		
		event.preventDefault();

			var toAdd = $("#note").val();
		 	$("#liste").append('<li><input class="ck" type="checkbox">'+toAdd+"</li>");

	});
	
	$("#liste").on("click",".ck",function(){
		$(this).parent().toggleclass("fait");
	});

 });





