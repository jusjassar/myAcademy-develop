import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppClassDirective } from './app-class-directive.directive';
import { myBorderDirective } from './customDirectives/border-class.directive';
import { DemoComponent } from './demo/demo.component';

@NgModule({
   declarations: [AppComponent,AppClassDirective,myBorderDirective,DemoComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
