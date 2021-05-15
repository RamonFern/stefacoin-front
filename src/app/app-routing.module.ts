import { NovaContaComponent } from './pages/public/nova-conta/nova-conta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { HomeComponent } from './pages/private/home/home.component';
import { ListarProfessorComponent } from './pages/private/professor/listar-professor/listar-professor.component';
import { CadAlunoComponent } from './pages/public/cad-aluno/cad-aluno.component';
import { CadastroComponent } from './pages/public/cadastro/cadastro.component';
import { LoginComponent } from './pages/public/login/login.component';
import { PaginaNaoEncontradaComponent } from './pages/public/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CadCursoComponent } from './page/private/cad-curso/cad-curso.component';

const routes: Routes = [
  {
    path: 'home',
   
    component: HomeComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'cadastro/:id',
    component: CadastroComponent
  },
  {
    path: 'cadastro-aluno',
    canActivate: [AuthGuardService],
    component: CadAlunoComponent
  },
  {
    path: 'cadastro-aluno/:id',
    canActivate: [AuthGuardService],
    component: CadAlunoComponent
  },
  {
    path: 'curso',
    component: CadCursoComponent
  },
  {
    path: 'listar-professor',
    component: ListarProfessorComponent
  },
  {
    path: 'nova-conta',
    component: NovaContaComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
