import { Professor } from './../../../../models/professor';
import { Usuario } from 'src/app/models/usuario';
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
 
  constructor(private sevice: ProfessorService,private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.sevice.listar(this.professores).subscribe(prof => {
      this.professores = prof
      console.log(this.professores)   
    })
  }

  editar = (id: any) => {
    this.router.navigate(['nova-conta', id])

  }

}
