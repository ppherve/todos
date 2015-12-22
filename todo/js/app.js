$(document).ready(function(){

	$("form").on("submit",function(event){
		
		event.preventDefault();
		// Indentation
		var toAdd = $("#note").val();
	 	$("#liste").append('<li><input class="ck" type="checkbox">'+toAdd+"</li>");

	});
	
	$("#liste").on("click",".ck",function(){
		$(this).parent().toggleclass("fait");
	});

	/*
		Pour les actions, la logique est la même :
		- ajouter un listener au bouton
		- ajouter, enlever, modifier le compteur de la liste
	*/

 });





