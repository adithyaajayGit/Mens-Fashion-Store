import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  changepassword!: FormGroup;
  login_id: any;
  validationstatus=null;

  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  ngOnInit(): void {
    this.changepassword = this.fb.group({
      username: [''],
      password: [''],
      newpassword: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
      confirmnewpassword: [''],
    });
    this.login_id = localStorage.getItem("loginid");
  }

  onSubmit()
  {

    if(this.changepassword.invalid){
      this.validationstatus ="";
      alert('Please Enter data')
  
      return
    } 
  else{
    this.validationstatus =null;
    console.log(this.changepassword.value);
  }
  
  
  {
    if (this.changepassword.valid) {
      const { username, password, newpassword, confirmnewpassword } = this.changepassword.value;
      if (newpassword === confirmnewpassword) {
        this.dbservice.userchangepassword({
          login_id: this.login_id,
          username,
          currentPassword: password,
          newpassword,
        }).then((confirmation: any) => {
          if (confirmation.message === 'Success') {
            alert('Password Updated');
            this.router.navigate(['/customermaster/profileview']);
          } else {
            alert('Invalid Username or Password');
          }
        });
      } else {
        alert('New Passwords do not match. Please re-enter.');
      }
    }
  }
  }
}
