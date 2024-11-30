import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  isDisabled = false;
  
  Company = {
    name: 'Angular',
    address: '1600 Amphitheatre Parkway, Mountain View, CA 94043',
    url: 'https://angular.io'
  };
  
  constructor() {};
}
