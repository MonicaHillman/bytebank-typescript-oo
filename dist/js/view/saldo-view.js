import { formatarMoeda } from "../utils/formatters.js";
export default class SaldoView {
    valorSaldoElement;
    constructor() {
        this.valorSaldoElement = document.querySelector(".block-saldo .saldo-valor .valor");
    }
    renderizarSaldo(saldo) {
        this.valorSaldoElement.innerHTML = formatarMoeda(saldo);
    }
}
