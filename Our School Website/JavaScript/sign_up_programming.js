/* this programming is show or hide password*/
const eyeBtn = document.querySelector("#hidePass");
const inputPass = document.getElementById("password");

eyeBtn.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  if (inputPass.type === "password") {
    inputPass.setAttribute("type", "text");
  } else {
    inputPass.setAttribute("type", "password");
  }
});

/*  select option disabled  */

function disabled_option() {
  var classes = document.getElementById("class").value;

  if (
    classes === "আপনার শ্রেনী নির্বাচন করুন" ||
    classes === "ষষ্ঠ" ||
    classes === "সপ্তম" ||
    classes === "অষ্টম"
  ) {
    document.getElementById("department").setAttribute("disabled", "disabled");
  } else {
    document
      .getElementById("department")
      .removeAttribute("disabled", "disabled");
  }
}

// collect all information from you

let form = document.querySelector("#submit");
let studentsName = document.querySelector("#name");
let classes = document.querySelector("#class");
let departments = document.querySelector("#department");
let rollNo = document.querySelector("#roll_no");
let mobileNumbers = document.querySelector("#self_number");
let strongPass = document.querySelector("#password");

form.addEventListener("click", function (event) {
  event.preventDefault();

  let studentName = studentsName.value;

  if (studentName.length === 0) {
    document.getElementById("name_message").classList.add("for_Animation");
    document.getElementById("name_message").innerHTML =
      "Please! Enter Your Full Name !!!";
    document.querySelector(".Login_main_box").style.height = "1220px";
  } else if (studentName.length >= 1 && studentName.length < 5) {
    document.getElementById("name_message").classList.add("for_Animation");
    document.getElementById("name_message").innerHTML =
      "Please! Enter Your name minimum 5 letter !!!";
  } else if (studentName.length >= 15) {
    document.getElementById("name_message").classList.add("for_Animation");
    document.getElementById("name_message").innerHTML =
      "Please! Enter Your name maximam 15 letter !!!";
  } else {
    document.getElementById("name_message").innerHTML = "";
    document.querySelector(".Login_main_box").style.height = "1070px";
  }

  let department_select = departments.value;

  if (department_select === "") {
    document.getElementById("group_message").classList.add("for_Animation");
    document.getElementById("group_message").innerHTML =
      "Please ! Select Your department";
  } else {
    document.getElementById("group_message").innerHTML = "";
  }

  let class_select = classes.value;

  if (class_select === "") {
    document.getElementById("class_message").classList.add("for_Animation");
    document.getElementById("class_message").innerHTML =
      "Please ! Select Your Class";
  } else if (
    class_select === "ষষ্ঠ" ||
    class_select === "সপ্তম" ||
    class_select === "অষ্টম"
  ) {
    document.getElementById("class_message").innerHTML = "";
    document.getElementById("group_message").innerHTML = "";
  } else {
    document.getElementById("class_message").innerHTML = "";
  }

  let student_rollNo = rollNo.value;

  if (student_rollNo.length === 0) {
    document.getElementById("message_roll_no").classList.add("for_Animation");
    document.getElementById("message_roll_no").innerHTML =
      "Please ! Enter Your Class Roll No";
  } else {
    document.getElementById("message_roll_no").innerHTML = "";
  }

  let student_mobileNumber = mobileNumbers.value;

  if (student_mobileNumber.length === 0) {
    document.getElementById("number_message").classList.add("for_Animation");
    document.getElementById("number_message").innerHTML =
      "Please ! Enter Your Mobile Number";
  } else if (student_mobileNumber.length !== 11) {
    document.getElementById("number_message").classList.add("for_Animation");
    document.getElementById("number_message").innerHTML =
      "Please ! Enter Your <b>Valid</b> Mobile Number";
  } else {
    document.getElementById("number_message").innerHTML = "";
  }

  let password = strongPass.value;
  var passw = "/^[A-Za-z]w{7,14}$/";

  if (password.length === 0) {
    document.getElementById("password_message").classList.add("for_Animation");
    document.getElementById("password_message").innerHTML =
      "Please ! Enter Your Password";
  } else if (password.length < 8) {
    document.getElementById("password_message").classList.add("for_Animation");
    document.getElementById("password_message").innerHTML =
      "Please ! Enter Your password between 8 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter";
    document.querySelector(".Login_main_box").style.height = "1220px";
  } else {
    document.getElementById("password_message").innerHTML = "";
  }

  // store data to local storage

if((studentsName.value !== '')&&(classes.value !== '')&&(rollNo.value !== '')&&(mobileNumbers.value !== '')&&(strongPass.value !== '')){

  var storeData = {
    name:studentsName.value,
    class : classes.value,
    rollNo : rollNo.value,
    mobileNumber : mobileNumbers.value,
    password : strongPass.value
  }

    
  if(!localStorage.getItem('signupData')){
    localStorage.setItem('signupData',JSON.stringify(storeData));
  }


  location.href = '../HTML/log_in.html'



}

});


if(localStorage.getItem('signupData')){
  location.href = '../HTML/log_in.html'
}


