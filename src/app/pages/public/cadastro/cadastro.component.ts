import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfessorService } from 'src/app/services/professor.service';
import { Professor } from 'src/app/models/professor';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    tipo: new FormControl(0, Validators.required),
  });

  usuario: Usuario = {
    nome: this.cadastroForm.get('nome')?.value,
    email: this.cadastroForm.get('email')?.value,
    senha: this.cadastroForm.get('senha')?.value,
    tipo: this.cadastroForm.get('tipo')?.value
  }

  id: any
  usuarioAtualizar: Usuario
  textoBotao: string = 'Salvar'
  constructor(private profService: ProfessorService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(parametros => {
      if(parametros['id']){
        this.textoBotao = 'Editar'
        this.id = parametros['id']
        this.profService.obter(this.id).subscribe(prof => {
          this.usuarioAtualizar = prof
        })
        console.log(`Id enviado: ${this.id}`)
      }
    })    
  }

  adicionarProfessor = () => {
    if(this.textoBotao == 'Salvar'){
    this.profService.incluir(this.usuario).subscribe(
      success => this.navegar('home'),
      error => console.log("Não foi possivel Salvar. ERRO!" + this.usuario.nome),
      () => console.log('Requisição completa'))
    }else{
      this.editar()
    }
  }

  editar = () => {
    this.profService.alterar(this.usuario).subscribe(
     success => this.navegar('home'),
     error => console.log("Não foi possivel editar. ERRO!"),
     () => console.log('Requisição completa'))
  }

 navegar = (rota: any) => {
  this.router.navigate([rota])
}
  
}
