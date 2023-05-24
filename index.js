// CONSTANTE PARA  EL TEXTO DE CONTRASEÑA
const pwd = document.getElementById("pwd_txt");
// CONSTANTE PARA EL BOTON GENERAR
const generate = document.getElementById("generate");
// CONSTANTE PARA COPIAR LA CONTRASEÑA
const clipboard = document.getElementById("clipboard");
// VARIABLE PARA DETERMINAR EL VALOR DEL SLIDER
let pwd_length = document.getElementById("slider");
// VARIABLE PARA COPIAR TEXTO
let copy_text = document.getElementById("copy_text");
// CADENA DE CARACTERES A TOMAR PARA LA CONTRASEÑA
let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// FUNCION PARA OBTENER EL CLICK Y GENERAR LA CONTRASEÑA
generate.addEventListener('click', () => {
    let password = "";
    let checked = document.getElementById("checkbox").checked;
    let final_string = string;
    if (checked) {
        final_string += "@#$%^&*?=+?"; 
    }
    for (let i = 0; i < pwd_length.value; i++) {
        let pwd = final_string[Math.floor(Math.random() * final_string.length)];
        password += pwd;
    }
    pwd.innerText = password;
});

// FUNCION PARA COPIAR EL TEXTO
clipboard.addEventListener('click',() => {
    navigator.clipboard.writeText(pwd.innerText);
    copy_text.textContent = "Copiado!";
    copiarText.style.display = "block";
    setTimeout(() => {
        copy_text.style.display = "none";
    }, 2000);
});