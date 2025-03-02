

document.getElementById('add_Money').addEventListener('click', function(){
    const addMoney = document.getElementById('for_Add_Money_Field');
    addMoney.classList.remove('hidden');
})


document.getElementById('for_Add_Money_Button').addEventListener('click', function(){

    const amountToAdd = parseInt(document.getElementById('amount_To_Add').value);
    const pinNumber = document.getElementById('pin_Number').value;

    console.log(amountToAdd, pinNumber);
    let displayAmount = parseInt(document.getElementById('display_Amount').innerText);

    console.log(isNaN(amountToAdd));

    if(pinNumber === '1234'){
        displayAmount += amountToAdd;
    }else{
        alert("Your Password Is Incorrect!!")
    }

    document.getElementById('display_Amount').innerText = displayAmount;
    


})