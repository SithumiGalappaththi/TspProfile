import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  data:any;
  constructor(private formBuilder: FormBuilder, private router:Router) {
    /* this.nameForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
    }); */
  }
  form = new FormGroup({
    name:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
    ]),
    msg: new FormControl('',[Validators.required]),
  });

  submit() {
    this.data = this.form.value;
    console.log(this.data);
    this.router.navigate(['/Profile']);
  }
}
