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
    ProcurarLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MostrarDadosComponent,
    MostrarDadosOutraTableComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
