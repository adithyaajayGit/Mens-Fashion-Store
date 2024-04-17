import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-categoryreg',
  templateUrl: './categoryreg.component.html',
  styleUrls: ['./categoryreg.component.scss']
})
export class CategoryregComponent {


selectedFiles?: FileList;
currentFile?: any;
fileInfos?:  Observable<any>;
message = '';

  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService ) {}

  ngOnInit(): void {


  }

  categoryregform=this.fb.group({
    category_name:[''],
    category_image:[''],
  })

  selectFile(event: any): void {
    this.selectedFiles= event.target.files;
    }

  Onsubmit()
{
  if (this.selectedFiles) {
    // console.log(this.selectedFiles);
    const file: File | null = this.selectedFiles.item(0);
    if (file) {
    this.currentFile = file;
    this.dbservice.upload(this.currentFile).subscribe(
    (event: any) => {
    this.message = event.body.message; }) ;
    }




  this.categoryregform.value.category_image=this.currentFile.name;
  console.log(this.categoryregform.value)
  this.dbservice.categoryreg(this.categoryregform.value).then((confirmation:any)=>{
    if(confirmation.message == "Success")
    {
    alert('Category Registered Successfully')
    this.router.navigate(['adminmaster/categoryview'])
    }
    else
      {
    alert('Data do not insert,please check')
      }

})
}

}
}
