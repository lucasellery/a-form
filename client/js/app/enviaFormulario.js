window.addEventListener("load", () => {
    function sendData() {
        const XHR = new XMLHttpRequest();


        // Liga o objeto FormData e o elemento do formulario 
        const FD = new FormData(form);

        // Define o que acontece com dados de submissão bem sucedidos
        XHR.addEventListener("load", function (event) {
            console.log("texto de resposta");
            alert(event.target.responseText);
        });

        //Define o que acontece em caso de erro
        XHR.addEventListener("error", function (event) {
            alert("Oops! Something went wrong.")
        });

        // Configurando a requisição
        XHR.open("POST", "file:///home/lucasellery/workspace/javascript/login-form-js/formContato.html");

        //Os dados enviados são os que o usuário forneceu no arquivo
        XHR.send(FD);
    }

    // Acessa o elemento do formulário
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        sendData();
    });

});