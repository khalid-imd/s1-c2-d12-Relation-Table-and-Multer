

function submit() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phoneNumber = document.getElementById("phoneNumber").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if (name == "") {
        return alert ("Please enter your name")
    } else if (email == ""){
        return alert ("Please enter your email")
    } else if (phoneNumber == "") {
        return alert ("Please enter your Phone Number")
    } else if (subject == ""){
        return alert ("Please select your subject")
    } else if (message == ""){
        return alert ("Please write your message")
    }

    console.log(name);
    console.log(email);
    console.log(phoneNumber);
    console.log(subject);
    console.log(message);

    let emailReceiver = "kojima@gmail.com"

    let a = document.createElement('a')

    a.href=`https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body= hi, im ${name}, ${message}, here i put my contact, ${phoneNumber}.`
    a.click()
} 