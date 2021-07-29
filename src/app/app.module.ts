import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponentsModule } from './base-components/base-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaseComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
