import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './profile.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

import { destroyPlatform } from '@angular/core';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    BrowserModule
  ],
  exports:[ProfileComponent],
  bootstrap:[ProfileComponent]
})
export class ProfileModule { 
  constructor(){
    destroyPlatform()
  }
}
