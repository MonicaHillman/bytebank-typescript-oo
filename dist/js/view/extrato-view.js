import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../enum/FormatoData.js";
export class ExtratoView {
    registroTransacoesExtratoElement;
    constructor() {
        this.registroTransacoesExtratoElement = document.querySelector(".extrato .registro-transacoes");
    }
    renderizarExtrato(gruposTransacoes) {
        this.registroTransacoesExtratoElement.innerHTML = "";
        if (gruposTransacoes.length === 0) {
            this.registroTransacoesExtratoElement.innerHTML = "<div>Não há transações registradas.</div>";
            return;
        }
        let htmlRegistroTransacoes = "";
        for (const grupoTransacao of gruposTransacoes) {
            let htmlTransacao = "";
            for (const transacao of grupoTransacao.transacoes) {
                htmlTransacao += `
                    <div class="transacao-item">
                        <div class="transacao-info">
                            <span class="tipo">${transacao.tipo}</span>
                            <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                        </div>
                        <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
                    </div>
                `;
            }
            htmlRegistroTransacoes += `
                <div class="transacoes-group">
                    <strong class="mes-group">${grupoTransacao.label}</strong>
                    ${htmlTransacao}
                </div>
            `;
        }
        this.registroTransacoesExtratoElement.innerHTML = htmlRegistroTransacoes;
    }
}
