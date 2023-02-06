let inputUsername = document.getElementById("inputUsername")
let labelUsername = document.getElementById("usernameLabel")
let passwordInput = document.getElementById("passwordInput")



function HoverLabel()
{
   labelUsername.style.top = '47px';
   labelUsername.style.left = '175px'

}

function ResetLabel()
{
   labelUsername.style.top = '72px';
   labelUsername.style.left = '187px'
}

function ShowPassword()
{
   passwordInput.type = "text"
}

function HidePassword()
{
   passwordInput.type = 'password'
}



const list = document.getElementById('list');

 const array = []

 fetch('https://jsonplaceholder.typicode.com/comments/')
 .then(response => response.json())
 .then(json => {list.innerHTML = json.email})
  







