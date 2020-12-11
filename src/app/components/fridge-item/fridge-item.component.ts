import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import ItemInterFace from '../../interfaces/item.interface';

@Component({
  selector: 'app-fridge-item',
  templateUrl: './fridge-item.component.html',
  styleUrls: ['./fridge-item.component.css'],
})
export class FridgeItemComponent implements OnInit {
  @Input() item: ItemInterFace;
  @Input() index: number;

  constructor(public data: HeroService) {}

  ngOnInit(): void {}
}
