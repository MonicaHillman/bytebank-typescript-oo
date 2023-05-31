import Conta from "../model/Conta.js";
import { TipoTransacao } from "../enum/TipoTransacao";
import { Transacao } from "../interface/Transacao";
import { ExtratoController } from "./extrato-controller.js";
import { SaldoController } from "./saldo-controller.js";

const formNovaTransacao: HTMLFormElement = document.querySelector(".block-nova-transacao form");
export class NovaTransacaoController {
    private inputTipoTransacao: HTMLInputElement;
    private inputValorTransacao: HTMLInputElement;
    private inputDataTransacao: HTMLInputElement;

    private conta = new Conta();
    private saldo = new SaldoController();

    constructor() {
        this.inputTipoTransacao = formNovaTransacao.querySelector("#tipoTransacao");
        this.inputValorTransacao = formNovaTransacao.querySelector("#valor");
        this.inputDataTransacao = formNovaTransacao.querySelector("#data");
    }

    // Criação do registro da nova transação


    adiciona(): void {
        const novaTransacao: Transacao = {
            tipo: this.inputTipoTransacao.value as TipoTransacao,
            valor: this.inputValorTransacao.valueAsNumber,
            data: new Date(this.inputDataTransacao.value + " 00:00:00"),
        };

        this.conta.registrarTransacao(novaTransacao)
        this.saldo.atualizar();
        formNovaTransacao.reset();
    }

}