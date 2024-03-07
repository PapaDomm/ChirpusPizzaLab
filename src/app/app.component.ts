import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './models/menu-item';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChirpusPizza';

  total:number = 0;

  menu: MenuItem[] = [
    {name:"Spinach Dip", category:"Appetizer", price: 4.99, vegetarian:true, soldOut:false},
    {name:"T-Bone", category:"Dinner", price: 19.99, vegetarian:false, soldOut:false},
    {name:"Baked Potatoe", category:"Side", price: 2.99, vegetarian:true, soldOut:false},
    {name:"Waygu", category:"Dinner", price: 39.99, vegetarian:false, soldOut:true},
    {name:"Asparagus", category:"Side", price: 1.99, vegetarian:true, soldOut:false},
    {name:"Onion Blossom", category:"Appetizer", price: 8.99, vegetarian:true, soldOut:false},
    {name:"Fish and Chips", category:"Dinner", price: 12.99, vegetarian:false, soldOut:false}
  ];

  addToTotal(price: number):void{
    this.total += price;
  }

  checkOut():void{
    this.total = 0;
  }
}
