function login(){
    var uname=document.getElementById('txtUname').value;
    var pwd=document.getElementById('txtpwd').value;
    var spObj=document.getElementById('SP1');
    if(uname == "admin" && pwd =="admin")
    {
    spObj.style.color="orange";
    spObj.innerHTML="<h3>YOUR ACCOUNT BALANCE IS 1999999999999 RS/-</h3>";
    }
    else
    {
        spObj.style.color="red";
        spObj.innerHTML="<h3> Login failed </h3>";

    }

    }