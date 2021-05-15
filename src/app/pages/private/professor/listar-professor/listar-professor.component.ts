import { ProfessorService } from './../../../../services/professor.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-professor',
  templateUrl: './listar-professor.component.html',
  styleUrls: ['./listar-professor.component.css']
})
export class ListarProfessorComponent implements OnInit {

  id: any
  professores:any = []
  professor: {nome: string, email: string, senha: number, tipo: number}
 
  constructor(private profService: ProfessorService,private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.listar()
  }

  editar = (id: any) => {
    this.router.navigate(['cadastro', id])
  }

  adicionar = () => {
    this.router.navigate(['cadastro'])
  }

  listar = () => {
      this.profService.listar(this.professores).subscribe(prof => {
      this.professores = prof
      console.log(this.professores)   
    })
  }


  excluir = (id: any) => {
    this.profService.excluir(id).subscribe(
      success => console.log("Deletado com sucessso"),
      error => console.log("Não foi possivel deletar. ERRO!"),
      () => console.log('Requisição completa')
    )
    this.ngOnInit();
  }
}
