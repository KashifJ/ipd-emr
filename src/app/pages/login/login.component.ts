import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sih-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('sih-login');
    
  }

}