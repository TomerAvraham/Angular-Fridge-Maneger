import { Injectable } from '@angular/core';
import FoodInterFace from './interfaces/food.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  public nextId = 1;

  constructor() {}

  public totalCalories: number = 0;

  public FoodArray: FoodInterFace[] = [
    { id: 1, name: 'banana', calories: 200 },
    { id: 2, name: 'apple', calories: 300 },
    { id: 3, name: 'milk', calories: 150 },
  ];

  public FridgeArray: FoodInterFace[] = [
    { id: this.nextId, name: 'test', calories: 50 },
  ];

  generateNewId() {
    this.nextId += 1;
    return this.nextId;
  }

  addItemToFridge(index) {
    const food = this.FoodArray[index];
    console.log(food);
    const newFridgeItem = {
      id: this.generateNewId(),
      name: food.name,
      calories: food.calories,
    };
    // console.log(newFridgeItem);
    console.log(this.FoodArray)
    this.FridgeArray.push(newFridgeItem);
    this.totalCalories += food.calories;
  }

  removeItemFrom(index) {
    const food = this.FridgeArray[index];
    this.totalCalories -= food.calories;
    this.FridgeArray.splice(index, 1);
    console.log(this.FridgeArray);
  }
}
