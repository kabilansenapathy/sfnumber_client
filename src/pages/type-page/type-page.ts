import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SfnoData } from '../../providers/sfno-data';
import { FormsModule }   from '@angular/forms';


/**
 * Generated class for the TypePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-type-page',
  templateUrl: 'type-page.html',
})
export class TypePage {
  selectedVillage: any;
  passedTaluk:any;
  sfForm: any;
  sfno: any;
  name: any;
  type: any;
  items: Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public sfnoData: SfnoData) {

    this.name = 271;
    this.items = [];
    this.type = [];
    this.selectedVillage = navParams.get('selectedVillage');
    this.passedTaluk = navParams.get('passedTaluk');
    console.log("type page construct" + this.selectedVillage + "taluk:" + this.passedTaluk);
  }

  ionViewDidLoad(selectedVillage) {
    console.log('ionViewDidLoad TypePage');
  }

  buttonClick(sfno, selectedVillage, passedTaluk){
    console.log("sf no is:" + sfno + selectedVillage + passedTaluk);
  //  this.type = this.sfnoData.getType(sfno, passedTaluk, selectedVillage).subscribe(items => {
  //   this.items = items;
    
  //   });

  this.sfnoData.getType(sfno, passedTaluk, selectedVillage).subscribe(type=>{
      this.type = type;
      console.log(this.type);
    });
    


  }


}

interface Item{
  id: number,
  taluk: string,
  ddp: number,
  village: string,
  village_no: number,
  type: string
}
