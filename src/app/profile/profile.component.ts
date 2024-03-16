import { loadManifest, loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';
import { Component } from '@angular/core';

function initializeApp(){
  const data = (window as any)?.host?.getState();
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
 public name:string='profile'
constructor(){
  initializeApp()
}
}
