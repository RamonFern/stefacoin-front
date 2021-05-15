import { CursoService } from '../../../services/curso.service';
import { Curso } from './../../../models/aluno';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cad-curso',
  templateUrl: './cad-curso.component.html',
  styleUrls: ['./cad-curso.component.css']
})
export class CadCursoComponent implements OnInit {
  curso: Curso
  
  
  id: any
  textoBotao: string = 'Salvar'
   
  constructor(private cursoService: CursoService, private activatedRoute: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
   
    
  }

  adicionar = () => {
    this.cursoService.adicionar(this.curso).subscribe(
      success => console.log('Curso adicionado com sucesso'),
      error => console.log("Não foi possivel Salvar. ERRO!"),
      () => console.log('Requisição completa'))
  }
 

}
