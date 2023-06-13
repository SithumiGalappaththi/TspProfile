import { Component } from '@angular/core';
import { FormGroup, FormBuilder,  Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.component.html',
  styleUrls: ['./changepw.component.css']
})
export class ChangepwComponent {
  data:any;
  constructor(private formBuilder: FormBuilder, private router:Router) {
    
  }
  formcpw = new FormGroup({
    OldPassword: new FormControl('', [
      Validators.required, 
      Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$') 
    ]),
    NewPassword: new FormControl('', [
      Validators.required, 
      Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$') 
    ]),
    confirmPassword: new FormControl('', [
      Validators.required, 
      Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$') 
    ])
  });

  submit() {
    this.data = this.formcpw.value;
    console.log(this.data);
    this.router.navigate(['/Profile']);
  }
  }

