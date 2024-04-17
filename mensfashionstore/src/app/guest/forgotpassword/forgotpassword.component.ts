import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {

  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService ) {}

  ngOnInit(): void {


  }

  forgotFormGroup=this.fb.group({
    username:['']
  })

  Onsubmit()
{
  console.log(this.forgotFormGroup.value)
  this.dbservice.forgot(this.forgotFormGroup.value).then((confirmation:any)=>{
    if(confirmation.message == "Success")
    {
    alert('new password has been send to your email')
    this.router.navigate(['guestmaster/guestlogin'])
    }
    else
      {
    alert('Data do not insert,please check')
      }

})
}
     


}
