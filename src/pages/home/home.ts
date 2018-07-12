import { OrderPage } from './../order/order';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NgModel } from '@angular/forms';
import { getScrollData } from 'ionic-angular/components/input/input';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ,private alertCtrl: AlertController  ) {

  }
  User:string;

    getScrollData(username){
    this.User=username;
    this.navCtrl.push(OrderPage,{data:this.User})
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'WELCOME',
      inputs: [
        {
          name: 'username', 
          placeholder: 'Enter your name'
        },
       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        
        {
          text: 'Enter',
          role: 'Enter',
          handler: data => {
          this.getScrollData(data.username);
          }
        },
      ]
    });
    alert.present();
  }


 
 
      


}