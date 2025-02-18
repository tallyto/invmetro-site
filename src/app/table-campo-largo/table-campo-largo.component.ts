import { Component } from '@angular/core';

@Component({
  selector: 'app-table-campo-largo',
  templateUrl: './table-campo-largo.component.html',
  styleUrls: ['./table-campo-largo.component.css']
})
export class TableCampoLargoComponent {
  veiculosData = [
    { veiculo: 'Automóvel', gnv: 'R$ 440,00', sinistro: 'R$ 580,00', artesanal: 'R$ 2.500,00', antt: 'X' },
    { veiculo: 'Automóvel Rebaixado', gnv: 'R$ 440,00', sinistro: 'R$ 580,00', artesanal: 'X', antt: 'X' },
    { veiculo: 'Veículo Blindado', gnv: 'R$ 440,00', sinistro: 'R$ 900,00', artesanal: 'X', antt: 'X' },
    { veiculo: 'Utilitário/camioneta/caminhonete', gnv: 'R$ 440,00', sinistro: 'R$ 630,00', artesanal: 'R$ 2.500,00', antt: 'X' },
    { veiculo: 'Microônibus', gnv: 'R$ 440,00', sinistro: 'R$ 700,00', artesanal: 'X', antt: 'R$ 530,00' },
    { veiculo: 'Ônibus', gnv: 'R$ 1000,00', sinistro: 'R$ 1000,00', artesanal: 'X', antt: 'R$ 600,00' },
    { veiculo: 'Caminhão', gnv: 'R$ 1000,00', sinistro: 'R$ 1000,00', artesanal: 'X', antt: 'X' },
    { veiculo: 'Reboque/Semi-reboque', gnv: 'X', sinistro: 'R$ 1150,00', artesanal: 'X', antt: 'X' },
    { veiculo: 'Motocicleta/motoneta/ciclomotor até 300 cc', gnv: 'X', sinistro: 'R$ 500,00', artesanal: 'R$ 2.500,00', antt: 'X' },
    { veiculo: 'Motocicleta/motoneta/ciclomotor acima de 300 cc', gnv: 'X', sinistro: 'R$ 650,00', artesanal: 'R$ 2.500,00', antt: 'X' },
    { veiculo: 'Triciclo/Quadriciclo', gnv: 'X', sinistro: 'R$ 1000,00', artesanal: 'R$ 2.500,00', antt: 'X' }
  ];

  servicosData = [
    { servico: 'Laudo Escolar', valor: 'R$ 500,00' },
    { servico: 'Laudo Seguradora/URBS (Taxi)', valor: 'Preço Sinistro' },
    { servico: 'Laudo Opacidade + Ruído', valor: 'R$ 180,00' },
    { servico: 'Basculante Periódico (Res 859/21 Contran)', valor: 'R$ 550,00' },
    { servico: 'Laudo Ônibus COMEC', valor: 'R$ 480,00' },
    { servico: 'Motor-Casa', valor: 'R$ 1.950,00' },
    { servico: 'CITV Mercosul', valor: 'R$ 500,00' },
    { servico: 'Ensaio de Torção', valor: 'R$ 500,00' },
    { servico: '4º Eixo em semi-reboque', valor: 'R$ 1.950,00' },
    { servico: 'Retirada de GNV', valor: 'R$ 700,00' }
  ];
}
