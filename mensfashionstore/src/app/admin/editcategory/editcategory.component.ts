import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.scss']
})
export class EditcategoryComponent {
  category_id: any; // Correct the property name to 'ategoryId'
  public categoryArray: any;
  categoryeditform!: FormGroup;
  selectedFiles?: FileList;
  currentFile?: any;
  message = '';
  db: any;





  constructor(private fb: FormBuilder, private router :Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
  route.paramMap.subscribe((params: ParamMap) => {
  this.category_id = params.get('id')
  })

  

  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    this.imageupload();
    }


  //page load
  ngOnInit(): void {
  this.categoryeditform = this.fb.group({
  category_id: [''],
  category_name: [''],
  category_image: [''],

  })
  const id = this.category_id;
  console.log(id);
  this.dbservice.getcategorydetails({id}).then((data: any) => { 
    this.categoryArray = data;
    console.log(this.categoryArray);
    this.categoryeditform.setValue({

      category_id: data[0].category_id, 
    category_name: data[0].category_name,
    category_image: data[0].category_image,

    });
    });
  }
  



    Onsubmit()
    {
      if (!this.categoryeditform.value.category_image) {
        const data = {
        category_name: this.categoryeditform.value.category_name,
        category_image:this.categoryArray[0].category_image, 
        }
        this.dbservice.categoryedit(data).then((confirmation: any) => {
          alert('Category Details Updated Successfully');
          // this.router.navigate(['/Adminmaster /categoryview])
          })
          }
          else{
    this.dbservice.categoryedit(this.categoryeditform.value)
    .then((confirmation: any) => {
    if (confirmation.message === "Success") 
    {
    alert('Category Details Updated')
    this.router.navigate(['/adminmaster/categoryview'])
    }})
    }
  }



  imageupload() {
    if (this.selectedFiles) {
    const file: File | null = this.selectedFiles.item(0);
    if (file) {
    this.currentFile = file;
    console.log(this.currentFile)
    this.dbservice.upload(this.currentFile).subscribe(
    (event: any) => {
    this.message = event.body.message;
    });
    }
    this.categoryeditform.value.category_image = this.currentFile.name;
    console.log(this.categoryeditform.value);
    }
    }
    //End of Submit
    }







