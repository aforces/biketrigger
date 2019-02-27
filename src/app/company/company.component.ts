import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  public imagesUrl;
  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
       'https://media.zigcdn.com/media/model/2018/Nov/perak-full-right-side-view_320x160.jpg',
       'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201207/bajaj-pulsar-660_071912051131.jpg',
       'https://i.pinimg.com/originals/73/31/0d/73310d2e64b634984a36d1bb0f48528c.jpg',
       'https://bikepricesinnepal.com/wp-content/uploads/2018/06/KTM-DUKE-200-Price-in-Nepal-2-1-678x381.jpg',
       'https://www.motorbeam.com/wp-content/uploads/Yamaha-R15-V3-Features-1.jpg',
       'https://s3images.coroflot.com/user_files/individual_files/large_638633_ldnhah8tqgiljsgqtlcp6irhb.jpg',
       'https://media.zigcdn.com/media/model/2017/Apr/urban-right_600x300.jpg',
      'assets/bike.png'
     
      ];
  }

}
