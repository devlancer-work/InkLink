
var  sname = document.getElementById('name');
var  email = document.getElementById('email');
var  phone = document.getElementById('phone');
var  whatsapp = document.getElementById('whatsapp');
var submit = document.getElementById('submit-btn');

var nameW = document.getElementById('name-warning');
var emailW = document.getElementById('email-warning');
var phoneW = document.getElementById('phone-warning');
var whatsappW = document.getElementById('whatsapp-warning');

validName = false;
validEmail = false;
validPhone = false;
validWhatsapp = false;

sname.addEventListener('blur', function(){
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;
    let str = sname.value;

    if(regex.test(str)){
        console.log('Success');
        validName = true;
        nameW.style.display = 'none';
    }else{
        console.log('Failed');
        nameW.style.display = 'block';
    }
})

email.addEventListener('blur', function(){
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let str = email.value;

    if(regex.test(str)){
        console.log('Email Success');
        validEmail = true;
        emailW.style.display = 'none';
    }else{
        console.log('Email Failed');
        emailW.style.display = 'block';
    }
})

phone.addEventListener('blur', function(){
    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    if(regex.test(str)){
        console.log('Phone Success');
        validPhone = true;
        phoneW.style.display = 'none';
    }else{
        console.log('Phone Failed');
        phoneW.style.display = 'block';
    }
})

// whatsapp.addEventListener('blur', function(){
//     let regex = /^[0-9]{10}$/;
//     let str = phone.value;
//     if(regex.test(str)){
//         console.log('Phone Success');
//         validWhatsapp = true;
//         whatsappW.style.display = 'none';
//     }else{
//         console.log('Phone Failed');
//         whatsappW.style.display = 'block';
//     }
// })

