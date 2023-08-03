import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppHighLightDirective } from './appHighlight.directive';
import { CustomAppStyleDirective } from './custom-app-style.directive';
@NgModule({
  declarations: [
    AppComponent,
    AppHighLightDirective,
    CustomAppStyleDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
