import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainContentComponent } from './main-content/main-content.component';
import { AdditionalContentComponent } from './additional-content/additional-content.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    AdditionalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
