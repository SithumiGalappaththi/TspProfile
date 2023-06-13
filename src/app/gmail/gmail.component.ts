import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent {
  data:any;
  constructor(private formBuilder: FormBuilder, private router:Router) {
  }
  formg = new FormGroup({
    
    email: new FormControl('',[
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
    ]),
  });

  submit() {
    this.data = this.formg.value;
    console.log(this.data);
    this.router.navigate(['/Profile']);
  }
}

