import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-brandview',
  templateUrl: './brandview.component.html',
  styleUrls: ['./brandview.component.scss']
})
export class BrandviewComponent {
  public branddata:any[]=[];
  
  
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }


  ngOnInit(): void 
   {
    this.db.brandview().then((data:any)=>{
      this.branddata=data.sort((a, b) => a.brand_name.localeCompare(b.brand_name));

  })
 
  // console.log(data);
  };


  Deletebranddata(brand_id: string) {
    // Show a confirmation dialog to the user
    if (confirm("Are you sure you want to delete this brand?")) {
      // If the user confirms, proceed with deletion
      this.db.Deletebranddata({ brand_id }).then((confirmation: any) => {
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
