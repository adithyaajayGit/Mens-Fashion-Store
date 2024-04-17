import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-editlocation',
  templateUrl: './editlocation.component.html',
  styleUrls: ['./editlocation.component.scss']
})
export class EditlocationComponent {
  location_id: any; // Correct the property name to 'ategoryId'
  public locationArray: any;
  public districtdataarray:any;
  locationeditform!: FormGroup;
  constructor(private fb: FormBuilder, private router :Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
  route.paramMap.subscribe((params: ParamMap) => {
  this.location_id = params.get('id')
  })
  // this.route.paramMap.subscribe((params: ParamMap) => {
  // this.CourseId = params.get('id'); // Use 'CourseId' here
  // });
  }
  //page load
  ngOnInit(): void {
  this.locationeditform = this.fb.group({
  district_id: [''],
  location_id: [''], // Use 'CategoryId' here
  location_name: [''],
  })
  const id = this.location_id;
  console.log(id);
  this.dbservice.getlocationdetails({id}).then((data: any) => { 
    this.locationArray = data;
    console.log(this.locationArray);
    this.locationeditform.setValue({

      location_id: data[0].location_id, 
      district_id: data[0].district_id,
    location_name: data[0].location_name,
    });
    });
    
  this.dbservice.districtview().then((data:any)=>{
    this.locationArray=data;
  })}



    onSubmit()
    {
    this.dbservice.locationedit(this.locationeditform.value)
    .then((confirmation: any) => {
    if (confirmation.message === "Success") 
    {
    alert('Location Details Updated')
    this.router.navigate(['/adminmaster/locationview'])
    }})
    }
    //End of Submit
    }
  






