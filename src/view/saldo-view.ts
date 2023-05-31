import { formatarMoeda } from "../utils/formatters.js";

export default class SaldoView {
    private valorSaldoElement: HTMLElement;

    constructor() {
        this.valorSaldoElement = document.querySelector(".block-saldo .saldo-valor .valor");
    }

    public renderizarSaldo(saldo: number): void {
        this.valorSaldoElement.innerHTML = formatarMoeda(saldo);
    }
}
