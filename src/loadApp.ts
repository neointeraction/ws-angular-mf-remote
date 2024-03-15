import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SettingsModule } from './app/settings/settings.module';
import { ProfileModule } from './app/profile/profile.module';


const mount = ()=>{
  platformBrowserDynamic().bootstrapModule(SettingsModule)
    .catch(err => console.error(err));
    platformBrowserDynamic().bootstrapModule(ProfileModule)
      .catch(err => console.error(err));
}

export{mount}