import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts = [
    {
      title: "Les 10 règles de Bill Gates",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      loveIts: 5,
      created_at: new Date()
    },
    {
      title: "Créer un chatbot en 5 minutes",
      content: "t enim ad minim veniam, quis nostrud exercitation",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Angular vs React",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      loveIts: 1,
      created_at: new Date()
    },

  ] ;
}
