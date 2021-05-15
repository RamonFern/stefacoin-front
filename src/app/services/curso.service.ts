import { Curso } from './../models/aluno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aula } from '../models/aluno';
import { Injectable } from '@angular/core';
import { Mensagem } from '../models/mensagem';

const URL = 'http://localhost:3000/stefanini/curso'

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private httpClient: HttpClient) { }

  adicionar(curso: Curso): Observable<Mensagem>{
    return this.httpClient.post<Mensagem>(URL, curso)
  }
 
}
