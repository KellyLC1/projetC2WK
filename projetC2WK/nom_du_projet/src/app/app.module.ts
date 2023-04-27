import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PanierComponent } from './pages/panier/panier.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ConnexionComponent,
    ContactComponent,
    HomeComponent,
    InscriptionComponent,
    MenuComponent,
    PanierComponent,
    PaymentComponent,
    ProduitsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
