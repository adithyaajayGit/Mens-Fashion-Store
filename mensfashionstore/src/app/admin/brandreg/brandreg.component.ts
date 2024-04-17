import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-brandreg',
  templateUrl: './brandreg.component.html',
  styleUrls: ['./brandreg.component.scss']
})
export class BrandregComponent {

selectedFiles?: FileList;
currentFile?: any;
fileInfos?:  Observable<any>;
message = '';



constructor(private fb:FormBuilder,private dbservice:DbserviceService,private router:Router) { }

brandregform=this.fb.group({
brand_name:[''],
brand_image:[''],
})

  selectFile(event: any): void {
  this.selectedFiles= event.target.files;
  }


  onSubmit(){
    if (this.selectedFiles) {
    // console.log(this.selectedFiles);
    const file: File | null = this.selectedFiles.item(0);
    if (file) {
    this.currentFile = file;
    this.dbservice.upload(this.currentFile).subscribe(
    (event: any) => {
    this.message = event.body.message; }) ;
    }



    
    this.brandregform.value.brand_image=this.currentFile.name;
    this.dbservice.brandreg(this.brandregform.value) .then((confirmation:any)=>
    {console.log(confirmation);
      if(confirmation.message == "success"){
        alert('Brand Registration Compleated Successfully')
        this.router.navigate(['/adminmaster/brandview'])
        }})
        console.log(this.brandregform.value)
         }
        }    

}

