import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-locationview',
  templateUrl: './locationview.component.html',
  styleUrls: ['./locationview.component.scss']
})
export class LocationviewComponent {

public districtdata:any[]=[];
public locationdata:any[]=[];
locationviewform!:FormGroup;
constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }


ngOnInit(): void {
this.locationviewform=this.fb.group({
district_id:[''],
})
this.db.districtview().then((data:any)=>{
this.districtdata=data;
// console.log(data);
});
// this.db.locationview().then((data:any)=>{this. locationdata=data;
// console.log(data)
// })
}
onChange() {
const id=this.locationviewform.value.district_id;
console.log(id)
this.db.getdistrictbyid({id}).then((data:any) =>{
this.locationdata = data.sort((a, b) => a.location_name.localeCompare(b.location_name));

console.log(this.locationdata)
});
}

Deletelocationdata(location_id: string) {
  // Show a confirmation dialog to the user
  if (confirm("Are you sure you want to delete this location?")) {
    // If the user confirms, proceed with deletion
    this.db.Deletelocationdata({ location_id }).then((confirmation: any) => {
      if (confirmation.message === "Success") {
        alert('Successfully Deleted');
        // Optionally, you can reload the district data after successful deletion
        // this.db.districtdata();
      }
    });
    window.location.reload()
  } else {
    // If the user cancels, do not delete the data
    alert('Deletion Canceled');
  }
}
}





