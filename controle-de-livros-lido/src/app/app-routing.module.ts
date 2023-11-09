import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcurarComponent } from './procurar/procurar.component';
import { SobreComponent } from './sobre/sobre.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ProcurarLivroComponent } from './procurar-livro/procurar-livro.component';

const routes: Routes = [
  {path: '', component: ProcurarLivroComponent},
  {path: 'filho-e-pai', component: ProcurarComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'cadastro', component: FormCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
