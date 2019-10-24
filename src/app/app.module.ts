import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// @ts-ignore
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { StaffNameComponent } from './staff-name/staff-name.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    StaffNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
