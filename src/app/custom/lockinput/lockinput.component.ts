import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-lockinput',
  templateUrl: './lockinput.component.html',
  styleUrls: ['./lockinput.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:LockinputComponent,
      multi:true
    }
  ]
})
export class LockinputComponent implements OnInit,ControlValueAccessor {
  value = false;
  disabled = false;
  onChange : (value:boolean) => void = () => {};
  onTouched!:()=>void ;

  constructor() { }

  ngOnInit(): void {
  }

  
  writeValue(obj: boolean): void {
    this.value = obj
  }

  registerOnChange(fn: any){
    this.onChange = fn;
  }
  registerOnTouched(fn: any){
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean){
    this.disabled = isDisabled;
  }

  setValue(){
    if(this.disabled) return;
    this.value = !this.value;
    this.onChange(this.value);
    this.onTouched();
  }

}


/**
 * Step for Control value accessor
 */
//step1 : extends ControlValueAccessor

/* 
 implements methods
 1) writeValue
 2) registerOnChange
 3) registerOnTouched
 4) setDisabledState //optional

 step3 : 

  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:LockinputComponent,
      multi:true
    }
  ]

  

*/
