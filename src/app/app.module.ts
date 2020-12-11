import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ControllersComponent } from './components/controllers/controllers.component';
import { FridgeComponent } from './components/fridge/fridge.component';
import { FridgeItemComponent } from './components/fridge-item/fridge-item.component';
import { TotalCaloriesComponent } from './components/total-calories/total-calories.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllersComponent,
    FridgeComponent,
    FridgeItemComponent,
    TotalCaloriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
