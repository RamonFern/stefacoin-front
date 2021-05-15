import { Aluno } from './../../../models/aluno';
import { Router } from '@angular/router';
import { AlunoService } from './../../../services/aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {

  id: any
  alunos: any = []
  aluno: Aluno
  constructor(private alunoService: AlunoService, private router: Router) { }

  ngOnInit(): void {

   this.listar()
  }
  listar = () => {
    this.alunoService.listar(this.alunos).subscribe(a => {
      this.alunos = a
      console.log(this.alunos)
    })
  }

  adicionar = () => {
    this.router.navigate(['cadastro-aluno'])
  }

  excluir = (id: any) => {
    this.alunoService.excluir(id).subscribe(
      success => console.log("Deletado com sucessso"),
      error => console.log("Não foi possivel deletar. ERRO!"),
      () => console.log('Requisição completa')
    )
    this.ngOnInit();
  }

  atualizar = (id: any) => {
    this.router.navigate(['cadastro-aluno', this.id])
  }



}
