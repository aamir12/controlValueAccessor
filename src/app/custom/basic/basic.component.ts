import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  
  constructor(private fb:FormBuilder) { }


  form!:FormGroup
  ngOnInit(): void {
    this.form = this.fb.group({
      name:new FormControl('',[Validators.required]),
      tc: new FormControl(false),
      tc1: new FormControl({value:true,disabled:true})
    });
  }

  onSubmit(){
    console.log(this.form.valid)
    console.log(this.form.getRawValue());
  }

}
