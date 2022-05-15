import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

export interface ProfileFormValues {
  firstName: string;
  lastName: string;
  email: number;
}

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfileFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ProfileFormComponent),
      multi: true
    }
  ]
})
export class ProfileFormComponent implements ControlValueAccessor, OnInit,OnDestroy {

  form!:FormGroup;
  onChange : (value:ProfileFormValues) => void = () => {};
  onTouched: any = () => {} ;
  subscriptions: Subscription[] = [];
  @Input('isSubmit') isSubmit:boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: [],
      lastName: [],
      email: ['', Validators.required]
    });

    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnInit(): void {
   
  }

  writeValue(value: any): void {
    if(value){
      this.value = value;
    }
    if(value === null){
      this.form.reset();
    }
  } 

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled:boolean){

  }

  set value(value:ProfileFormValues){
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get value(): ProfileFormValues {
    return this.form.value;
  }

  get emailControl() {
    return this.form.get('email') as FormControl;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  validate(_: FormControl) {
    return this.form.valid ? null : { profile: { valid: false } };
  }

}
