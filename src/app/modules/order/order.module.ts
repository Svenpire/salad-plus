import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsselctorComponent } from './ssselctor/ssselctor.component';
import { BuilderComponent } from './builder/builder.component';
import { BuilderFormComponent } from './builder-form/builder-form.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientSelectorComponent } from './ingredient-selector/ingredient-selector.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderFormComponent } from './order-form/order-form.component';



@NgModule({
  declarations: [
    SsselctorComponent,
    BuilderComponent,
    BuilderFormComponent,
    IngredientListComponent,
    IngredientSelectorComponent,
    OrderListComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
