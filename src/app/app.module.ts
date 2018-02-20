import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Search
import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


import { SearchService } from './app.searchService';
import { Subject } from 'rxjs/Subject';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
  	SearchService
  ],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
