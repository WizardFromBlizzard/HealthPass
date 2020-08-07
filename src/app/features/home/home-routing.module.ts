import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { HomeComponent, SignupComponent, SignupFormComponent } from './pages';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "signup", component: SignupComponent},
    {path: "form", component: SignupFormComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {} 