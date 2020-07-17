const ehUmCpfComNumerosRepetidos = (cpf) => {
    const cpfsInvalidos = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ];

    return cpfsInvalidos.includes(cpf);
};

const calcularTotal = (multiplicador) =>
    (resultado, numeroAtual) =>
        resultado + numeroAtual * multiplicador--;

const calcularDigito = (parteCPF, multiplicador) => {
    /**
     * total = multiplicação dos números (ou seja, soma de produtos)
     * resto = total % 11
     * digito = 11 - resto
     * 
     * parteCPF = ["3", "2", "3", "4"...];
     */

    const total = parteCPF.reduce(calcularTotal(multiplicador), 0);
    const resto = total % 11;

    let digito = 11 - resto;

    if (digito > 9) {
        digito = 0;
    }

    return digito;
}

export const validarCPF = input => {
    const cpfNumeros = input.value.replace(/\D/g, "");

    if (ehUmCpfComNumerosRepetidos(cpfNumeros)) {
        input.setCustomValidity("Esse não é um CPF válido");
        return;
    }

    // Para cada dígito do CPF, teremos um array com cada dígito do CPF
    const primeraParteCPF = cpfNumeros.substr(0, 9).split("");
    const primeiroDigitoCPF = Number(cpfNumeros.charAt(9)); // primeiro dígito verificador
    const primeiroDigitoCalculado = calcularDigito(primeraParteCPF, 10);

    if (primeiroDigitoCPF !== primeiroDigitoCalculado) {
        input.setCustomValidity("Esse não é um CPF válido");
        return;
    }

    const segundaParteCPF = cpfNumeros.substr(0, 10).split("");
    const segundoDigitoCPF = cpfNumeros.charAt(10); // primeiro dígito verificador
    const segundoDigitoCalculado = calcularDigito(segundaParteCPF, 11);

    if (segundoDigitoCPF !== segundoDigitoCalculado) {
        input.setCustomValidity("Esse não é um CPF válido");
        return;
    } else {
        input.setCustomValidity("");
        return;
    }

};