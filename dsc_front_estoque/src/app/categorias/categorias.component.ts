import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit {
  categoria = {
    nome: ''
  }
  id = 0;
  categorias: any[] = []
  editando = false;
  categoriaSelecionada?: any;

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.onListar();
  }

  onListar(): void {
    this.dadosService.listarCategorias().subscribe((dados: any) => {
      this.categorias = dados.content;
    });
  }

  editarDados(categoriaId: any): void {
    this.dadosService.categoriaPorId(categoriaId).subscribe((dados: any) => {
      this.categoria = dados;
      this.id = categoriaId;
      this.editando = true;
    });
  }

  deletarDados(categoriaId: any): void {
    this.dadosService.deletarCategoria(categoriaId).subscribe(() => {
      this.onListar();
    });
  }

  cadastrarDados(): void {
    this.dadosService.cadastrarCategoria(this.categoria).subscribe(() => {
      this.onListar();
      this.categoria = {
        nome: ''
      }
    });
  }

  atualizarDados(): void {
    this.dadosService.atualizarCategoria(this.id, this.categoria).subscribe(() => {
      this.onListar();
      this.categoria = {
        nome: ''
      }
      this.editando = false;
      this.id = 0;
    });
  }
}
