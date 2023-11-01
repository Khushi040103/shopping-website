function validate(){
	var name=document.getElementById("username").value;
	var mail=document.getElementById("email").value;
	var password=document.getElementById("password").value;
	var cpassword=document.getElementById("cpassword").value;
	
	if(nameValidation(name)&&emailValidation(mail)&&passwordValidation(password,cpassword)){
		alert("Validation Successfull, Account Created");
		return true;
	}
	return false;
}

function nameValidation(name){
	if(name.length!=0){	
		var expression = /^[a-zA-Z]*$/g;

		if(expression.test(name)){
			return true;
		}
		alert("Invalid username");
		return false;
	} 
	alert("Name field cannot be empty");
	return false;
}

function emailValidation(mail){
	if(mail != ""){
		var expression=/[0-9]{2}[a-zA-Z]{3}[0-9]{3}@nirmauni.ac.in/;
		if(expression.test(mail)){
			return true;
		}
		alert("Invalid email");
		return false;
	}
	alert("Email field cannot be empty");
	return false;
}

function passwordValidation(password,cpassword){
	if(password == ""){
		alert("Please Provide Password");
		return false;
	} else if(cpassword == ""){
		alert("Please Provide Confirm Password");
		return false;
	} else{
		if(password == cpassword){
			var expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
			return expression.test(password);
		}
		alert("password and confirm password are not match");
		return false;		
	}	
}

