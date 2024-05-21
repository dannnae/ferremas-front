import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarroComponent } from './pages/carro/carro.component';
import { VentaComponent } from './pages/venta/venta.component';
import { WebpayComponent } from './pages/webpay/webpay.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CarroComponent,
    VentaComponent,
    WebpayComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    InicioComponent,
    CategoriasComponent,
    CategoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
