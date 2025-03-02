

document.getElementById('login_Btn').addEventListener('click', function(event){
    event.preventDefault();
    const phon = document.getElementById('phon_Number');
    const getPhonNumber = phon.value;
    const pin = document.getElementById('pin_Number');
    const getPinNumber = pin.value;

    phon.value = '';
    pin.value = '';

    
    console.log(getPhonNumber, getPinNumber)
})