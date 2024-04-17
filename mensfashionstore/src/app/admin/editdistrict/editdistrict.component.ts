import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-editdistrict',
  templateUrl: './editdistrict.component.html',
  styleUrls: ['./editdistrict.component.scss']
})
export class EditdistrictComponent {
    
  district_id: any; // Correct the property name to 'ategoryId'
  public districtArray: any;
  districteditform!: FormGroup;
  constructor(private fb: FormBuilder, private router :Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
  route.paramMap.subscribe((params: ParamMap) => {
  this.district_id = params.get('id')
  })

  
  // this.route.paramMap.subscribe((params: ParamMap) => {
  // this.CourseId = params.get('id'); // Use 'CourseId' here
  // });
  }
  //page load
  ngOnInit(): void {
  this.districteditform = this.fb.group({
  district_id: [''],
  district_name: [''],
  })
  const id = this.district_id;
  console.log(id);
  this.dbservice.getdistrictdetails({id}).then((data: any) => { 
    this.districtArray = data;
    console.log(this.districtArray);
    this.districteditform.setValue({

      district_id: data[0].district_id, 
    district_name: data[0].district_name,
    });
    });
  }
  



    Onsubmit()
    {
    this.dbservice.districtedit(this.districteditform.value)
    .then((confirmation: any) => {
    if (confirmation.message === "Success") 
    {
    alert('District Details Updated')
    this.router.navigate(['/adminmaster/districtview'])
    }})
    }
    //End of Submit


}
