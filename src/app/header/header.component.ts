import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombre = "Mauricio"

  constructor() { 
    console.log("Inicialización del componente")
  }

  ngOnInit(): void {
    console.log("Componente creado con éxito")
  }

  cambiarNombre(){
    this.nombre = "Jose"
  }

}
