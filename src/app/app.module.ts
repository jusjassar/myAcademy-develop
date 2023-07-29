import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppClassDirective } from './app-class-directive.directive';
import { myBorderDirective } from './border-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppClassDirective,
    myBorderDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
