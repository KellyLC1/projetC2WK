import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PanierComponent } from './pages/panier/panier.component';
import { PaymentComponent } from './pages/payment/payment.component';
// import { EnfantComponent } from './pages/produits/enfant/enfant.component';
// import { FemmeComponent } from './pages/produits/femme/femme.component';
// import { HommeComponent } from './pages/produits/homme/homme.component';
import { ProduitsComponent } from './pages/produits/produits.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'produits',component:ProduitsComponent},
  // {path:'homme',component:HommeComponent},
  // {path:'femme',component:FemmeComponent},
  // {path:'enfant',component:EnfantComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'panier',component:PanierComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'payment',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
