
function Sendmail(){  

    const fname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    let nameEr = document.getElementById("fnameError")
    let emailEr = document.getElementById("emailError")
    let messageEr = document.getElementById("messageError")

    if(fname ==="" || fname.length < 3 ){
        nameEr.innerHTML = "Please enter your name";
    }else if(email ===""){
        emailEr.innerHTML = "Please enter your email";
    } else if(message ===""){
        messageEr.innerHTML = "Please enter your message";
    } else {

    let pararms = {
     fname : fname,  
     email : email, 
     message : message 
    }
    const btn = document.querySelector("#btn");
    const btnText = document.querySelector("#btnText");

    
    emailjs.send('service_u358dwt', 'template_k8b8ji9', pararms)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        if (response.status === 200) {
            //alert('Email sent successfully!');
            btnText.innerHTML = "Sent";
            btn.classList.add("active");
            nameEr.innerHTML = "";
            emailEr.innerHTML = "";
            messageEr.innerHTML = "";
            fname.value = "";
            email.value = "";
            message.value = "";
        }
    })
    .catch(function(error) {
        console.log('FAILED...', error);
        alert('Email failed to send, please try again later!');
    });
        
}
}

// const btn = document.querySelector("#btn");
// const btnText = document.querySelector("#btnText");

//         btn.onclick = () => {
//             btnText.innerHTML = "Sent";
//             btn.classList.add("active");
//         };