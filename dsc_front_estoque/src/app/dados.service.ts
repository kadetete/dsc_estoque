import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  baseUrl = 'http://localhost:8080';
  headers = { 'Authorization': `Bearer ${this.cookieService.get('authToken')}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json'};

  // CRUD de categorias

  cadastrarCategoria(categoria: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/categorias`, categoria, { headers: this.headers });
  }

  listarCategorias(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categorias`, { headers: this.headers });
  }

  categoriaPorId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/categorias/${id}`, { headers: this.headers });
  }

  atualizarCategoria(id: number, categoria: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/categorias`, categoria, { headers: this.headers });
  }

  deletarCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/categorias/${id}`, { headers: this.headers });
  }

  // CRUD de produtos

  cadastrarProduto(produto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/produtos`, produto, { headers: this.headers });
  }

  listarProdutos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/produtos`, { headers: this.headers });
  }

  produtoPorId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/produtos/${id}`, { headers: this.headers });
  }

  atualizarProduto(id: number, produto: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/produtos`, produto, { headers: this.headers });
  }

  deletarProduto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/produtos/${id}`, { headers: this.headers });
  }

  // CRUD de fabricantes

  cadastrarFabricante(fabricante: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/fabricantes`, fabricante, { headers: this.headers });
  }

  listarFabricantes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fabricantes`, { headers: this.headers });
  }

  fabricantePorId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/fabricantes/${id}`, { headers: this.headers });
  }

  atualizarFabricante(id: number, fabricante: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/fabricantes`, fabricante, { headers: this.headers });
  }

  deletarFabricante(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/fabricantes/${id}`, { headers: this.headers });
  }

  // CRUD de fornecedores

  cadastrarFornecedor(fornecedor: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/fornecedores`, fornecedor, { headers: this.headers });
  }

  listarFornecedores(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fornecedores`, { headers: this.headers });
  }

  fornecedorPorId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/fornecedores/${id}`, { headers: this.headers });
  }

  atualizarFornecedor(id: number, fornecedor: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/fornecedores`, fornecedor, { headers: this.headers });
  }

  deletarFornecedor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/fornecedores/${id}`, { headers: this.headers });
  }

  // CRUD de clientes

  cadastrarCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/clientes`, cliente, { headers: this.headers });
  }

  listarClientes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/clientes`, { headers: this.headers });
  }

  clientePorId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/clientes/${id}`, { headers: this.headers });
  }

  atualizarCliente(id: number, cliente: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/clientes`, cliente, { headers: this.headers });
  }

  deletarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/clientes/${id}`, { headers: this.headers });
  }

  // CRUD de entrada-produtos

  cadastrarEntradaProduto(entradaProduto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/entradaprodutos`, entradaProduto, { headers: this.headers });
  }

  listarEntradaProdutos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/entradaprodutos`, { headers: this.headers });
  }

  entradaProdutoPorId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/entradaprodutos/${id}`, { headers: this.headers });
  }

  atualizarEntradaProduto(id: number, entradaProduto: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/entradaprodutos`, entradaProduto, { headers: this.headers });
  }

  deletarEntradaProduto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/entradaprodutos/${id}`, { headers: this.headers });
  }

  // CRUD de vendas

  cadastrarVenda(venda: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/vendas`, venda, { headers: this.headers });
  }
}
