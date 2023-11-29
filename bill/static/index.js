function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Add your login validation logic here
    if (username === "lsssalem" && password === "lss1234@") {
        document.querySelector("#perror").innerHTML='';
        document.querySelector("#password").style.borderColor='black';
        delay(500);
        alert("login successfully!!")
        
        return true;
    } 
    else if(username!=='lsssalem'){
        document.querySelector("#uerror").innerHTML='Invalid username.';
        document.querySelector("#username").style.borderColor='red';
        return false;
    }
    else if(password!=='lss1234@'){
        document.querySelector("#perror").innerHTML='Invalid password.';
        document.querySelector("#uerror").innerHTML='';
        document.querySelector("#password").style.borderColor='red';
        document.querySelector("#username").style.borderColor='black';
        return false;
    }
    
}
