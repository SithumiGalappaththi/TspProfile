import { Component } from '@angular/core';
import { FormGroup, FormBuilder,  Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.component.html',
  styleUrls: ['./changepw.component.css']
})
export class ChangepwComponent {
    title = 'change passwprd';
    /*reactiveform!: FormGroup;
    constructor(private formbuilder: FormBuilder){
      this.reactiveform = this.formbuilder.group({
        oldpassword : new FormControl(),
        newpassword : new FormControl(),
        confpassword : new FormControl(),
      }) */

    /*   registerForm!: FormGroup
      submitted = false;
    constructor(private FormBuilder: FormBuilder){

    }
    ngOnInit(){
        //validations
        this.registerForm = this.FormBuilder.group({
          OldPassword:['',Validators.required],
          NewPassword:['',Validators.required],
          confirmPassword:['',Validators.required],
        })
    }
      /* submit(){
        console.log("Form Submited")
      } */
      /* onSubmit(){
        this.submitted = true
      if(this.registerForm.invalid){
        return
      }
      alert("Sucessess")
      } */
      regArray:any={}
      constructor(){}

      registerForm!: FormGroup;
      ngOnInit():void{

        this.registerForm = new FormGroup({
          OldPassword: new FormControl(),
          NewPassword: new FormControl(),
          confirmPassword: new FormControl()
        })
      }

      onSubmit(){
        console.log(this.registerForm.value)
      }

    }

