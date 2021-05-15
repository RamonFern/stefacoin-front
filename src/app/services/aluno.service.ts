import { Mensagem } from './../models/mensagem';
import { Aluno } from './../models/aluno';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000/stefanini/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient: HttpClient) { }

  
  listar(filtro: Partial<Aluno>): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(URL);
  }

  incluir(aluno: Aluno): Observable<Mensagem>{
    return this.httpClient.post<Mensagem>(URL, aluno);
  }

  excluir(id: any): Observable<Mensagem>{
    return this.httpClient.delete<Mensagem>(`http://localhost:3000/stefanini/aluno/ ${id}`)
  }

  editar(aluno: Aluno, id: any): Observable<Mensagem>{
    return this.httpClient.put<Mensagem>(`http://localhost:3000/stefanini/aluno/ ${id}`, aluno)
  }

  buscarItemId(id: any): Observable<Mensagem>{
    return this.httpClient.get<Mensagem>(`http://localhost:3000/stefanini/aluno/ ${id}`)
  }

  
}

