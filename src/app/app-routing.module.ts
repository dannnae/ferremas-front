import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { CarroComponent } from './pages/carro/carro.component';
import { HomeComponent } from './pages/home/home.component';
import { VentaComponent } from './pages/venta/venta.component';
import { WebpayComponent } from './pages/webpay/webpay.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { FacturaDetailComponent } from './pages/factura-detail/factura-detail.component';
import { FacturasListaComponent } from './pages/facturas-lista/facturas-lista.component';
import { ProductosCategoriaComponent } from './components/productos-categoria/productos-categoria.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'carro', component: CarroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'venta', component: VentaComponent },
  { path: 'webpay', component: WebpayComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'facturas/:id', component: FacturaDetailComponent },
  { path: 'facturas', component: FacturasListaComponent },
  { path: 'categoria/:categoriaId', component: ProductosCategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
