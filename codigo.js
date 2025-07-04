lista=[{ 
      username:"fernando",
      password:"fer.123",
      nivel:1  
    },
    {
      username:"raquel",
      password:"raq.123",
      nivel:2  
      }
  ]
localStorage.setItem("datos",JSON.stringify(lista));
usuarios=JSON.parse(localStorage.getItem("datos"));
console.log(typeof(usuarios));


function logo(){
const validUsername = document.getElementById("username").value;
const validPassword = document.getElementById("password").value;

const usuario = usuarios.find(u => u.username === validUsername && u.password === validPassword);
if (!usuario) {
    alert("Usuario o contraseña incorrectos");
    return;
  }else if (usuario.nivel === 1) {
    window.location.href = "admin.html";
  }else if (usuario.nivel === 2) {
    window.location.href = "usuario.html";
  }
}