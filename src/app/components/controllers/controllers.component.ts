import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css'],
})
export class ControllersComponent implements OnInit {
  constructor(public data: HeroService) {}

  ngOnInit(): void {}
}
