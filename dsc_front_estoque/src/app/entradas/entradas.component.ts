import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrl: './entradas.component.css'
})
export class EntradasComponent implements OnInit {
  entrada = {
    data_hora: new Date(),
    quantidade: 0,
    preco: 0.00,
    produto: {
      id: 0
    },
    fornecedor: {
      id: 0
    }
  }
  id = 0;
  entradas: any[] = []
  editando = false;
  entradaSelecionada?: any;
  produtos: any[] = []
  fornecedores: any[] = []

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.onListar();
    this.dadosService.listarProdutos().subscribe((dados: any) => {
      this.produtos = dados;
    });
    this.dadosService.listarFornecedores().subscribe((dados: any) => {
      this.fornecedores = dados.content;
    });
  }

  onListar(): void {
    this.dadosService.listarEntradaProdutos().subscribe((dados: any) => {
      this.entradas = dados.content;
    });
  }

  deletarDados(entradaId: any): void {
    this.dadosService.deletarEntradaProduto(entradaId).subscribe(() => {
      this.onListar();
    });
  }

  cadastrarDados(): void {
    console.log(this.entrada);
    this.dadosService.cadastrarEntradaProduto(this.entrada).subscribe(() => {
      this.onListar();
      this.entrada = {
        data_hora: new Date(),
        quantidade: 0,
        preco: 0.00,
        produto: {
          id: 0
        },
        fornecedor: {
          id: 0
        }
      }
    });
  }
}
