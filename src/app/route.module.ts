import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { EswarModule } from './eswar/eswar.module';
import { LoginModule } from './login/login.module';
import { ShoppingModule } from "./shopping/shopping.module";

//const routes:Route=[];
const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"list",component:ListComponent},    
    {path:"**",component:NotFoundComponent}
];
@NgModule({
    imports:[EswarModule,LoginModule,ShoppingModule,RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class RouteModule{}