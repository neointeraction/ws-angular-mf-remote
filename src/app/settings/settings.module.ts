import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [BrowserModule],
  exports: [SettingsComponent], // Optionally, if you want to use SettingsComponent outside of this module
  bootstrap: [SettingsComponent], // No need to bootstrap anything here
})
export class SettingsModule {}
