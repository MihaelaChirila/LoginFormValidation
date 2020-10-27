  
function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if(username == "" || password == ""){
    document.getElementById("error").innerHTML = "All field required";
   
    return false;
  }
  else if(username.length < 4){
    document.getElementById("error").innerHTML = "Name must be at least 4 characters";
    return false;
  }
   else if(password.length < 4){
    document.getElementById("error").innerHTML = "Password must be at least 4 characters";
    return false;
  }
  else if(username != "admin" || password != "user"){
    document.getElementById("error").innerHTML = "Incorect username or password";
    return false;
  }
    
  else {
    return true;
  }
  
}

