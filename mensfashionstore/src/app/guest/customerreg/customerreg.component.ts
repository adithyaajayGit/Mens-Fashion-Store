import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-customerreg',
  templateUrl: './customerreg.component.html',
  styleUrls: ['./customerreg.component.scss']
})
export class CustomerregComponent {

  public districtdata: any[] = [];
  public locationdata: any[] = [];
  customerregform!: FormGroup;
  validationstatus=null;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dbservice: DbserviceService
  ) {}

  ngOnInit(): void {
    this.customerregform = this.fb.group({
      customer_name:['',[Validators.required,Validators.pattern(/^[A-Z][a-zA-z\s\w]*$/)]],
    customer_email:['',[Validators.required,Validators.email]],
    customer_contactno:['',[Validators.required,Validators.pattern('^[0-9]{9}$')]],
    login_username:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    login_password:['', [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],  
    district_id:['',[Validators.required,]], 
    location_id:[''],
    customer_pincode:['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
    login_id: ['']
    });

    this.dbservice.districtview().then((data: any) => {
      this.districtdata = data.sort((a, b) => a.district_name.localeCompare(b.district_name));

    });
    this.customerregform.get('district_id')?.valueChanges.subscribe((district_id) => {
      this.dbservice.locationviews({district_id}).then((data: any) => {
        this.locationdata = data.sort((a, b) => a.location_name.localeCompare(b.location_name));
        console.log(this.locationdata)
      });
    });
  }

  Onsubmit()
{

  if(this.customerregform.invalid){
    this.validationstatus ="";
    alert('Please Enter data')

    return
  } 
else{
  this.validationstatus =null;
  console.log(this.customerregform.value);
}
  console.log(this.customerregform.value)
  this.dbservice.customerreg(this.customerregform.value).then((confirmation:any)=>{ 
    if(confirmation.message == "success")
    { 
      // localStorage.setItem('customer_name', this.customerregform.get('customer_name')?.value);
      alert('Registered Successfully') 
      this.router.navigate(['guestmaster/guestlogin'])
   } 
   else if (confirmation.message === "Username already exists") 
   {
    // Username already exists, show an error message
    alert('Username already exists');
   }
   else 
   { 
    alert('Data do not insert,please check')
   }

}


)}
  }
















