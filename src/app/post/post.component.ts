import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts = [
    {
      title: "Ac ne quis a ",
      content: " umquam dediti fuimus. Etenim omnes artes, quae ad humanitatem pertinent, habent quoddam commune vinculum, et quasi cognatione quadam inter se continentur.",
      loveIts: 9,
      created_at: new Date()
    },
    {
      title: "umquam dediti",
      content: " umquam dediti fuimus. Etenim omnes artes, quae ad humanitatem pertinent, habent quoddam commune vinculum, et quasi cognatione quadam inter se continentur.",
      loveIts: -7,
      created_at: new Date()
    },
    {
      title: "omnes artes",
      content: " umquam dediti fuimus. Etenim omnes artes, quae ad humanitatem pertinent, habent quoddam commune vinculum, et quasi cognatione quadam inter se continentur.",
      loveIts: 0,
      created_at: new Date()
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  getcolor(){
    return 'grey';
  }
}
