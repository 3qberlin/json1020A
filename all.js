let token = '';
var _targetUrl = "https://json1020a.onrender.com";
// var _targetUrl = "http://localhost:3000";

const registerName = document.querySelector('.registerName');
const registerPassword = document.querySelector('.registerPassword');
const registerSubmit = document.querySelector('.registerSubmit');



registerSubmit.addEventListener('click', function (e) {
  regis();
  console.log('regis');
});



function regis() {
  axios.post(`${_targetUrl}/users/signup`, {
    "email": registerName.value,
    "password": registerPassword.value
  })
    .then(function (res) {
      console.log('res', res);
    })
}



