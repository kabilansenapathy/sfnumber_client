import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SfnoData } from '../../providers/sfno-data';
import { VillagePage } from "../village-page/village-page";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [SfnoData],
})
export class ListPage {
    loading: any;
  
  selectedItem: any;
  icons: string[];
  // items: Array<{title: string, note: string, icon: string}>;
   public items:Items[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private sfnoData: SfnoData, public loadingCtrl: LoadingController) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');
    console.log("list page constructor");

  }
  ionViewDidLoad(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait..',
      spinner: 'crescent'
    })

    this.loading.present()
    
      this.sfnoData.getTaluk().subscribe(items=>{
      this.items = items;
      this.hideLoading();
    })
    
  }

  getItems(ev: any) {
    // Reset items back to all of the items
   // this.initItems();
    this.sfnoData.getTaluk().subscribe(items=>{
      this.items = items;
    })
    

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.taluk.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })

    }
  }
  itemClick(passedTaluk: string) {
    console.log("list.ts From item click"+passedTaluk);
    this.navCtrl.push(VillagePage, {passedTaluk});
  }
  private hideLoading(){
    this.loading.dismiss();
  }

}

interface Items{
 
  taluk: string
}
