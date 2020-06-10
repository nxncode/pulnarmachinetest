import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RandomfieldsComponent } from './randomfields/randomfields.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GuardGuard } from './guard.guard'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [GuardGuard] },
  { path: 'randomfields/:n', component: RandomfieldsComponent, canActivate: [GuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
