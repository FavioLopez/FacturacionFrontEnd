import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodigoControlComponent } from './componenetes/codigo-control/codigo-control.component';
import { CodigoControl2Component } from './componentes/codigo-control2/codigo-control2.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { CodigoFormComponent } from './componentes/codigo-control/codigo-form/codigo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CodigoControlComponent,
    CodigoControl2Component,
    UsuariosComponent,
    CodigoFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
