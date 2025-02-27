// getting log in info

document.getElementById("log-in-btn").addEventListener("click", function (event) {
    event.preventDefault();

    // get account value
    let accountNumber =document.getElementById("account-number").value;
    // get pin value
    let pinNumber = document.getElementById("pin-number").value;
    
    if (accountNumber.length ===11 && pinNumber.length ===4){
        window.location.href = "main.html"; 


    }
    else{
        alert("Please use proper account number with 11 digits and 4 digit pin number");
    }
    

})