import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})
export class MyordersComponent {
  public orderdata:any[]=[];
  loginid: any;
  orderform!:FormGroup

  
  
  
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }


   


  ngOnInit(): void 
   {

    this.loginid =localStorage.getItem('loginid')
    this.orderform = this.fb.group({
      login_id:localStorage.getItem('loginid')
  


    })


    const loginid=this.loginid;
    this.db.orderview({loginid:this.loginid}).then((data:any)=>{
      this.orderdata=data;

  })
 
  // console.log(data);
};

}