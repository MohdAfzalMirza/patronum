import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validator, Validators, FormArray } from '@angular/forms'; 
import { forbiddenNameValidator } from '../shared/user-name.validator';
import { passwordValidator } from '../shared/password.validator';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  registrationForm : FormGroup;
  constructor(private adService: AdService,private fb: FormBuilder) { }
  // get userName(){
  //   return this.registrationForm.get('username');
  // }
  // get email(){
  //   return this.registrationForm.get('email');
  // }
  ngOnInit() {
  }
  ad: any;
  
    startNewAdListing() {
      this.ad =     this.adService.createAd()
      this.buildForm()
    }
    saveAdChanges() {
      if (this.registrationForm.status != 'VALID') {
        console.log('form is not valid, cannot save to database')
        return
      }
  
      const data = this.registrationForm.value
      this.adService.updateAd(this.ad, data)
    }


    private buildForm() {
      this.registrationForm = new FormGroup({
          username : new FormControl(''),
          email: new FormControl(''),
          password : new FormControl(''),
          confirmpassword : new FormControl(''),
          address : new FormGroup({
            city : new FormControl(''),
            state : new FormControl(''),
            postalCode : new FormControl('')
          })
        });
      }
    onSubmit(){
      console.log(this.registrationForm.value); 
      // this._regitrationService.register(this.registrationForm.value)
      //      .subscribe(
      //       response => console.log('success'),
      //       error => console.log('Error', error)
      //     );
    }


}
