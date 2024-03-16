import { Component } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
dataFromRemoteStore: any;
constructor(private settingsService: SettingsService) {
  settingsService.getHostState()
}

}