// OAuth captcha system
if(window.location.hostname == "oauth.iitd.ac.in"){
    // selecting the captch element 
    var img = document.querySelector(".captcha-image");
	var ctx  = document.createElement("canvas");
	ctx.setAttribute("id","canvas");
	ctx.setAttribute("width","150")
	ctx.setAttribute("height","80")
	document.body.appendChild(ctx);
	var ctx = document.getElementById("canvas");
	ctx.style.display="none";
    //converting the captcha image to png
	var canvas = ctx.getContext('2d');
	canvas.drawImage(img,0,0);
//	let src = canvas.getImageData(0,0,135,60);
	var img		 = ctx.toDataURL("image/png");
    //image recognition
	Tesseract.recognize(img,'eng',{logger: m => console.log(m)}).then(({ data: { text } }) => {
		console.log(text);
		// setting the field to the recognized value on completion
		var captcha = document.querySelector(".captcha-field");
		captcha.value = text;
	});
}
else{
    // since the extension can only access two sites this one is moodle
	var id = document.querySelector("#login");
	var input = document.querySelector("#valuepkg3");
    //extracting the task and capturing the expression
	var rxp = /Please (.*) =/;
	var text= id.textContent.match(rxp)[1];
	lst = text.split(' ');
    // Subtraction
	if(lst[0]=="subtract"){
		input.value = parseInt(lst[3])-parseInt(lst[5]);	
	}else if(lst[0]=="add"){
		//addition
		input.value = parseInt(lst[3])+parseInt(lst[5]);	
	}else if(lst[0]=="enter"){
		//choose the second value or first value
		if(lst[1]=="second"){
			input.value = lst[7];
		}else{
			input.value = lst[5];		
		}
	}
}
