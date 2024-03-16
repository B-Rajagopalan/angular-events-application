import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrService } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [` @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
    em { font-family:'Source Code Pro',monospace; font-style:normal; float:right; color:#E05C65; padding-left:10px }
    .error input { background-color:#E3C3C5; }
  `]
})
//REACTIVE FORMS
export class ProfileComponent implements OnInit{
  profileform!: FormGroup
  private firstName!: FormControl
  private lastName!: FormControl

  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser?.userName.firstName,
       [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser?.userName.lastName,
       [Validators.required]);
    this.profileform = new FormGroup(
      {
        firstName: this.firstName,
        lastName: this.lastName
      }
    )
  }

  saveProfile(formValues: any) {
    if(this.profileform.valid) {
      this.auth.updateCurrentUser(formValues);
      this.router.navigate(['events'])
    }
    else {
      this.toastr.error('Error')
    }
  }
//Both validations are same but reversed. Check [ngClass]
  validateFirstName() {
    return this.firstName.invalid && this.firstName.touched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.router.navigate(['events'])
  }
}