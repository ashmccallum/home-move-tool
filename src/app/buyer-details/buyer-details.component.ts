import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-buyer-details',
  templateUrl: 'buyer-details.component.html',
  styleUrls: ['buyer-details.component.css']
})
export class BuyerDetailsComponent {

  buyer: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
    this.buyer = af.database.object('/buyer');
  }
  
  save(
    newFirstName: string,
    newSurname: string,
    newPhone: string
  ) {
    this.buyer.set({ 
      firstName: newFirstName,
      surname: newSurname,
      phone: newPhone
      // createdAt: current timestamp
      // updatedAt: current timestamp
    })
  }

  update(
    newFirstName: string,
    newSurname: string,
    newPhone: string
  ) {
    this.buyer.update({ 
      firstName: newFirstName,
      surname: newSurname,
      phone: newPhone
      // createdAt: current timestamp
      // updatedAt: current timestamp
    })
  }

}
