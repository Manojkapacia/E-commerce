import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // addData: FormGroup;
  //addData:any[];
  
  constructor(private formBuilider: FormBuilder) { 
    //this.addData.valueChanges.subscribe(console.log);
  }

  ngOnInit() { 
  //   this.addData = this.formBuilider.group({
  //     'userName': new FormControl(null, Validators.required)
  //  }) 
  }

  register(){
    console.log();
  }

}
