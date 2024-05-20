export interface EtapaInterface  {
  etapa_id: number;
  etapa_descricao: string;
  etapa_data_inicio: Date;
  etapa_data_fim: Date;
  etapa_ordem: null;
  etapa_status: number;
  disciplina_id: number;
  etapa_id_pai: number;
}

