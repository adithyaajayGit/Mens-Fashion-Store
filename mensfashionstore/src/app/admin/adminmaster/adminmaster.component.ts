import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmaster',
  templateUrl: './adminmaster.component.html',
  styleUrls: ['./adminmaster.component.scss']
})
export class AdminmasterComponent {

  // public total_amount: any;
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