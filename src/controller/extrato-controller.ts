import Conta from "../model/Conta.js";
import { GrupoTransacao } from "../interface/GrupoTransacao";
import { Transacao } from "../interface/Transacao";
import { ExtratoView } from "../view/extrato-view.js";

export class ExtratoController {
    private conta: Conta;
    private view: ExtratoView;

    constructor() {
        this.conta = new Conta();
        this.view = new ExtratoView();
    }

    public getExtrato(): void {
        const gruposTransacoes = this.agruparTransacoes();
        this.view.renderizarExtrato(gruposTransacoes);
    }

    private agruparTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const transacoes: Transacao[] = this.conta.getTransacoes();
        const transacoesOrdenadas: Transacao[] = transacoes.sort((a, b) => b.data.getTime() - a.data.getTime());
        let labelAtualGrupoTransacao: string = "";

        for (const transacao of transacoesOrdenadas) {
            const labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });

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
