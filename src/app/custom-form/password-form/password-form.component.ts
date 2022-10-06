import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { matchingInputsValidator } from './validators';

export interface PasswordFormValues {
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordFormComponent),
      multi: true
    }
  ]
})
export class PasswordFormComponent implements ControlValueAccessor,OnInit,OnDestroy {
  form!: FormGroup;
  subscriptions: Subscription[] = [];
  onChange: any = () => {};
  onTouched: any = () => {};

  @Input('isSubmit') isSubmit:boolean = false;
  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },
      { validator: matchingInputsValidator('password', 'confirmPassword') }
    );

    this.subscriptions.push(
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  get value(): PasswordFormValues {
    return this.form.value;
  }

  set value(value: PasswordFormValues) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get passwordControl() {
    return this.form.get('password') as FormControl;
  }

  get confirmPasswordControl() {
    return this.form.get('confirmPassword') as FormControl;
  }

  registerOnChange(fn:any) {
    this.onChange = fn;
  }

  writeValue(value:PasswordFormValues) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.form.reset();
    }
  }

  registerOnTouched(fn:any) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.form.valid ? null : { passwords: { valid: false } };
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
