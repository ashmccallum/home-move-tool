import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: []
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire) {
    this.items = af.database.list('items');
  }
  login() {
    this.af.auth.login();
  }
  title = 'Home Move Tool';
}
