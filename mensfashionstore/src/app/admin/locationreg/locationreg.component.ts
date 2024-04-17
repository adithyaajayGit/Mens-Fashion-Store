import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-locationreg',
  templateUrl: './locationreg.component.html',
  styleUrls: ['./locationreg.component.scss']
})
export class LocationregComponent {
  public districtdata:any[]=[];
  constructor(private fb:FormBuilder,private router:Router,private db:DbserviceService) { }

  locationregform=this.fb.group({
    district_id:[''], 
  location_name:['']

})
ngOnInit(): void { 
this.db.districtview().then((data:any)=>{
this.districtdata=data;
})
}


Onsubmit()
{
  console.log(this.locationregform.value)
  this.db.locationreg(this.locationregform.value).then((confirmation:any)=>{ 
    if(confirmation.message == "Success")
    { 
      alert('Registered Successfully') 
      this.router.navigate(['adminmaster/locationview'])
   } 
   else 
   { 
    alert('Data do not insert,please check')
   }

}


)}
}

