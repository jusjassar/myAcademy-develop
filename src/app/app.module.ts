import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppClassDirective } from './app-class-directive.directive';
import { myBorderDirective } from './customDirectives/border-class.directive';

import { DemoComponent } from './demo/demo.component';
import { HostBindingDirective } from './customDirectives/host-binding.directive';
import { TitleColorDirective } from './customDirectives/hostBinding.directive';
import { ProductsComponent } from './products/products.component';
import { MyNgClassDirective } from './customDirectives/customNgClass.directive';
@NgModule({
  declarations: [
    AppComponent,
    AppClassDirective,
    myBorderDirective,
    DemoComponent,
    HostBindingDirective,
    TitleColorDirective,
    ProductsComponent,
    MyNgClassDirective

  ],

  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
