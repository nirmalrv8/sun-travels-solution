import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewContractComponent } from './view-contract/view-contract.component';
import { SearchContractComponent } from './search-contract/search-contract.component';
import { AddContractComponent } from './add-contract/add-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewContractComponent,
    SearchContractComponent,
    AddContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
