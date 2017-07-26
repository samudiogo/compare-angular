import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  heading= "Soaring to the new heights";
  subheading= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere nec sem quis congue. Morbi at rutrum enim.";
  constructor() { }

  ngOnInit() {
  }

}
