import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/';

  // CRUD de categorias

  cadastrarCategoria(categoria: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/categorias`, categoria);
  }

  listarCategorias(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categorias`);
  }

  atualizarCategoria(id: number, categoria: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/categorias/${id}`, categoria);
  }

  deletarCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/categorias/${id}`);
  }

  // CRUD de produtos

  cadastrarProduto(produto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/produtos`, produto);
  }

  listarProdutos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/produtos`);
  }

  atualizarProduto(id: number, produto: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/produtos/${id}`, produto);
  }

  deletarProduto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/produtos/${id}`);
  }

  // CRUD de fabricantes

  cadastrarFabricante(fabricante: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/fabricantes`, fabricante);
  }

  listarFabricantes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fabricantes`);
  }

  atualizarFabricante(id: number, fabricante: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/fabricantes/${id}`, fabricante);
  }

  deletarFabricante(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/fabricantes/${id}`);
  }

  // CRUD de fornecedores

  cadastrarFornecedor(fornecedor: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/fornecedores`, fornecedor);
  }

  listarFornecedores(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fornecedores`);
  }

  atualizarFornecedor(id: number, fornecedor: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/fornecedores/${id}`, fornecedor);
  }

  deletarFornecedor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/fornecedores/${id}`);
  }

  // CRUD de clientes

  cadastrarCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/clientes`, cliente);
  }

  listarClientes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/clientes`);
  }

  atualizarCliente(id: number, cliente: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/clientes/${id}`, cliente);
  }

  deletarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/clientes/${id}`);
  }

  // CRUD de entrada-produtos

  cadastrarEntradaProduto(entradaProduto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/entradaprodutos`, entradaProduto);
  }

  listarEntradaProdutos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/entradaprodutos`);
  }

  atualizarEntradaProduto(id: number, entradaProduto: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/entradaprodutos/${id}`, entradaProduto);
  }

  deletarEntradaProduto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/entradaprodutos/${id}`);
  }

  // CRUD de vendas

  cadastrarVenda(venda: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/vendas`, venda);
  }
}
