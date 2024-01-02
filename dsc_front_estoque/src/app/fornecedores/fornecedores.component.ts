import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrl: './fornecedores.component.css'
})
export class FornecedoresComponent implements OnInit {
  fornecedor = {
    nome: '',
    endereco: {
    rua: '',
    numero: 0,
    bairro: '',
    cep: ''
    }
  }
  id = 0;
  fornecedores: any[] = []
  editando = false;
  fornecedorSelecionada?: any;

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.onListar();
  }

  onListar(): void {
    this.dadosService.listarFornecedores().subscribe((dados: any) => {
      this.fornecedores = dados.content;
    });
  }

  editarDados(fornecedorId: any): void {
    this.dadosService.fornecedorPorId(fornecedorId).subscribe((dados: any) => {
      this.fornecedor = dados;
      this.id = fornecedorId;
      this.editando = true;
    });
  }

  deletarDados(fornecedorId: any): void {
    this.dadosService.deletarFornecedor(fornecedorId).subscribe(() => {
      this.onListar();
    });
  }

  cadastrarDados(): void {
    console.log(this.fornecedor);
    this.dadosService.cadastrarFornecedor(this.fornecedor).subscribe(() => {
      this.onListar();
      this.fornecedor = {
        nome: '',
        endereco: {
        rua: '',
        numero: 0,
        bairro: '',
        cep: ''
        }
      }
    });
  }

  atualizarDados(): void {
    this.dadosService.atualizarFornecedor(this.id, this.fornecedor).subscribe(() => {
      this.onListar();
      this.fornecedor = {
        nome: '',
        endereco: {
        rua: '',
        numero: 0,
        bairro: '',
        cep: ''
        }
      }
      this.editando = false;
      this.id = 0;
    });
  }
}
