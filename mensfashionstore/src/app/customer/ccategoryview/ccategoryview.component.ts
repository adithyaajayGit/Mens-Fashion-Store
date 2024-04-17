import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-ccategoryview',
  templateUrl: './ccategoryview.component.html',
  styleUrls: ['./ccategoryview.component.scss']
})
export class CcategoryviewComponent {
  public categorydata:any[]=[];
  
  
  
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }


   


  ngOnInit(): void 
   {




    this.db.categoryview().then((data:any)=>{
      this.categorydata=data;
  })
  
 
  // console.log(data);
  };
 
  // console.log(data);
};
