import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import {AngularFireAuth } from "angularfire2/auth";
import { ToastController } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;


  constructor(private angauth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public toast: ToastController) {
  }

  async login(user: User){
    try{
      //reference to the AngularFireAuth above
      const result = await this.angauth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result){
        this.toast.create({duration: 3000, message: "Logged in successfully!"}).present();
        console.log(result);
        this.navCtrl.push("UserPage");
      }
      
    }
    catch (e){
      console.error(e);
    }
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }
}
