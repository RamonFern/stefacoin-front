import { Usuario } from 'src/app/models/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html',
  styleUrls: ['./nova-conta.component.css']
})
export class NovaContaComponent implements OnInit {

  
  usuario: Usuario
  
  constructor() { }

  ngOnInit(): void {
 
  }


}
