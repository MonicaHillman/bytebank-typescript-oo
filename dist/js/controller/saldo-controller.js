import Conta from "../model/Conta.js";
import SaldoView from "../view/saldo-view.js";
export class SaldoController {
    conta;
    view;
    constructor() {
        this.conta = new Conta();
        this.view = new SaldoView();
    }
    atualizar() {
        const saldo = this.conta.getSaldo();
        this.view.renderizarSaldo(saldo);
    }
    depositar(valor) {
        this.conta.depositar(valor);
        this.atualizar();
    }
    debitar(valor) {
        this.conta.debitar(valor);
        this.atualizar();
    }
}
