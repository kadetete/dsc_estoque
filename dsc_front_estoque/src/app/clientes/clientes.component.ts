import { Component, OnInit } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
  cliente = {
    nome: '',
    endereco: {
    rua: '',
    numero: 0,
    bairro: '',
    cep: ''
    }
  }
  id = 0;
  clientes: any[] = []
  editando = false;
  clienteSelecionada?: any;

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.onListar();
  }

  onListar(): void {
    this.dadosService.listarClientes().subscribe((dados: any) => {
      this.clientes = dados.content;
    });
  }

  editarDados(clienteId: any): void {
    this.dadosService.clientePorId(clienteId).subscribe((dados: any) => {
      this.cliente = dados;
      this.id = clienteId;
      this.editando = true;
    });
  }

  deletarDados(clienteId: any): void {
    this.dadosService.deletarCliente(clienteId).subscribe(() => {
      this.onListar();
    });
  }

  cadastrarDados(): void {
    console.log(this.cliente);
    this.dadosService.cadastrarCliente(this.cliente).subscribe(() => {
      this.onListar();
      this.cliente = {
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
    this.dadosService.atualizarCliente(this.id, this.cliente).subscribe(() => {
      this.onListar();
      this.cliente = {
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
