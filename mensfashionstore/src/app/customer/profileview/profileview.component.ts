import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.scss']
})
export class ProfileviewComponent {

  public userdata:any[]=[];
  login_id:any;
  
  
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }


  ngOnInit(): void 
   {
    this.login_id = localStorage.getItem('loginid');
    const id=this.login_id
    this.db.userview({id}).then((data:any)=>{
      this.userdata=data;
  })
 
  // console.log(data);
  };


}
