import { validarDataNascimento } from "./services/validarDataNascimento.js";
import { validarInput } from "./services/validar.js";

window.onload = () => { // inputs só serão carregados quando a página terminar de ser carregada
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {

        if (input.dataset.tipo === "preco") {
            SimpleMaskMoney.setMask(input, {
                allowNegative: false,
                negativeSignAfter: false,
                prefix: 'R$',
                fixed: true,
                fractionDigits: 2,
                decimalSeparator: ',',
                thousandsSeparator: '.',
                cursor: 'end'
            });
        }

        input.addEventListener('input', () => {
            validarInput(input, false);
        });

        input.addEventListener('blur', () => {
            validarInput(input);
        });
    });
};