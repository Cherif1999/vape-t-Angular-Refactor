import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user : any=null;
  public  isLoggedIn:any=false;
  public name = " <h1 >Katkoutou</h1>";
  public message:string = "";


  public isLoggedIn$: BehaviorSubject<boolean>;


  //constructor(private router: Router,) { }

  constructor(private router: Router,) {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
    
  }

  ngOnInit(){
  }


  login() {
    // logic
    localStorage.setItem('loggedIn', 'true');
    this.isLoggedIn$.next(true);

      // @ts-ignore
      this.user = JSON.parse(localStorage.getItem('userData'));
      console.log(this.user);
  }

  logout() {
    // logic
    localStorage.setItem('loggedIn', 'false');
    this.isLoggedIn$.next(false);

    localStorage.removeItem('userData')
  }
  
  // logOut(){
  //   localStorage.removeItem('userData');
  //   alert("You are logged out");
  //   this.isLoggedIn = false;
  //   console.log(this.isLoggedIn, "out");
  //   this.router.navigate(['/login']);
  // }
  
  // login(){
  //   if( this.user){

  //     this.isLoggedIn = true;
  //     console.log(this.isLoggedIn, "In");
  //     // @ts-ignore
  //     this.user = JSON.parse(localStorage.getItem('userData'));
  //     console.log(this.user);
  //   }
  // }

}
