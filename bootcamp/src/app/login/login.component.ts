import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, Form} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;
  frmExample: FormGroup;
  constructor() { 
    this.frmLogin = this.createFormGroup();
    this.frmExample = this.createFormExample();

  } 

  createFormGroup(){
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  createFormExample(){
    return new FormGroup({
      email: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.frmLogin.value)
  }

  onSubmit2(){
    console.log(this.frmExample.value)
  }
}