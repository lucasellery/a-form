import { validarDataNascimento } from "./validarDataNascimento.js";
import { validarCPF } from "./validarCPF.js";
import { recuperarEndereco } from "./recuperarEndereco.js";
import { validarPreco } from "./validarPreco.js";

const retornaMensagemDeErro = (tipo, validity) => {
    let mensagemDeErro = "";
    const tiposDeErro = [
        "valueMissing",
        "typeMisMatch",
        "tooShort",
        "rangeUnderflow",
        "customError",
        "patternMismatch"
    ];

    /**
    * O valueMissing retorna true sempre que um input
    * marcado como required não foi preenchido
    */
    const mensagensDeErro = {
        email: {
            valueMissing: "O e-mail é necessário",
            typeMisMatch: "Este não é um e-mail válido"
        },

        senha: {
            valueMissing: "A senha é necessária",
            tooShort: "A senha deve ter no mínimo 4 caracteres"
        },

        dataNascimento: {
            valueMissing: "A data de nascimento é necessária",
            rangeUnderflow: "A data mínima é 01/01/1901",
            customError: "A idade mínima é de 18 anos",
        },

        cpf: {
            valueMissing: "O CPF é necessário",
            customError: "Este não é um CPF válido"
        },

        rg: {
            valueMissing: "O RG é necessário"
        },

        cep: {
            valueMissing: "O CEP é necessário",
            patternMismatch: "Este não é um CEP válido"
        },

        logradouro: {
            valueMissing: "O Logradouro é necessário"
        },

        cidade: {
            valueMissing: "A cidade é necessária"
        },

        estado: {
            valueMissing: "O estado é necessário"
        },

        preco: {
            valueMissing: "O preço é necessário",
            customError: "O valor do produto deve ser maior que R$ 00,00"
        },

        nomeProduto: {
            valueMissing: "O nome do produto é necessário"
        }
    };

    tiposDeErro.forEach(erro => {
        if (validity[erro]) {
            mensagemDeErro = mensagensDeErro[tipo][erro];
        }
    });

    return mensagemDeErro;
};

export const validarInput = (input, adicionarErro = true) => {

    const classeElementoErro = "erro-vlaidacao";
    const classeInputErro = "possui-erro-validacao";
    const elementoPai = input.parentNode;
    const elementoErroExiste = elementoPai.querySelector(
        `.${classeElementoErro}`
    );
    const elementoErro = elementoErroExiste || document.createElement("div");
    const elementoEhValido = input.validity.valid;

    const tipo = input.dataset.tipo;

    const validadoresEspecificos = {
        dataNascimento: (input) => validarDataNascimento(input),
        cpf: input => validarCPF(input),
        cep: input => recuperarEndereco(input),
        preco: input => validarPreco(input)
    };

    if (validadoresEspecificos[tipo]) {
        /* se dentro dos específicos tiver a chave com o tipo que passei, executa algo*/
        validadoresEspecificos[tipo](input);
    }

    if (!elementoEhValido) {
        // não é válido
        elementoErro.className = classeElementoErro;
        elementoErro.textContent = retornaMensagemDeErro(input.dataset.tipo, input.validity);
        if (adicionarErro) {
            input.after(elementoErro);
            input.classList.add(classeInputErro);
        }

    } else {
        // é valido
        elementoErro.remove();
        input.classList.remove(classeInputErro);
    }
};