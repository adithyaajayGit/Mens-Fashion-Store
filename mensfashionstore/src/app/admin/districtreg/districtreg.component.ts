import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-districtreg',
  templateUrl: './districtreg.component.html',
  styleUrls: ['./districtreg.component.scss']
})
export class DistrictregComponent {

    constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService ) {}

      ngOnInit(): void {


      }

      districtregform=this.fb.group({
        district_name:['']
      })

      Onsubmit()
    {
      console.log(this.districtregform.value)
      this.dbservice.districtreg(this.districtregform.value).then((confirmation:any)=>{
        if(confirmation.message == "Success")
        {
        alert('Registered Successfully')
        this.router.navigate(['adminmaster/districtview'])
        }
        else
          {
        alert('Data do not insert,please check')
          }

    })
    }
  }
