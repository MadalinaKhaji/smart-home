import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NetworkComponent } from './components/network/network.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'network', component: NetworkComponent },
  {
    path: '',
    redirectTo: '/network',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
