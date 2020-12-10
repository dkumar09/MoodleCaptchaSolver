console.log("haha");
var id = document.querySelector("#login");
var input = document.querySelector("#valuepkg3");
var rxp = /Please (.*) =/;
var text= id.textContent.match(rxp)[1];
lst = text.split(' ');
if(lst[0]=="subtract"){
	console.log(parseInt(lst[3])-parseInt(lst[5]));
	input.value = parseInt(lst[3])-parseInt(lst[5]);	
}else if(lst[0]=="add"){
	console.log(parseInt(lst[3])+parseInt(lst[5]));
	input.value = parseInt(lst[3])+parseInt(lst[5]);	
}else if(lst[0]=="enter"){
	if(lst[1]=="second"){
		console.log("second");
		input.value = lst[7];
	}else{
		console.log("humfirst");
		input.value = lst[5];		
	}
}
console.log(lst);

