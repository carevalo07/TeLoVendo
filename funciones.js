document.addEventListener('DOMContentLoaded', function () {
  // formulario
  let form = document.querySelector("#login-form");
  console.log(form);

  // input usuario
  let usuario = document.querySelector("#usuario-input");
  console.log(usuario);

  // input email
  let email = document.querySelector("#input-email");
  console.log(email);

  // label mensaje
  let txt = document.querySelector("#texto");
  let resul = document.querySelector("#resultado");
  console.log(txt);
  let limite = 100;
  resul.textContent
  resul.textContent = 0 + "/" + limite;




  function validate() {

    let textLength = txt.value.length;
    resul.textContent = textLength + "/" + limite;

    if (textLength === null || textLength === '') {
      document.querySelector("#resultado").innerHTML = "Campo vacio o no valido";
      return false;
    }

    if (textLength > limite) {
      document.querySelector("#resultado2").innerHTML = "Debe ingresar solo 100 caracteres";
      return false;
    }

    let usuarioValue = usuario.value;
    if (usuarioValue.length > 5) {
      document.querySelector("#usuarioHelp").innerHTML = "La contraseña debe tener maximo 5 caracteres";
      return false;
    }

    if (usuarioValue === null || usuarioValue === '') {
      document.querySelector("#usuarioHelp2").innerHTML = "Campo vacio o no valido";
      return false;
    }

    let emailValue = email.value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === null || emailValue === '') {
      document.querySelector("#emailHelp").innerHTML = "Campo vacio o no valido";
      return false;
    }

    if (!emailRegex.test(emailValue)) {
      document.querySelector("#emailHelp2").innerHTML = "Por favor, ingresa un correo electronico válido";
      return false;
    }
    return true;
  }


  txt.addEventListener("input", function () {
    let textLength = txt.value.length;
    resul.textContent = textLength + "/" + limite;

  })

  form.addEventListener("submit", function (event) {

    if (!validate()) {
      event.preventDefault();
    } else {
      alert("Formulario enviado correctamente");
      txt.value = '';
      usuario.value = '';
      email.value = '';
    }
  }
  );

}
);