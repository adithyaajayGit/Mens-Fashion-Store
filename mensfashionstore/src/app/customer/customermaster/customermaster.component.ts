import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-customermaster',
  templateUrl: './customermaster.component.html',
  styleUrls: ['./customermaster.component.scss']
})
export class CustomermasterComponent {

  public total_amount: any;
  login_id: any;


  constructor(private router: Router) {
    this.login_id = localStorage.getItem('loginid');
  }






  logout() {
    localStorage.removeItem('loginid');
    console.log(this.login_id);
    this.router.navigate(['guestmaster/guestlogin']);
  }



}
