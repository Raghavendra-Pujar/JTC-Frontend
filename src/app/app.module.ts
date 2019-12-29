import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AlertsModule } from 'angular-alert-module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent
      ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AlertsModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot([
      { path:'home', component:HomeComponent, pathMatch:'full'},
      { path:'', redirectTo:'home', pathMatch:'full'},
      { path: 'create', component:CreateComponent, pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
