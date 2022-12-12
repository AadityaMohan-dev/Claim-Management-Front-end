import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{
  ImagePath: string;
  signUpForm!: FormGroup;
  constructor() {
    //image location
    this.ImagePath = '/assets/images/Signupimg.png'
  }

  ngOnInit(): void {


    this.signUpForm = new FormGroup({
      name : new FormControl('',[Validators.required,Validators.pattern(/[a-zA-Z]+/)]),
      dob : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
      password : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15),Validators.pattern(/^[a-zA-Z0-9@%_]+$/)]),
      repassword : new FormControl('',Validators.required),
      plans : new FormControl('',Validators.required),

    })

  }
  onSignUp(){
    console.log(this.signUpForm.value)
  }



}
