import Conta from "../model/Conta.js";
import { ExtratoView } from "../view/extrato-view.js";
export class ExtratoController {
    conta;
    view;
    constructor() {
        this.conta = new Conta();
        this.view = new ExtratoView();
    }
    getExtrato() {
        const gruposTransacoes = this.agruparTransacoes();
        this.view.renderizarExtrato(gruposTransacoes);
    }
    agruparTransacoes() {
        const gruposTransacoes = [];
        const transacoes = this.conta.getTransacoes();
        const transacoesOrdenadas = transacoes.sort((a, b) => b.data.getTime() - a.data.getTime());
        let labelAtualGrupoTransacao = "";
        for (const transacao of transacoesOrdenadas) {
            const labelGrupoTransacao = transacao.data.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
            if (labelGrupoTransacao !== labelAtualGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: [],
                });
            }
            gruposTransacoes[gruposTransacoes.length - 1].transacoes.push(transacao);
        }
        return gruposTransacoes;
    }
}
