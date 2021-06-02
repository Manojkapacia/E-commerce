import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //@ViewChild('Fd') data: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(form:ElementRef){
  //   console.log(form);
  // }
  onSubmit(form: NgForm){
    console.log(form);
  }

}
