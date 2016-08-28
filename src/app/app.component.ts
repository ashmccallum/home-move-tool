import { Component } from '@angular/core';

import { MdCheckbox } from '@angular2-material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MdCheckbox]
})
export class AppComponent {
  title = 'Someone told me: app works!';
}
