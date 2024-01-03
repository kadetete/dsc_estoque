import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.css'
})
export class VendaComponent implements OnInit {
  venda= {
    dataHora: new Date(),
    totalVenda: 0,
    cliente: {
      id: 0,
    }
  }
  id = 0;
  clientes: any[] = [];

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
      this.dadosService.listarClientes().subscribe((dados: any) => {
        console.log(dados);
        this.clientes = dados.content;
      });
  }

  cadastrarDados(): void {
    console.log(this.venda);
    this.dadosService.cadastrarVenda(this.venda).subscribe(() => {
      this.venda = {
        dataHora: new Date(),
        totalVenda: 0,
        cliente: {
          id: 0,
        }
      }
    });
  }
}