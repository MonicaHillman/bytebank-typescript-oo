import { TipoTransacao } from "../enum/TipoTransacao";

export type Transacao = {
    tipo: TipoTransacao;
    valor: number;
    data: Date;
}