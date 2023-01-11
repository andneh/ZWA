// TODO login check
"ds".toLowerCase
// on submit control all

//alert("Alert")
const username = document.registration.username;
const fname = document.registration.fname;
const lname = document.registration.lname;
const birthday = document.registration.birthday;
const email = document.registration.email;
const password1 = document.registration.password1;
const password2 = document.registration.password2;

switch (true) {
    case usernameValidation:
        return false



}
}
//alert("Alert")
const username = document.registration.username;
const fname = document.registration.fname;
const lname = document.registration.lname;
const birthday = document.registration.birthday;
const email = document.registration.email;
const password1 = document.registration.password1;
const password2 = document.registration.password2;

switch (true) {
    case usernameValidation:
        return false



}
}
//alert("Alert")
const username = document.registration.username;
const fname = document.registration.fname;
const lname = document.registration.lname;
const birthday = document.registration.birthday;
const email = document.registration.email;
const password1 = document.registration.password1;
const password2 = document.registration.password2;

switch (true) {
    case usernameValidation:
        return false



}
}



if {

} else {
    name.nextElementSibling.style.display = "none";
    name.style.border = "1px solid transparent";
}
if (!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || email.value == "") {
    email.nextElementSibling.style.display = "block";
    email.style.border = "1px solid #f00";
    return false
} else {
    email.nextElementSibling.style.display = "none";
    email.style.border = "1px solid transparent";
}
if (!phone.value.match(/^\(?([5-9]{1})\)?([0-9]{9})$/) || phone.value == "") {
    phone.nextElementSibling.style.display = "block";
    phone.style.border = "1px solid #f00";
    return false
} else {
    phone.nextElementSibling.style.display = "none";
    phone.style.border = "1px solid transparent";
}
if (subject.value == "") {
    subject.nextElementSibling.style.display = "block";
    subject.style.border = "1px solid #f00";
    return false
} else {
    subject.nextElementSibling.style.display = "none";
    subject.style.border = "1px solid transparent";
}
if (message.value == "") {
    message.nextElementSibling.style.display = "block";
    message.style.border = "1px solid #f00";
    return false
} else {
    message.nextElementSibling.style.display = "none";
    message.style.border = "1px solid transparent";
}
}

function registration() {

    var name = document.getElementById("t1").value;
    var email = document.getElementById("t2").value;
    var uname = document.getElementById("t3").value;
    var pwd = document.getElementById("t4").value;
    var cpwd = document.getElementById("t5").value;

    //email id expression code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name == '') {
        alert('Please enter your name');
    }
    else if (!letters.test(name)) {
        alert('Name field required only alphabet characters');
    }
    else if (email == '') {
        alert('Please enter your user email id');
    }
    else if (!filter.test(email)) {
        alert('Invalid email');
    }
    else if (uname == '') {
        alert('Please enter the user name.');
    }
    else if (!letters.test(uname)) {
        alert('User name field required only alphabet characters');
    }
    else if (pwd == '') {
        alert('Please enter Password');
    }
    else if (cpwd == '') {
        alert('Enter Confirm Password');
    }
    else if (!pwd_expression.test(pwd)) {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if (pwd != cpwd) {
        alert('Password not Matched');
    }
    else if (document.getElementById("t5").value.length < 6) {
        alert('Password minimum length is 6');
    }
    else if (document.getElementById("t5").value.length > 12) {
        alert('Password max length is 12');
    }
    else {
        alert('Thank You for Registration & You are Redirecting to Website');
        // Redirecting to other page or webste code. 
        window.location = "https://tutorial.eyehunts.com//";
    }
}