import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { AdditionalContentComponent } from './additional-content/additional-content.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';

const routes: Routes = [
  { path: '', component: AdditionalContentComponent },
  { path: 'main', component: MainContentComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }