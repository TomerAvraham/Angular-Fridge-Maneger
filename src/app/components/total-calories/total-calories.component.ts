import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-total-calories',
  templateUrl: './total-calories.component.html',
  styleUrls: ['./total-calories.component.css']
})
export class TotalCaloriesComponent implements OnInit {

  constructor(public data: HeroService) { }

  ngOnInit(): void {
  }

}
