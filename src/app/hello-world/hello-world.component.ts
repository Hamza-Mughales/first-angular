import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hello-world',
  imports: [CommonModule],
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

  listOfFruits = [
    'Apple',
    'Banana',
    'Cherry',
    'Durian',
    'Eggplant',
    'Fig',
  ];

  viewMode = '';

  
  constructor() {};
}
