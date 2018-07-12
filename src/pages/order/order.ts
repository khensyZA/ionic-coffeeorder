import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
Coffee=15;
WhippedCream=6;
ChocolateSyrup=7;
MilkFoam=5;
NoTopping=0;
Total=0;
User:string;

quantity=0;

Cream=false;
Syrup=false;
Foam=false;
Topping=false;




  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.User=navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  order(value:number):void{
    this.quantity+=value;
  }

  clear(value:number):void{
  this.quantity=0;
  this.Total=0;
}

  submit():number{

  if(this.Cream && this.Syrup && this.Foam){
   this.Total=(this.Coffee+this.WhippedCream+this.ChocolateSyrup+this.MilkFoam)* this.quantity;
  }

  else if( this.Syrup && this.Foam){
  this.Total=(this.Coffee+this.ChocolateSyrup+this.MilkFoam)* this.quantity;
  }

  else if(this.Cream && this.Syrup ){
  this.Total=(this.Coffee+this.WhippedCream+this.ChocolateSyrup)* this.quantity;
  }

  else if(this.Cream && this.Foam){
  this.Total=(this.Coffee+this.WhippedCream +this.MilkFoam)* this.quantity;
  }
       
  else if(this.Syrup){
  this.Total=(this.Coffee+this.ChocolateSyrup)* this.quantity;
  }
  else if(this.Foam){
  this.Total=(this.Coffee+this.MilkFoam)* this.quantity;
  }
  else if(this.Cream){
    this.Total=(this.Coffee+this.WhippedCream)* this.quantity;
    }

  if(this.Topping ){
  this.Total=(this.Coffee+this.NoTopping)*this.quantity
   }

  return this.Total;
  }

}
