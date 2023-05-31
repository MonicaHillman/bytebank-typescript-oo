import Conta from "../model/Conta.js";
import SaldoView from "../view/saldo-view.js";

export class SaldoController {
    private conta: Conta;
    private view: SaldoView;

    constructor() {
        this.conta = new Conta();
        this.view = new SaldoView();
    }

    atualizar(): void {
        const saldo = this.conta.getSaldo();
        this.view.renderizarSaldo(saldo);
    }

    public depositar(valor: number): void {
        this.conta.depositar(valor);
        this.atualizar();
    }

    public debitar(valor: number): void {
        this.conta.debitar(valor);
        this.atualizar();
    }
}