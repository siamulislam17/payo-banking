



document.getElementById("add-money").style.display='block';
document.getElementById("cash-out").style.display='none';
document.getElementById("transfer-money").style.display='none';
document.getElementById("get-bonus").style.display='none';
document.getElementById("pay-bill").style.display='none';
document.getElementById("transaction-history").style.display='none';


document.getElementById("add-money-click").addEventListener("click", function(){
    document.getElementById("add-money").style.display='block';
    document.getElementById("cash-out").style.display='none';
    document.getElementById("transfer-money").style.display='none';
    document.getElementById("get-bonus").style.display='none';
    document.getElementById("pay-bill").style.display='none';
    document.getElementById("transaction-history").style.display='none';
})



document.getElementById("cash-out-click").addEventListener("click", function(){
    document.getElementById("add-money").style.display='none';
    document.getElementById("cash-out").style.display='block';
    document.getElementById("transfer-money").style.display='none';
    document.getElementById("get-bonus").style.display='none';
    document.getElementById("pay-bill").style.display='none';
    document.getElementById("transaction-history").style.display='none';
})

document.getElementById("Transfer-money-click").addEventListener("click", function(){
    document.getElementById("add-money").style.display='none';
    document.getElementById("cash-out").style.display='none';
    document.getElementById("transfer-money").style.display='block';
    document.getElementById("get-bonus").style.display='none';
    document.getElementById("pay-bill").style.display='none';
    document.getElementById("transaction-history").style.display='none';
})

document.getElementById("get-bonus-click").addEventListener("click", function(){
    document.getElementById("add-money").style.display='none';
    document.getElementById("cash-out").style.display='none';
    document.getElementById("transfer-money").style.display='none';
    document.getElementById("get-bonus").style.display='block';
    document.getElementById("pay-bill").style.display='none';
    document.getElementById("transaction-history").style.display='none';
})

document.getElementById("pay-bill-click").addEventListener("click", function(){
    document.getElementById("add-money").style.display='none';
    document.getElementById("cash-out").style.display='none';
    document.getElementById("transfer-money").style.display='none';
    document.getElementById("get-bonus").style.display='none';
    document.getElementById("pay-bill").style.display='block';
    document.getElementById("transaction-history").style.display='none';
})

document.getElementById("trans-click").addEventListener("click", function(){
    document.getElementById("add-money").style.display='none';
    document.getElementById("cash-out").style.display='none';
    document.getElementById("transfer-money").style.display='none';
    document.getElementById("get-bonus").style.display='none';
    document.getElementById("pay-bill").style.display='none';
    document.getElementById("transaction-history").style.display='block';
})