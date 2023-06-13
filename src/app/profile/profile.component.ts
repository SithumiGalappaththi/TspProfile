
import { Component } from '@angular/core';
import { FormGroup, FormBuilder,  Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  data:any;
  constructor(private formBuilder: FormBuilder, private router:Router) {
    /* this.nameForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
    }); */
  }
  form = new FormGroup({
    fname:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    lname:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    mobileno: new FormControl('',[Validators.required,Validators.pattern('[0][7][784651][0-9]{7}')])
  });

  submit() {
    this.data = this.form.value;
    console.log(this.data);
    this.router.navigate(['/Profile']);
  }
  }
