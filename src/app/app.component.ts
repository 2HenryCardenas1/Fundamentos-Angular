import { Component } from '@angular/core';
import { Products } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FundamentosAngular';
  name = 'Juan';
  age = 30;
  img='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'

  btnDisabled = true;

  register = {
    name : '',
    email : '',
    password : '',
  }

  person ={
    name : 'Junior',
    age : 30,
    img :'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  }

  names : string[] = ['Juan', 'Pedro', 'Luis', 'Maria', 'Jose'];
  newName : string = '';

  products : Products[] = [
    {
      name: 'The best toy',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicycle like new',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Albums collection',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'My books',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'House for a dog',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Goggles',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  widthImg = 100;

  box = {
    width : 100,
    height : 100,
    background : 'red'
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  changeAge(){
    this.person.age += 1;
  }

  onScroll(event :Event){
    const scrollElement = event.target as HTMLElement;
    console.log(scrollElement.scrollTop);

  }

  changeName( event : Event){
    const inputElement = event.target as HTMLInputElement;
    this.person.name = inputElement.value;
  }

  addName(){
      this.names.push(this.newName)
      this.newName = '';
  }

  deleteName(indexName : number){
    this.names.splice(indexName, 1);

  }

  onRegister(){
    console.log(this.register);
  }

}
