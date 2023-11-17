import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ProcurarLivroComponent } from './procurar-livro/procurar-livro.component';
import { FormAtualizaComponent } from './form-atualiza/form-atualiza.component';
import { FormComentarioComponent } from './form-comentario/form-comentario.component';

const routes: Routes = [
  {path: '', component: ProcurarLivroComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'cadastro', component: FormCadastroComponent},
  {path: 'atualiza/:id', component: FormAtualizaComponent},
  {path: 'comentario/:id', component: FormComentarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
