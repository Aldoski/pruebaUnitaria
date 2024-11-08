import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// Exporto OnInit
export class HomePage implements OnInit{

  constructor() {}
// 2 Creo el componente con ionic g en consola
// 3 Hago nacer el componente
  ngOnInit(): void{

  // 4 Le creo una funcion al componente
    this.suma(1,1);
  }
  // 5 Creo la variable
  suma (a:number, b:number) :number{
    console.log(a+b);
    return a+b;
  }

}
