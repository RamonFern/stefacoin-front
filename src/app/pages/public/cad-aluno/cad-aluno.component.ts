import { Aluno } from './../../../models/aluno';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from 'src/app/services/aluno.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cad-aluno',
  templateUrl: './cad-aluno.component.html',
  styleUrls: ['./cad-aluno.component.css']
})
export class CadAlunoComponent implements OnInit {

  id: any
  aluno: Aluno
  textoBotao: string = 'Salvar'
  constructor(private alunoService: AlunoService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  cadastroForm: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    idade: new FormControl('', Validators.required),
    formacao: new FormControl('', Validators.required),
    cursos: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
  });

    ngOnInit(): void {
      this.aluno = {
        id: this.cadastroForm.get('id')?.value,
        nome: this.cadastroForm.get('nome')?.value,
        email: this.cadastroForm.get('email')?.value,
        senha: this.cadastroForm.get('senha')?.value,
        idade: this.cadastroForm.get('idade')?.value,
        formacao: this.cadastroForm.get('formacao')?.value,
        cursos: this.cadastroForm.get('cursos')?.value,
        tipo: this.cadastroForm.get('tipo')?.value
      }  
      this.activatedRoute.params.subscribe(param => {
        if(param['id']){
          this.textoBotao = 'Atualizar'
          this.id = param['id']
          this.alunoService.buscarItemId(this.id).subscribe(
            success => console.log('Requisição completa'),
            error => console.log("Não foi possivel Salvar. ERRO!"),
            () => console.log('Requisição completa'))
          
        }
      })
    }

    adicionar = () => {
      if(this.textoBotao == 'Salvar'){
        this.alunoService.incluir(this.aluno).subscribe(
        success => this.navegar('home'),
        error => console.log("Não foi possivel Salvar. ERRO!"),
        () => console.log('Requisição completa'))
      }else{
        this.editar()
      }
    }

    editar = () => {
      this.alunoService.editar(this.aluno, this.id).subscribe(
       success => this.navegar('home'),
       error => console.log("Não foi possivel editar. ERRO!"),
       () => console.log('Requisição completa'))
    }
   
    navegar = (rota: any) => {
      this.router.navigate([rota])
    }

}
