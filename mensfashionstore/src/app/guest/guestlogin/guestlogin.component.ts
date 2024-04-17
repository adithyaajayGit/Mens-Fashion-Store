import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';


@Component({
  selector: 'app-guestlogin',
  templateUrl: './guestlogin.component.html',
  styleUrls: ['./guestlogin.component.scss']
})
export class GuestloginComponent {
  public LoginArray:any[]=[];

  constructor(private fb: FormBuilder,private router:Router,private dbservice:DbserviceService) { }
    LoginFormGroup=this.fb.group({
    username: [''],
    password: ['']

    
})
Onsubmit(){
  // console.log(this.LoginFormGroup.value)
  this.dbservice.login(this.LoginFormGroup.value).then((data:any)=>{
  this.LoginArray=data;
  // console.log(data)
  if(data==""){
  alert ('invalid username and password')
  this.router.navigate(['/Guestmaster/Login'])
  return
  }
  else {
  // console.log(this.LoginArray)
  var role = this.LoginArray[0].role;
  // console.log(role)
  localStorage.setItem("loginid",this.LoginArray[0].login_id);
  localStorage.setItem("username",this.LoginArray[0].login_username)
  var status = this.LoginArray[0].status;
  // console.log(status)
  if(role == "ADMIN")
  {
  this.router.navigate(['/adminmaster/adminhome'])
  }
  else if(role == "customer")
  {
  this.router.navigate(['/customermaster/customerhome'])
  }
  else
  {
  alert('you are not an authorised person..')
  }
  }
  })
  }
  // alert('success')
  ngOnInit(): void {
  }
  }
  
