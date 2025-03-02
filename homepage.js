document.getElementById('log_Out').addEventListener('click', function(){
    window.location.href = ('/index.html');
})




document.getElementById('add_Money').addEventListener('click', function(){
    const addMoney = document.getElementById('for_Add_Money_Field');
    addMoney.classList.remove('hidden');
})


let displayAmount = parseInt(document.getElementById('display_Amount').innerText);



document.getElementById('for_Add_Money_Button').addEventListener('click', function(){

    const amountToAdd = parseInt(document.getElementById('amount_To_Add').value);
    const pinNumber = document.getElementById('pin_Number').value;

    

    if(pinNumber === '1234'){
        displayAmount += amountToAdd;
    }else{
        alert("Your Password Is Incorrect!!")
    }

    document.getElementById('display_Amount').innerText = displayAmount;
    
})


document.getElementById('withdraw_Money').addEventListener('click', function(){
    const displayCashOut = document.getElementById('for_Cash_Out');
    displayCashOut.classList.remove('hidden');
})


document.getElementById('for_Withdraw_Button').addEventListener('click', function(){
    const amountToWithdraw = parseInt(document.getElementById('amount_To_Withdraw').value);
    const PinNumber = document.getElementById('withdraw_pin_Number').value;

    if(PinNumber === '1234'){
        displayAmount -= amountToWithdraw
    }

    document.getElementById('display_Amount').innerText = displayAmount;

})

