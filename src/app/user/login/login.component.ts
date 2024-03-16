import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';   
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { font-family:'Source Code Pro',monospace; font-style:normal; float:right; color:#E05C65; padding-left:10px }
    `]
})
//TEMPLATE BASED FORMS
export class LoginComponent {
   @ViewChild('loginForm',{static:true}) loginForm!: NgForm //Way to access validations in component
   // {static:true} ensures that loginForm ref is captured before ngOnInit()
   userName!: string
   password!: string
   mouseoverLogin!: boolean

   constructor (private auth: AuthService, private router: Router) {

   }

   login(userData: any) {
    this.auth.login(userData.userName,userData.password)
    this.router.navigate(['/events'])
   }

   cancel() {
    this.router.navigate(['events'])
   }

   // validation using template variable 'loginForm'
   validatePassword() {
    return this.loginForm.controls['password']?.invalid && (this.loginForm.controls['password']?.touched ||
    this.mouseoverLogin)
   }
} 