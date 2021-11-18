import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementModule } from './management/management.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InputScreenComponent } from './input-screen/input-screen.component';

@NgModule({
  declarations: [AppComponent, InputScreenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManagementModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
