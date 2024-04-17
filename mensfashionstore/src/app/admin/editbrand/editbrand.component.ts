import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-editbrand',
  templateUrl: './editbrand.component.html',
  styleUrls: ['./editbrand.component.scss']
})
export class EditbrandComponent {

  brand_id: any; // Correct the property name to 'ategoryId'
  public brandArray: any;
  brandeditform!: FormGroup;
  selectedFiles?: FileList;
  currentFile?: any;
  message = '';
  db: any;

  constructor(private fb: FormBuilder, private router :Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
  route.paramMap.subscribe((params: ParamMap) => {
  this.brand_id = params.get('id')
  })
  // this.route.paramMap.subscribe((params: ParamMap) => {
  // this.CourseId = params.get('id'); // Use 'CourseId' here
  // });
  }
  //page load

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    this.imageupload();
    }

    
  ngOnInit(): void {
  this.brandeditform = this.fb.group({
  brand_id: [''],
  brand_name: [''],
  image: [''],
  })
  const id = this.brand_id;
  console.log(id);
  this.dbservice.getbrandbyid({id}).then((data: any) => { 
    this.brandArray = data;
    console.log(this.brandArray);
    this.brandeditform.setValue({
      brand_id: data[0].brand_id, 
      brand_name: data[0].brand_name,
      image: data[0].brand_image,
    });
    });
    
  // this.dbservice.brandview().then((data:any)=>{
  //   this.brandArray=data;
  // })}
  }



  onSubmit(){
    if (!this.brandeditform.value.image) {
      const data = {
      brand_name: this.brandeditform.value.brand_name,
      image:this.brandArray[0].brand_image, 
      }
      this.dbservice.updatebranddata(data).then((confirmation: any) => {
      alert('Brand Details Updated Successfully');
      // this.router.navigate(['/Adminmaster /categoryview])
      })
      }
      else {
      this.dbservice.updatebranddata(this.brandeditform.value).then((confirmation:any) => {
      alert('Brand Details Updated Successfully');
      this.router.navigate(['/adminmaster/brandview'])
      })
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
      this.brandeditform.value.image = this.currentFile.name;
      console.log(this.brandeditform.value);
      }
      }
      }
        
      



      
