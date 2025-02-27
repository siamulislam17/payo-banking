
// add money
document.getElementById('add_money-btn').addEventListener('click', function(event){
    event.preventDefault()

    

    let amount = document.getElementById('amount').value;
    let modifiedAmount = parseFloat(amount);

    let totalAmount = document.getElementById('total-amount').innerText;
    console.log(totalAmount);
    let modifiedTotalAmount = parseFloat(totalAmount);

    // get account value
    let accountNumber =document.getElementById("account-number").value;
    // get pin value
    let pinNumber = document.getElementById("pin-number").value;
    
    if (accountNumber.length ===11 && pinNumber.length ===4){
        let newTotalAmount = modifiedTotalAmount + modifiedAmount;
        document.getElementById('total-amount').innerText = newTotalAmount; 


    }
    else{
        alert("Please use proper account number with 11 digits and 4 digit pin number");
    }
    

    

})

// cash out

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault()

    

    let amount = document.getElementById('amount-cash-out').value;
    let modifiedAmount = parseFloat(amount);

    let totalAmount = document.getElementById('total-amount').innerText;
   
    let modifiedTotalAmount = parseFloat(totalAmount);

    // get pin value
    let pinNumber = document.getElementById("pin-number-cash-out").value;
    
    if (pinNumber.length ===4){
        let newTotalAmount = modifiedTotalAmount - modifiedAmount;
        document.getElementById('total-amount').innerText = newTotalAmount; 


    }
    else{
        alert("Please use proper 4 digit pin number");
    }
    

    

})

//transfer money



document.getElementById('send-btn').addEventListener('click', function(event){
    event.preventDefault()

    

    let amount = document.getElementById('amount-send').value;
    let modifiedAmount = parseFloat(amount);

    let totalAmount = document.getElementById('total-amount').innerText;
   
    let modifiedTotalAmount = parseFloat(totalAmount);

    // get pin value
    let pinNumber = document.getElementById("pin-number-send").value;
    
    if (pinNumber.length ===4){
        let newTotalAmount = modifiedTotalAmount - modifiedAmount;
        document.getElementById('total-amount').innerText = newTotalAmount; 


    }
    else{
        alert("Please use proper 4 digit pin number");
    }
    

    

})

// get bonus
document.getElementById('get-bonus-btn').addEventListener('click', function(event){
    event.preventDefault()
    alert("You have received a bonus of 1000 tk")
    let totalAmount = document.getElementById('total-amount').innerText;
   
    let modifiedTotalAmount = parseFloat(totalAmount);
    let newTotalAmount = modifiedTotalAmount + 1000;
    document.getElementById('total-amount').innerText = newTotalAmount;

})

//pay bill

document.getElementById('pay-bill-btn').addEventListener('click', function(event){
    event.preventDefault();
    let totalAmount = document.getElementById('total-amount').innerText;
    let modifiedTotalAmount = parseFloat(totalAmount);
    let amount = document.getElementById('amount-pay-bill').value;
    let modifiedAmount = parseFloat(amount);
    let newTotalAmount = modifiedTotalAmount - modifiedAmount;
    document.getElementById('total-amount').innerText = newTotalAmount;
})



document.getElementById('log-out-btn').addEventListener('click',function(){
    window.location.href = "index.html"; 
})  