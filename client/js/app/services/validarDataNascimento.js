// primeiro arquivo js criado

export const validarDataNascimento = (input) => { //função que é exportada
    const dataNascimento = new Date(input.value); // variável que vai receber no objeto Date o valor que o user digitou no input
    const dataAtual = new Date();

    /* criando uma data a partir do dataNascimento + 18
        ex:
            (29/05/2000) + (18 anos) = 2018
     */
    const dataFaz18 = new Date(
        dataNascimento.getUTCFullYear() + 18, // ano
        dataNascimento.getUTCMonth(), // mês
        dataNascimento.getUTCDate() // dia
    );

    if (dataFaz18 > dataAtual) {
        input.setCustomValidity("Idade mínima: 18 anos");
        return;
    }

    input.setCustomValidity("");
    return;
};