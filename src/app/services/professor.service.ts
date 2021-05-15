import { Professor } from './../models/professor';
import { Mensagem } from './../models/mensagem';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000/stefanini/professor';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  constructor(private httpClient: HttpClient) {}

  
  listar(filtro: Partial<Professor>): Observable<Professor[]> {
    return this.httpClient.get<Professor[]>(URL, {
      params: filtro,
    });
  }

  obter(id: any): Observable<Professor> {
    return this.httpClient.get<Professor>(`http://localhost:3000/stefanini/professor/ ${id}`)
  }

  incluir(professor: Professor): Observable<Mensagem> {
    return this.httpClient.post<Mensagem>(URL, professor);
  }

  alterar(prof: Professor): Observable<Mensagem> {
    return this.httpClient.put<Mensagem>(URL, prof)
  }

  excluir(id: any): Observable<Mensagem> {
    return this.httpClient.delete<Mensagem>(`http://localhost:3000/stefanini/professor/ ${id}`)
  }
}
