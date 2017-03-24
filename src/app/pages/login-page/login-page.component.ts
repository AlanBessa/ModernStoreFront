import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';
import { Ui } from '../../utils/ui';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [Ui]
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private ui: Ui) { 
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(160),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });    
  }

  ngOnInit() {
  }

  checkEmail() {
    this.ui.lock('emailControl');
    this.form.controls['email'].disable;    

    setTimeout(() => {
      this.ui.unlock('emailControl');
      this.form.controls['email'].enable;
      console.log(this.form.controls['email'].value);
    }, 3000);    
  }

  showModal() {
    this.ui.setActive('modalControl');
  }

  hideModal() {
    this.ui.setInactive('modalControl');
  }
}
