import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaLService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  persona: Persona;
  constructor(private personaLService: PersonaLService) { }

  ngOnInit(): void {
    this.persona = new Persona;
  }

  add() {
    alert('se agragó una nueva persona' + JSON.stringify(this.persona));
    this.personaLService.post(this.persona);
  }
}
