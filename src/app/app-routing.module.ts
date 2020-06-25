import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'portafolio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
