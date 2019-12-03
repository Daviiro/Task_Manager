var tam1, tam2, tam3, tam4, tamtotal;
tam1=tam2=tam3=tam4=0;
var porcentagem1, porcentagem2, porcentagem3, porcentagem4;

function createDiv(){
	var newtask = document.createElement("task");
	newtask.classList.add("balao");
	var text0 = document.getElementById("task_text").value;
	document.getElementById("task_text").value="";
	var text1 = text0.bold();
	var text2 = document.getElementById("task_description_text").value;
	document.getElementById("task_description_text").value="";
	newtask.innerHTML += text1;
	newtask.innerHTML += "<br />";
	newtask.innerHTML += text2;
	document.getElementById('getDiv').appendChild(newtask);
	document.getElementById('pop-up').style.display="none";
	tam1++;
	tamtotal = tam1 + tam2 + tam3 + tam4;
	porcentagem1 = (tam1/tamtotal)*100;
	porcentagem2 = (tam2/tamtotal)*100;
	porcentagem3 = (tam3/tamtotal)*100;
	porcentagem4 = (tam4/tamtotal)*100;
	$('#barrared').css('width', porcentagem1 + '%');
	$('#barorange').css('width', porcentagem2 + '%');
	$('#baryellow').css('width', porcentagem3 + '%');
	$('#bargreen').css('width', porcentagem4 + '%');
	
	console.log("tam1",tam1);
	console.log("tamtotal",tamtotal);
}

function showpopup(){
	document.getElementById('pop-up').style.display="block";
}

function closepopup(){
	document.getElementById('pop-up').style.display="none";
}

$(document).on('click','task.balao', function(){
    console.log("Nova funcao"); 
	tam2++;
	tam1--;
	tamtotal = tam1 + tam2 + tam3 + tam4;
	porcentagem1 = (tam1/tamtotal)*100;
	porcentagem2 = (tam2/tamtotal)*100;
	porcentagem3 = (tam3/tamtotal)*100;
	porcentagem4 = (tam4/tamtotal)*100;
	$('#barrared').css('width', porcentagem1 + '%');
	$('#barorange').css('width', porcentagem2 + '%');
	$('#baryellow').css('width', porcentagem3 + '%');
	$('#bargreen').css('width', porcentagem4 + '%');
	console.log("tam1",tam1);
	console.log("tam2",tam2);
	console.log("tamtotal",tamtotal);
	
	$(this).prependTo("#divorange");
	$(this).addClass('inprogress').removeClass('balao').removeClass('balaoclicked');
});

$(document).on('click','.inprogress', function(){
    console.log("Nova funcao"); 
	tam3++;
	tam2--;
	tamtotal = tam1 + tam2 + tam3 + tam4;
	porcentagem1 = (tam1/tamtotal)*100;
	porcentagem2 = (tam2/tamtotal)*100;
	porcentagem3 = (tam3/tamtotal)*100;
	porcentagem4 = (tam4/tamtotal)*100;
	$('#barrared').css('width', porcentagem1 + '%');
	$('#barorange').css('width', porcentagem2 + '%');
	$('#baryellow').css('width', porcentagem3 + '%');
	$('#bargreen').css('width', porcentagem4 + '%');
	console.log("tam2",tam2);
	console.log("tam3",tam3);
	console.log("tamtotal",tamtotal);
	
	$(this).prependTo("#divyellow");
	$(this).addClass('review').removeClass('inprogress');
});

$(document).on('click','.review', function(){
    console.log("Nova funcao"); 
	tam4++;
	tam3--;
	tamtotal = tam1 + tam2 + tam3 + tam4;
	porcentagem1 = (tam1/tamtotal)*100;
	porcentagem2 = (tam2/tamtotal)*100;
	porcentagem3 = (tam3/tamtotal)*100;
	porcentagem4 = (tam4/tamtotal)*100;
	$('#barrared').css('width', porcentagem1 + '%');
	$('#barorange').css('width', porcentagem2 + '%');
	$('#baryellow').css('width', porcentagem3 + '%');
	$('#bargreen').css('width', porcentagem4 + '%');
	console.log("tam3",tam3);
	console.log("tam4",tam4);
	console.log("tamtotal",tamtotal);
	
	$(this).prependTo("#divgreen");
	$(this).addClass('complete').removeClass('review');
});


