import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit {
  produto = {
    nome: '',
    descricao: '',
    quantidade_estoque: 0,
    preco: 0.00,
    categoria: {
      id: 0
    },
    fabricante: {
      id: 0
    },
    ativo: 0
  }
  id = 0;
  produtos: any[] = []
  editando = false;
  produtoSelecionada?: any;
  fabricantes: any[] = [];
  categorias: any[] = [];

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.onListar();
    this.dadosService.listarFabricantes().subscribe((dados: any) => {
      this.fabricantes = dados.content;
    });
    this.dadosService.listarCategorias().subscribe((dados: any) => {
      this.categorias = dados.content;
    });
  }

  onListar(): void {
    this.dadosService.listarProdutos().subscribe((dados: any) => {
      this.produtos = dados;
    });
  }

  deletarDados(produtosId: any): void {
    this.dadosService.deletarProduto(produtosId).subscribe(() => {
      this.onListar();
    });
  }

  cadastrarDados(): void {
    console.log(this.produto);
    this.dadosService.cadastrarProduto(this.produto).subscribe(() => {
      this.onListar();
      this.produto = {
        nome: '',
        descricao: '',
        quantidade_estoque: 0,
        preco: 0.00,
        categoria: {
          id: 0
        },
        fabricante: {
          id: 0
        },
        ativo: 0
      }
    });
  }
}

