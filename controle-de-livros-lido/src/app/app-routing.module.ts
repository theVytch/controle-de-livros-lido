import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcurarComponent } from './procurar/procurar.component';
import { SobreComponent } from './sobre/sobre.component';
import { FilhoComponent } from './filho/filho.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';

const routes: Routes = [
  {path: '', component: ProcurarComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'cadastro', component: FormCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
