import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent { 
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
