function validateForm() {

    let validaEmail = document.querySelector(".email");
    let validaSenha = document.querySelector(".senha");

    if (validaEmail == "" && validaSenha == "") {
        console.log("preencha todos os campos para prosseguir");
    }
}

validateForm();