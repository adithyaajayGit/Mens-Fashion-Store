import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-cdelivery',
  templateUrl: './cdelivery.component.html',
  styleUrls: ['./cdelivery.component.scss']
})
export class CdeliveryComponent {



  public districtdata: any[] = [];
  public locationdata: any[] = [];
  loginid: any;
  master_id:any;
  deliveryform!: FormGroup;
  validationstatus=null;


 constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dbservice: DbserviceService) {

  }
  

  ngOnInit(): void {
    this.deliveryform = this.fb.group({
    loginid:this.loginid =localStorage.getItem('loginid'),
    name:['',[Validators.required,]],
    house_name:['',[Validators.required,]], 
    district_id:['',[Validators.required,]], 
    location_id:['',[Validators.required,]],
    pincode:['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
    landmark:['',[Validators.required,]],
    contactno:['',[Validators.required,Validators.pattern('^[0-9]{9}$')]],
  });

    this.dbservice.districtview().then((data: any) => {
      this.districtdata = data;
    });
    this.deliveryform.get('district_id')?.valueChanges.subscribe((district_id) => {
      this.dbservice.locationviews({district_id}).then((data: any) => {
        this.locationdata = data;
        console.log(this.locationdata)
      });
    });
  }


  Onsubmit(){
    if(this.deliveryform.invalid){
      this.validationstatus ="";
      alert('Please Enter data')
      this.router.navigate(['/customermaster/delivery']);
  
      return
    } 
  else{
    this.validationstatus =null;
    console.log(this.deliveryform.value);
    
  }





    console.log(this.deliveryform.value)
    this.dbservice.delivery(this.deliveryform.value).then((confirmation:  any) => {
    if (confirmation.message == "success") {
    alert('proceed to payment')
    this.router.navigate(['/customermaster/payment'])
    }
    else {
    alert('Data not inserted,Please check your data')
    }
    })

}

}
