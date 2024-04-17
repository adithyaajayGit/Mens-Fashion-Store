import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent {

  customer_id: any; // Correct the property name to 'ategoryId'
  public profileArray: any;
  public districtdataarray: any;
  public locationdataarray: any;
  profileform!: FormGroup;
  validationstatus = null;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.customer_id = params.get('id')
    })
  }

  ngOnInit(): void {

    this.profileform = this.fb.group({
      district_id: [''],
      location_id: [''],
      customer_id: [this.customer_id],
      customer_name: ['', [Validators.required, Validators.pattern(/^[A-Z][a-zA-z\s\w]*$/)]],
      customer_email: ['', [Validators.required, Validators.email]],
      customer_contactno: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      customer_pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]

    })
    this.dbservice.districtview().then((data: any) => {
      this.districtdataarray = data.sort((a, b) => a.district_name.localeCompare(b.district_name));


      this.profileform.get('district_id')?.valueChanges.subscribe((district_id) => {
        this.dbservice.locationviews({ district_id }).then((data: any) => {
          this.locationdataarray = data.sort((a, b) => a.location_name.localeCompare(b.location_name));
          console.log(this.locationdataarray)
        });
      });
    })

    const id = this.customer_id;
    console.log(id);
    this.dbservice.getcustomerdetails({ id }).then((data: any) => {
      this.profileArray = data;
      console.log(this.profileArray);
      this.profileform.setValue({

        customer_id: data[0].customer_id,
        district_id: data[0].district_id,
        location_id: data[0].location_id,
        customer_name: data[0].customer_name,
        customer_email: data[0].customer_email,
        customer_contactno: data[0].customer_contactno,
        customer_pincode: data[0].customer_pincode,

      });
    });

  }





  Onsubmit() {

    if (this.profileform.invalid) {
      this.validationstatus = "";
      alert('Please Enter data')

      return
    }
    else {
      this.validationstatus = null;
      console.log(this.profileform.value);
    }




    {
      this.dbservice.profileedit(this.profileform.value)
        .then((confirmation: any) => {
          if (confirmation.message === "Success") {
            alert('Profile Updated')
            this.router.navigate(['/customermaster/profileview'])
          }
        })
    }


    //End of Submit

  }
}
