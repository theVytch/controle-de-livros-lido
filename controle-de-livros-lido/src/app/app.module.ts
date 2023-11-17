import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SobreComponent } from './sobre/sobre.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { FormAtualizaComponent } from './form-atualiza/form-atualiza.component';
import { FormComentarioComponent } from './form-comentario/form-comentario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MostrarDadosComponent } from './mostrar-dados/mostrar-dados.component';
import { DataService } from './data.service';
import { MostrarDadosTelaProcuraComponent } from './mostrar-dados-tela-procura/mostrar-dados-tela-procura.component';
import { ProcurarLivroComponent } from './procurar-livro/procurar-livro.component';
import { MatTableModule } from '@angular/material/table';
import { AppDateFormatPipe } from './dataFormat/app-data-format-pipe';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SobreComponent,
    FormCadastroComponent,
    FormAtualizaComponent,
    FormComentarioComponent,
    ProcurarLivroComponent,
    MostrarDadosComponent,
    MostrarDadosTelaProcuraComponent,
    AppDateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
