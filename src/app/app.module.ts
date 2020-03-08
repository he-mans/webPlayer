import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
