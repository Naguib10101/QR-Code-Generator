let submitBtn = document.querySelector('.submit-btn');
let inputField = document.querySelector('#qr-code');
let imgContainer = document.querySelector('.img-container img');
let container = document.querySelector('.img-container');
submitBtn.addEventListener("click" , function(){
    if(inputField.value === '') alert('Please enter url to generate qr code');
    else{
        const code_url = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${inputField.value}`;
        imgContainer.src = code_url;
        container.style.display = 'block';
        inputField.value = '';
    }
});