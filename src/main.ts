import { SaldoController } from "./controller/saldo-controller.js";
import { NovaTransacaoController } from "./controller/nova-transacao-controller.js";
import { ExtratoController } from "./controller/extrato-controller.js";

const extratoController = new ExtratoController();
extratoController.getExtrato();

const saldoController = new SaldoController();
saldoController.atualizar();

const novaTransacaoController = new NovaTransacaoController();

const formNovaTransacao = document.querySelector(".block-nova-transacao form");
formNovaTransacao.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
        novaTransacaoController.adiciona();
        extratoController.getExtrato();
    } catch (error) {
        console.log(error.message);
    }

});