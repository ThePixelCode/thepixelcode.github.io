import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SublinkComponent } from './sublink/sublink.component';

const routes: Routes = [
  {path: 'main-page', component: MainPageComponent},
  {path: 'angular', component: SublinkComponent, children: [
    {path: '', component: AngularComponent},
  ]},
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
