import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// Exporto OnInit
export class HomePage implements OnInit{

  // 9 si quiero tomar otra variable
  titulo:string = 'Home Page.'



  constructor() {}
// 2 Creo el componente con ionic g en consola
// 3 Hago nacer el componente
  ngOnInit(): void{

  // 4 Le creo una funcion al componente
    this.suma(-31,1);
    this.mult(1,1);
    this.div (5,2);
    this.resta(1,4);
  }


  // 5 Creo la funcion operacional
  suma (a: number, b: number): number{
    if (a < 0 || b < 0){
    throw new Error('Mal')
  }
    console.log(a+b);
    return a+b;
  }
  
    mult (a: number, b: number): number{
    if (a < 0 || b < 0){
    throw new Error('Mal')
  }
    console.log(a*b);
    return a*b;
  }

  div (a: number, b: number): number{
    if (a < 0 || b < 0){
    throw new Error('Mal')
  }
    console.log(a/b);
    return a*b;
  }

  resta (a: number, b: number): number{
    if (a < 0 || b < 0){
    throw new Error('Mal')
  }
    console.log(a-b);
    return a*b;
  }



// 7 hacer importacion de jasmine para el testeo "npm run test"
// 8 agregar "--code-coverage" al script de "test" en el package.json

}
