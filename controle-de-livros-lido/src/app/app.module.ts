import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProcurarComponent } from './procurar/procurar.component';
import { FormsModule } from '@angular/forms';
import { FilhoComponent } from './filho/filho.component';
import { SobreComponent } from './sobre/sobre.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MostrarDadosComponent } from './mostrar-dados/mostrar-dados.component';
import { DataService } from './data.service';
import { MostrarDadosOutraTableComponent } from './mostrar-dados-outra-table/mostrar-dados-outra-table.component';
import { ProcurarLivroComponent } from './procurar-livro/procurar-livro.component';
import { MatTableModule } from '@angular/material/table';
import { AppDateFormatPipe } from './footer/footer.component'; // Certifique-se de corrigir o caminho


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    FooterComponent,
    HeaderComponent,
    ProcurarComponent,
    FilhoComponent,
    SobreComponent,
    FormCadastroComponent,
    ProcurarLivroComponent,
    MostrarDadosComponent,
    MostrarDadosOutraTableComponent,
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
