import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-fabricantes',
  templateUrl: './fabricantes.component.html',
  styleUrl: './fabricantes.component.css'
})
export class FabricantesComponent implements OnInit {
  fabricante = {
    nome: ''
  }
  id = 0;
  fabricantes: any[] = []
  editando = false;
  fabricanteSelecionada?: any;

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.onListar();
  }

  onListar(): void {
    this.dadosService.listarFabricantes().subscribe((dados: any) => {
      this.fabricantes = dados.content;
    });
  }

  editarDados(fabricanteId: any): void {
    this.dadosService.fabricantePorId(fabricanteId).subscribe((dados: any) => {
      this.fabricante = dados;
      this.id = fabricanteId;
      this.editando = true;
    });
  }

  deletarDados(fabricanteId: any): void {
    this.dadosService.deletarFabricante(fabricanteId).subscribe(() => {
      this.onListar();
    });
  }

  cadastrarDados(): void {
    this.dadosService.cadastrarFabricante(this.fabricante).subscribe(() => {
      this.onListar();
      this.fabricante = {
        nome: ''
      }
    });
  }

  atualizarDados(): void {
    this.dadosService.atualizarFabricante(this.id, this.fabricante).subscribe(() => {
      this.onListar();
      this.fabricante = {
        nome: ''
      }
      this.editando = false;
      this.id = 0;
    });
  }
}
