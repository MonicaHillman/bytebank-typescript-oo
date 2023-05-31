import Conta from "../model/Conta.js";
import { SaldoController } from "./saldo-controller.js";
const formNovaTransacao = document.querySelector(".block-nova-transacao form");
export class NovaTransacaoController {
    inputTipoTransacao;
    inputValorTransacao;
    inputDataTransacao;
    conta = new Conta();
    saldo = new SaldoController();
    constructor() {
        this.inputTipoTransacao = formNovaTransacao.querySelector("#tipoTransacao");
        this.inputValorTransacao = formNovaTransacao.querySelector("#valor");
        this.inputDataTransacao = formNovaTransacao.querySelector("#data");
    }
    // Criação do registro da nova transação
    adiciona() {
        const novaTransacao = {
            tipo: this.inputTipoTransacao.value,
            valor: this.inputValorTransacao.valueAsNumber,
            data: new Date(this.inputDataTransacao.value + " 00:00:00"),
        };
        this.conta.registrarTransacao(novaTransacao);
        this.saldo.atualizar();
        formNovaTransacao.reset();
    }
}
