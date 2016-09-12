import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdButtonModule } from '@angular2-material/button';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';

import { AppComponent } from './app.component';

import { AngularFireModule, AuthMethods, AuthProviders, firebaseAuthConfig } from 'angularfire2';
import { LoginComponent } from './login/login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBzQ2EqcAa8qX0hHc1Zn1fsB8fwHCZaxOY",
  authDomain: "home-move-tool.firebaseapp.com",
  databaseURL: "https://home-move-tool.firebaseio.com",
  storageBucket: "home-move-tool.appspot.com"
}

export const FirebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdSidenavModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    AngularFireModule.initializeApp(firebaseConfig, FirebaseAuthConfig)
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
