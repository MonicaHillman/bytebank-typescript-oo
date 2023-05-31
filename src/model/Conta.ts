import { TipoTransacao } from "../enum/TipoTransacao.js";
import { Transacao } from "../interface/Transacao.js";

export class Conta {
    public saldo: number;
    public transacoes: Transacao[];

    constructor() {
        this.saldo = JSON.parse(localStorage.getItem("saldo")) || 0;
        this.transacoes = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: any) => {
            if (key === "data") {
                return new Date(value);
            }
            return value;
        }) || [];;
    }

    /**
    * Retorna o saldo atual da conta.
    */
    getSaldo(): number {
        this.saldo = JSON.parse(localStorage.getItem("saldo")) || 0;
        return this.saldo;
    }

    getTransacoes(): Transacao[] {
        return this.transacoes.slice();
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }

        this.saldo += valor;
        localStorage.setItem("saldo", JSON.stringify(this.saldo));
    }

    debitar(valor: number): void {
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
    registrarTransacao(transacao: Transacao): void {

        if (transacao.tipo === TipoTransacao.DEPOSITO) {
            this.depositar(transacao.valor);
        } else {
            this.debitar(transacao.valor);
            transacao.valor *= -1;
        }

        this.transacoes.push(transacao);
        localStorage.setItem("transacoes", JSON.stringify(this.transacoes));

    }
}

export default Conta;
