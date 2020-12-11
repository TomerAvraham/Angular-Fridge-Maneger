import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
 

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {

  constructor(public data: HeroService) { }

  ngOnInit(): void {
  }

}
