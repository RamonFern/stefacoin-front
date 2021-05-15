import { Usuario } from 'src/app/models/usuario';
export interface Aluno extends Usuario{
  id: number;
  idade: string;
  formacao: string;
  cursos?: Curso[];
}

export interface Curso {
    nome: string;
    descricao: string;
    idProfessor?: number;
    aulas?: Aula[];
  }

  export interface Aula {
    id: number;
    nome: string;
    duracao: number;
    idCurso: number;
    topicos: string[];
  }
  
