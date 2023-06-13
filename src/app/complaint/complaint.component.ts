import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent {
  data:any;
  constructor(private formBuilder: FormBuilder, private router:Router) {
    
  }
  formt = new FormGroup({
    msg: new FormControl('',[Validators.required]),
  });

  submit() {
    this.data = this.formt.value;
    console.log(this.data);
    this.router.navigate(['/Profile']);
  }
}
