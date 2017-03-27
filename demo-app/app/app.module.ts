import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { IgoModule, provideDefaultSearchSources } from '../../lib';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    IgoModule.forRoot()
  ],
  providers: [
    ...provideDefaultSearchSources()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }