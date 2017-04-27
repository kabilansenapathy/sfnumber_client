import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SfnoData} from '../../providers/sfno-data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SfnoData]
})
export class HomePage {
    public posts:Post[];

  constructor(public navCtrl: NavController, private sfnoData: SfnoData) {

 
  }

   ionViewDidLoad(){
   // this.sfnoData.getTaluk().subscribe(posts => {
        
        
        
      //  this.posts = posts;
       //  console.log(posts);
        // posts.forEach(post => {
        //   console.log(post.id);
        //   return post;
      //  });
    
    
    // this.posts.forEach(posts => {
    //   console.log("hello");
    // });
  }

  
}
interface Post{
    id: any;
  }