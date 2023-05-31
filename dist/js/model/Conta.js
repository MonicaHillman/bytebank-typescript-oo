import { TipoTransacao } from "../enum/TipoTransacao.js";
export class Conta {
    saldo;
    transacoes;
    constructor() {
        this.saldo = JSON.parse(localStorage.getItem("saldo")) || 0;
        this.transacoes = JSON.parse(localStorage.getItem("transacoes"), (key, value) => {
            if (key === "data") {
                return new Date(value);
            }
            return value;
        }) || [];
        ;
    }
    /**
    * Retorna o saldo atual da conta.
    */
    getSaldo() {
        this.saldo = JSON.parse(localStorage.getItem("saldo")) || 0;
        return this.saldo;
    }
    getTransacoes() {
        return this.transacoes.slice();
    }
    depositar(valor) {
        if (valor <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }
        this.saldo += valor;
        localStorage.setItem("saldo", JSON.stringify(this.saldo));
    }
    debitar(valor) {
        if (valor <= 0) {
            throw new Error("O valor a ser debitado deve ser maior que zero!");
        }
        if (valor > this.saldo) {
            throw new Error("Seu saldo é insuficiente para realizar a operação!");
        }
        this.saldo -= valor;
        localStorage.setItem("saldo", JSON.stringify(this.saldo));
    }
    /**
     * Registra uma nova transação na conta.
     * @param transacao Transação a ser registrada.
     */
    registrarTransacao(transacao) {
        if (transacao.tipo === TipoTransacao.DEPOSITO) {
            this.depositar(transacao.valor);
        }
        else {
            this.debitar(transacao.valor);
            transacao.valor *= -1;
        }
        this.transacoes.push(transacao);
        localStorage.setItem("transacoes", JSON.stringify(this.transacoes));
    }
}
export default Conta;
