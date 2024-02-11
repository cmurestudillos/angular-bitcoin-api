import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
// Peticiones Http
import { HttpClientModule } from '@angular/common/http';
// Servicios
import { BitcoinService } from './services/bitcoin.service';
//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/shared/error/error.component';
// Angular Material
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [BitcoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
