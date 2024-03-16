import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }
  getHostState() {
    console.log("hi")
  }
}
