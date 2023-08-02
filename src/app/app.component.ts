import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  ngOnChanges(): void {
    console.log(this.mostLikedVedio)
  }
  title = 'myAcademy-develop';
  videos= [
    {title: 'My video 1', share: 415, likes: 457, dislikes: 12, thumbnail: '../assets/image1.jpg'},
    {title: 'My video 2', share: 215, likes: 325, dislikes: 12, thumbnail: '../assets/image2.jpg'},
    {title: 'My video 3', share: 513, likes: 505, dislikes: 12, thumbnail: '../assets/image3.jpg'}
  ]

  mostLikedVedio = this.getMostLikedVideo();
  
  getMostLikedVideo(){
    let videosCopy=[...this.videos]
    // console.log(videosCopy.sort((current,next)=> next.likes - current.likes)[0].likes)
    // console.log(videosCopy[2].likes)
    return videosCopy.sort((current,next)=> next.likes - current.likes)[0];
     
  }
}
