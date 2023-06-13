import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lost-property',
  templateUrl: './lost-property.component.html',
  styleUrls: ['./lost-property.component.css']
})
export class LostPropertyComponent {
  data:any;
  constructor(private formBuilder: FormBuilder, private router:Router) {
    /* this.nameForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
    }); */
  }
  formt = new FormGroup({
    name:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*')]),
    /* date: new FormControl('',[Validators.required]), */
    msg: new FormControl('',[Validators.required]),
    /* date: new FormControl('', [
      Validators.required,
      // validates date format yyyy-mm-dd with regular expression
      Validators.pattern('^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$') 
  ]) */
  });

  submit() {
    this.data = this.formt.value;
    console.log(this.data);
    this.router.navigate(['/Profile']);
  }
}
