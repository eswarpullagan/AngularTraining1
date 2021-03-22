import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { CartitemsComponent } from '../cartitems/cartitems.component';
import { RouterModule } from '@angular/router';
import { MenulinksComponent } from '../menulinks/menulinks.component';
import { ManageComponent } from '../manage/manage.component';
import { CategoriesComponent } from '../categories/categories.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductsComponent, CartitemsComponent,MenulinksComponent, ManageComponent, CategoriesComponent],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild([
      {path:"menu", component: MenulinksComponent, children: [
        {path:"", component: ProductsComponent},
        {path:":ctgid", component: ProductsComponent}
    ]},
      {path:"manage",component:ManageComponent}
    ])
  ]
})
export class ShoppingModule { }
