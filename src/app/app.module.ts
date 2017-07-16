import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProfileComponent }  from './profile/profile.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ProfileComponent ],
  bootstrap:    [ AppComponent, ProfileComponent ]
})
export class AppModule {
    
}
