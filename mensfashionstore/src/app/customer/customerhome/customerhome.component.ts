import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.scss']
})
export class CustomerhomeComponent {
  public categorydata:any;
  public branddata:any;

  constructor(private fb: FormBuilder, private router :Router, private route: ActivatedRoute, private dbservice: DbserviceService) {}

  ngOnInit(): void 
  {




   this.dbservice.categoryview().then((data:any)=>{
     this.categorydata=data;
  
 })
 this.dbservice.brandview().then((data:any)=>{
  this.branddata=data;

})
 

 // console.log(data);
 };

}
