import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
editPost(_t28: any) {
throw new Error('Method not implemented.');
}
deletPost(arg0: number) {
throw new Error('Method not implemented.');
}
newPost: any;


  constructor(public authService:AuthService) {}

  login():void {

    //  Foydalanuvchini kirishi
    const username = prompt('Enter system name');
    const password = prompt('Enter system password');

    if(username && password) {
      if(this.authService.login(username ,password)){
        // Foydalanuvchi kirdi !
        console.log("User entered !");
        
      }

      else {
        console.log("Error !");
        
      }

    }

  }


  logout():void{
    // Foydalanuvchini chiqishi
    this.authService.logout();
    console.log("User sign out !");
    

  }


}
