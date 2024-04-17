import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-districtview',
  templateUrl: './districtview.component.html',
  styleUrls: ['./districtview.component.scss']
})
export class DistrictviewComponent {

  public districtdata:any[]=[];
  
  
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }


  ngOnInit(): void 
   {
    this.db.districtview().then((data:any)=>{
      this.districtdata=data.sort((a, b) => a.district_name.localeCompare(b.district_name));

  })
 
  // console.log(data);
  };

  Deletedistrictdata(district_id: string) {
    // Show a confirmation dialog to the user
    if (confirm("Are you sure you want to delete this district?")) {
      // If the user confirms, proceed with deletion
      this.db.Deletedistrictdata({ district_id }).then((confirmation: any) => {
        if (confirmation.message === "Success") {
          alert('Successfully Deleted');
          // Optionally, you can reload the district data after successful deletion
          
        }
      });
      window.location.reload()
    } else {
      // If the user cancels, do not delete the data
      alert('Deletion Canceled');
    }
  }
}

  
  
