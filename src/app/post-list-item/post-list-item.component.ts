import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() postLoveIts: number;


  constructor() { }

  ngOnInit() {
  }

  loveIt() {
    this.postLoveIts +=1;
  }

  doNotLoveIt() {
    this.postLoveIts -= 1;
  }

}
