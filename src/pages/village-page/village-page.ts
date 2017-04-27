import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SfnoData } from '../../providers/sfno-data';
import { TypePage } from "../type-page/type-page";

/**
 * Generated class for the VillagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-village-page',
  templateUrl: 'village-page.html',
})
export class VillagePage {
    loading: any;
    passedTaluk: any;
    items: Items[];
    village: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sfnoData: SfnoData, private loadingCtrl: LoadingController) {
    this.passedTaluk = navParams.get('passedTaluk');
    //this.village = this.selectedItem.village;
    console.log(this.passedTaluk);

  }
  ionViewDidLoad(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait..',
      spinner: 'crescent'
    })

    this.loading.present()
    
      this.sfnoData.getVillage(this.passedTaluk).subscribe(items=>{
      this.items = items;
      this.hideLoading();
    })
    
  }

    getItems(ev: any) {
    // Reset items back to all of the items
   // this.initItems();
    this.sfnoData.getVillage(this.passedTaluk).subscribe(items=>{
      this.items = items;
    })
    

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.village.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })

    }
  }
   private hideLoading(){
    this.loading.dismiss();
  }

  itemClick(selectedVillage, passedTaluk){
    
    console.log("pushing type page with"+ selectedVillage + "taluk" + passedTaluk)
    this.navCtrl.push(TypePage,{selectedVillage, passedTaluk});
  }

}

interface Items{
  id: number,
  taluk: string,
  ddp: number,
  village: string,
  village_no: number,
  type: string
}
