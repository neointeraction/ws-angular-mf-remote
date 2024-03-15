import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './profile.component';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    BrowserModule
  ],
  exports:[ProfileComponent],
  bootstrap:[ProfileComponent]
})
export class ProfileModule { }
