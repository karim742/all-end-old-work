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




let loginButton = document.querySelector('#loginBtn');


loginButton.addEventListener('click', function (e) {

  e.preventDefault()

  let username = document.querySelector('#username');
  let password = document.querySelector('#password');
  let usernameMess_show = document.querySelector('#usernameMess');
  let passwordMess_show = document.querySelector('#passwordMess');

  let x = localStorage.getItem('signupData');

  let signupData = JSON.parse(x)

  let server_mobileNumber = signupData.mobileNumber;
  let server_password = signupData.password;
  


  if ((username.value === '')) {
    usernameMess_show.innerHTML = 'Please ! Enter Your Mobile Number';
    usernameMess_show.classList.add("animation");
  }else if(username.value !== server_mobileNumber){
    usernameMess_show.innerHTML = 'Wrong Number...';
  }

  if ((password.value === '')) {
    passwordMess_show.classList.add("animation");
    passwordMess_show.innerHTML = 'Please ! Enter Your Password';
  }else if(username.value !== server_password){
    passwordMess_show.innerHTML = 'Wrong Password...';
  }



    // get data from local Storage


    let loginData = {
      mobileNumber : server_mobileNumber,
      password : server_password
    }
  
    if((server_mobileNumber === username.value) && (server_password === password.value)){
      localStorage.setItem('loginData',JSON.stringify(loginData));
      location.href = '../index.html'
    }
  


});

if(localStorage.getItem('loginData')){
  location.href = '../index.html'
}



