import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.component.html',
  styleUrls: ['./categoryview.component.scss']
})
export class CategoryviewComponent {
  public categorydata:any[]=[];
  
  
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }


  ngOnInit(): void 
   {
    this.db.categoryview().then((data:any)=>{
      this.categorydata=data;
  })
 
  // console.log(data);
  };

  Deletecategorydata(category_id: string) {
    // Show a confirmation dialog to the user
    if (confirm("Are you sure you want to delete this category?")) {
      // If the user confirms, proceed with deletion
      this.db.Deletecategorydata({ category_id }).then((confirmation: any) => {
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
