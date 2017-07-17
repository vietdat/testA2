import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent }  from './navbar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ NavbarComponent ],
  bootstrap:    [ NavbarComponent ]
})
export class NavbarModule { }
