import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-guesthome',
  templateUrl: './guesthome.component.html',
  styleUrls: ['./guesthome.component.scss']
})
export class GuesthomeComponent {
  public categorydata:any[]=[];
  
  
  
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }


   


  ngOnInit(): void 
   {




    this.db.categoryview().then((data:any)=>{
      this.categorydata=data;
  })
  
 
  // console.log(data);
  };
 
}
