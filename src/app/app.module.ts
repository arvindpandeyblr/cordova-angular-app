import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppInitConfigService } from './service/app-init-config.service';

@NgModule({
  declarations: [
    AppComponent,

    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  /* After uncommenting below section I am unable to seen any in the mobile apk  */

  // providers: [{
  //   provide: APP_INITIALIZER,
  //   useFactory: (config: AppInitConfigService) => () => config.load(),
  //   deps: [AppInitConfigService],
  //   multi: true
  // }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
