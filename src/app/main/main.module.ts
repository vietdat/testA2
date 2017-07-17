import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent }  from './main.component';
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ MainComponent ],
  bootstrap:    [ MainComponent ]
})
export class MainModule { }
