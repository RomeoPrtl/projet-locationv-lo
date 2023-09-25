import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import{ Validators } from '@angular/forms';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  form = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]),
    usersurname : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
    email : new FormControl('example@mail.com', [Validators.required, Validators.email]),
    date : new FormControl('JJ/MM/AAAA', [Validators.required]),
    conditions : new FormControl(false, [Validators.requiredTrue])
  })
  get username(){ return this.form.get('username'); }

  onSubmit(){
    if(this.form.valid){
      const reservation = this.form.value;
      localStorage.setItem("reservation", JSON.stringify(reservation));
      console.log(reservation);
    }
  }

}



