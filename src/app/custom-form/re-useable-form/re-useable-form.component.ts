import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-re-useable-form',
  templateUrl: './re-useable-form.component.html',
  styleUrls: ['./re-useable-form.component.scss']
})
export class ReUseableFormComponent implements OnInit {
  signupForm!:FormGroup;
  isSubmit:boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      password: [],
      profile:[]
    })
  }

  submit() {
    this.isSubmit = true;
    console.log(this.signupForm.valid);
    console.log(this.signupForm.value);
  }

}
