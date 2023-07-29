import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HostBindingDirective } from './customDirectives/host-binding.directive';

@NgModule({
  declarations:
  [AppComponent,
    DemoComponent,
    HostBindingDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
